export interface IUser {
    id:number,
    FullName:string;
    Email:string;
    Mobilenumber:string[];
    Address:{
   
     PostalCode:string;
      street:string
      
    };
     Password:string;
     reachedBy:string;//referdby
     Deliverypreferences?:string;//other //specific day

 }

