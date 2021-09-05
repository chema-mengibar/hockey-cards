import { SuportedLocales } from '~/services/core/LocaleService/local.types';

export interface InitialCoreOptions {
  local: SuportedLocales
}

export enum CoreStatus{
  initWait,
  initStarted,
  initEnd
}