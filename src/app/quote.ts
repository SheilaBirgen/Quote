import { stringify } from 'querystring';

export class Quote {
    showDescription:boolean;
    constructor(
       public id: number,
       public name: string,
       public description:string,
       public Date:Date
    ){
        this.showDescription=false;
    }

}










