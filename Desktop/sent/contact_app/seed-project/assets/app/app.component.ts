import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`
        .border{
            border: solid #f7f7f9;
            padding: 2rem 3rem 2rem 3rem;
            min-width: 450px;
        }
            
    `],
    templateUrl: './app.component.html'
})
export class AppComponent {
}