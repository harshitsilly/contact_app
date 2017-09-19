import { NumberValidator } from './validator/number.directive';
import { HttpModule } from '@angular/http';
import { MyFilterPipe } from './pipe/filter.pipe';
import { AddComponent } from './components/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './routes/app.routing';
import { EditComponent } from './components/edit/edit.component';
import { MainComponent } from './components/main/main.component';
import { ContactService } from './services/contact.service';
import { ContactItemComponent } from './components/contacts/contact-item.component';
import { SearchBarComponent } from './components/searchBar/search.component';

import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContactsComponent,
        SearchBarComponent,
        ContactItemComponent,
        MainComponent,
        EditComponent,
        AddComponent,
        MyFilterPipe,
        NumberValidator
    ],
    imports: [BrowserModule, routes, FormsModule, HttpModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
    providers:[ContactService]
})
export class AppModule {

}