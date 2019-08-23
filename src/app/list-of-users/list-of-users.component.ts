import {Component} from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
    selector:'',
    templateUrl:'./list-of-users.component.html',
    styleUrls:['./list-of-users.component.css']
})

export class ListOfUsersComponent{
    constructor(private http:HttpClient) { }
    users;
    ngOnInit(){
        this.http.get("http://localhost:3000/api/user").subscribe((data)=>{
             console.log(data); 
             this.users=data;
        }) 
    }

    deleteUser(id){
       this.http.delete("http://localhost:3000/api/delete/"+id).subscribe((data)=>{
            console.log(data);
       })
       
       this.http.get("http://localhost:3000/api/user").subscribe((data)=>{
             console.log(data); 
             this.users=data;
        })
    }
    
}
