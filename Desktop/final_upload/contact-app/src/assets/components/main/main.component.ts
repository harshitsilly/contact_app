import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../Contact';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls:[`
        .scrollContainer{
            height: 60vh;
            overflow-y: scroll;
        }
        
    `]
})
export class MainComponent   {
}