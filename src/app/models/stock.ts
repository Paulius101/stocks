export class Stock {
  public constructor(
    public name: string,
    public code:string,
    public price:number,
    public previousPrice:number,
    public exchange:string,
    public favorite:boolean = false
  )
  {}
}

export interface addFormInterface{
     name: string,
      code: string,
      price: number,
      exchange:string
}

export interface updateFormInterface{
  price:number,
  exchange:string,
  favorite:boolean,
}