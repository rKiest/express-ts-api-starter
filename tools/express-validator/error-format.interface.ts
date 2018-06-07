export interface IErrorExpressValidatorItem {
  location?: string;
  param?: string;
  value?: any;
  msg?: string;
}

export interface IErrorExpressValidator {
  [key: string]: IErrorExpressValidatorItem;
}
