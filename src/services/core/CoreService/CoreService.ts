import Config from '~/services/core/ConfigService/ConfigService'
import Local from '~/services/core/LocaleService/LocalService'

import { InitialCoreOptions, CoreStatus } from './core.types'
import { SuportedLocales, LocalDictionary } from '../LocaleService/local.types'

class CoreService {

  config: Config
  local: Local


  static status : CoreStatus = CoreStatus.initWait;
  static instance?: CoreService;

  constructor( intialCoreOptions?: InitialCoreOptions  ) {

    CoreService.status = CoreStatus.initStarted;

    const configInitialOptions = {
      local : intialCoreOptions ? intialCoreOptions.local : SuportedLocales.en
    }
    this.config = new Config( configInitialOptions )

    const localeInitialOptions = {
      local : this.config.currentLocal
    }
    this.local = new Local( localeInitialOptions );


    CoreService.instance = this;
    CoreService.status = CoreStatus.initEnd;
    
  }

  static getInstance() {
    //? lazy check
    if( CoreService.instance === undefined ){
      return null
    }
    return CoreService.instance;
  }
  
  static async isLoaded() {
    return CoreService.status === CoreStatus.initEnd 
  }

  static T(keys: string[]) {
    return CoreService.getInstance().local.T(keys)
  }

  static t(key: string) {
    return CoreService.getInstance().local.t(key)
  }
}

export default CoreService