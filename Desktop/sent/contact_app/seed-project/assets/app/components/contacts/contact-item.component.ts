import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../Contact';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-contact-item',
    templateUrl: './contact-item.component.html',
    styles:[`
        .imageCircle{
            height: 9rem;
            width: 9rem;
            border-radius: 5rem;
            border-color: black;
            border: 2px solid;
        }
    `]
})
export class ContactItemComponent  {
    @Input() contact:Contact;
    constructor(private router: Router, private contactService: ContactService){}

    onEdit(id: number){
        this.router.navigate(['Edit',id]);
    }
    onDeleteContact(contact: Contact){
        this.contactService.deletContactHelper(contact);
    }
    onClickStar(contact: Contact){
        contact.bFavourite = !contact.bFavourite;
        this.contactService.updateContactHelper(contact);
    }

  
    
}