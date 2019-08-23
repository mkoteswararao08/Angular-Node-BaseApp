import {Component} from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector:'add-user',
    templateUrl:'./add-user.component.html',
    styleUrls:['./add-user.component.css']
})

export class AddUserComponent {
   constructor( private http:HttpClient, private router:Router){ }
    
//    newheaders=new HttpHeaders({ 'Access-Control-Allow-Origin':'http://localhost:3000',
//                                 'Access-Control-Allow-Credentials':'true' 
//                               });

   formSubmit(user){
       console.log(user);
       this.http.post("http://localhost:3000/api/addUser",user).subscribe(data=>{
           console.log(data);
           alert("User Added successful")
           this.router.navigate(['/UserList']);
       });
   }
}