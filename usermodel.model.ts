export class Usermodel {
    
    public userName?: string;
    public email?: string;
    public address?: string;
    public city?: string;
    public contact?: number;


    constructor(userName: string, email: string, address: string, city: string, contact: number ){
       this.userName =userName;
       this.email = email;
       this.address =address;
       this.city = city;
       this.contact = contact;
    }
    
}