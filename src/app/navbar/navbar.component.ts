import { Component } from "@angular/core";

@Component({

    selector:'app-navbar',
    standalone: true,
    template: ` <h1>Navbar Component</h1>
                <p>Dumpy Pragaraph</p>
                <button>Submit</button>
                `
        ,
    templateUrl:'./navbar.component.html' ,
    styleUrl:'./navbar.component.css'
    

})

// export olmassa import edemiyoruz
export class   AppNavbar {

}
