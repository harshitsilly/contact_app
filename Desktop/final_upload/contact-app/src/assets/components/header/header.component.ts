import { ContactService } from '../../services/contact.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    styleUrls: [`
        .tabActive{
            background-color: #eee;
        }
    `],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private contactService: ContactService){}

    onClickContacts(){
        this.contactService.searchTriggredOrFavouritesClicked.emit("");
    }
    onClickFavourites(){
        this.contactService.searchTriggredOrFavouritesClicked.emit("fiilterFavourites");
    }
    
}