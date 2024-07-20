import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppNavbar,HeaderComponent,FormsModule,NgIf,NgTemplateOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
    isLoggedIn:boolean = true;
    userName:string = 'Kamil ŞEN';

    isAdmin:boolean = false;
    isMember:boolean = false;
    isGuest:boolean = true;

    loginCount:number=0;

    userRole:string="Member";

    countLogginAttempts(){
      this.loginCount ++;
      console.log(this.loginCount);
    }


    /* 
    * Ng For Directive Part 9
    */

    users:Array<string> = ['John','Sam','Smith','Raj'];

    usersObj: Array<any> = [
      { id: 1, name:'Talha', email: 'talha@gmail.com'},
      { id: 2, name:'Kamil', email: 'kamil@gmail.com'},
      { id: 3, name:'Caner', email: 'caner@gmail.com'},
      { id: 4, name:'Semih', email: 'semih@gmail.com'}
    ]

 
}


