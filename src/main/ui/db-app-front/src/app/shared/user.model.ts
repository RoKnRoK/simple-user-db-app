export class User {
    constructor(
      public name:string,
      public password:Array<string>,
      public id:number,
      public type:string,
      public dateCreated:string
    ) {}
}
