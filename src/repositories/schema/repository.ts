export interface Repository {
  save(vars?: any): any;
  delete(vars?: any): any;
  update(vars?: any): any;
  getOne(vars?: any): any;
  getMany(vars?: any): any;
}
