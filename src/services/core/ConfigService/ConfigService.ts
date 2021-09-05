
import { ConfigOptions, InitialConfigOptions } from './config.types'
import { SuportedLocales } from '~/services/core/LocaleService/local.types';


class Config {
  
  config : ConfigOptions = {
    local : SuportedLocales.en
  }

  constructor( initialOptions?: InitialConfigOptions ) {
    if( initialOptions && initialOptions.local ){
      this.config.local =  initialOptions.local;
    }
  }

  get currentLocal(){
    return this.config.local;
  }

  get currentConfig(){
    return this.config;
  }
}

export default Config