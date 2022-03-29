export interface Formatter {
  toSave(vars?: any): any;
  toUpdate(vars?: any): any;
  one(vars?: any): any;
  many(vars?: any): any;
}
