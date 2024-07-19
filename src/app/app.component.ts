import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppNavbar,HeaderComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'this loaded dynamically' ;
  imgURL:string = 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-628.png?sfvrsn=bf64b1ee_3'

  isDisable: boolean = true ;

  isActivite:boolean = true;

  fruitName:string = 'apple'

  userName:string = 'John Doe'
$kamil: any;

  buttosnClick(){
    console.log('Button Click');
  }


  keyEnter(event:any) {
                                //* enter keyCode = 13
    console.log(event.keyCode); //* burda evet yerine başka bir isim yazabiliriz o sadece bir 

    if(event.keyCode == 13 ) {
      console.log('Enter Key Pressed');
    }
  }

  keyupFiltering(user:HTMLInputElement) {
    console.log(user.value);
  }

  updateUserName(username:HTMLInputElement) {
    this.userName = username.value
    console.log(this.userName);
  }

  onKeyup(){
    console.log(this.userName)

  }
 
}


