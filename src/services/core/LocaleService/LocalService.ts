
import En from './locales/en';
import Es from './locales/es';

import { LocalDictionary, SuportedLocales, InitialOptions } from './local.types'

class Local {

  dictionary: LocalDictionary
  
  constructor( initialOptions: InitialOptions ) {
    this.setLocalDictionary( initialOptions.local )
  }

  setLocalDictionary( locale: SuportedLocales ) : void{
    switch( locale ){
      case SuportedLocales.es:
        this.dictionary = Es as LocalDictionary
        break;
      case SuportedLocales.en:
      default:
        this.dictionary = En as LocalDictionary
        break;
    }
  }

  t(key: string){
    if( this.dictionary[key] ){
      return this.dictionary[key];
    }
    return 'KEY_NOT_FOUND';
  }

  T(keys: string[]) {
    return keys.reduce((obj: LocalDictionary, key) => {
      
      if( this.dictionary[key] ){
        obj[key] = this.dictionary[key];
      }
      else{
        obj[key] = 'KEY_NOT_FOUND';
      }

      return obj
    }, {})
  }
}

export default Local