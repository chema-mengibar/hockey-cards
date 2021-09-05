export type LocalDictionary = {
  [key: string]: string
}

export enum SuportedLocales {
  en,
  es
}

export interface InitialOptions {
  local: SuportedLocales
}


export enum LocalCodes {
  en = 'en-EN',
  es = 'es-ES',
}