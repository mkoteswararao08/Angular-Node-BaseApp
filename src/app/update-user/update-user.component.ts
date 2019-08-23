import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
    selector:'update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent{
   constructor(private http:HttpClient, private routerpara:ActivatedRoute, private router:Router) { }
   id;
   user1;
   user=new FormGroup({
       id: new FormControl(),
       name: new FormControl(),
       age: new FormControl()
   }); 
   ngOnInit(){
       this.routerpara.paramMap.subscribe(data=>{
         this.id=data.get('id');
         console.log(this.id);
         this.http.get("http://localhost:3000/api/user/"+this.id).subscribe((data)=>{
             console.log(data); 
             this.user1=data[0];
             console.log(this.user1);
            /*  --> we can't assign user1 object directly to user.value, 
                    so we need to assign values using methods setValues() or patchValues().  
                --> To add or to change values in formGroup, always use methods setValues() or patchValues().
                    don't assign values directly, it will gives lot of bugs.
            */
            this.user.setValue({          
                 id:this.user1.id,
                 name:this.user1.name,
                 age:this.user1.age
            });
            console.log("values before update :");
            console.log(this.user.value);
        })      
      })
   }

   formSubmit(){
        console.log("values after update :");
        console.log(this.user.value);          
        this.http.put("http://localhost:3000/api/update/"+this.id,this.user.value).subscribe(data=>{
               console.log(data);
               alert("user Updated");
               this.router.navigate(['/UserList'])
        })
   }
}