import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { BooksEditComponent } from './components/books-edit/books-edit.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersEditComponent } from './components/orders-edit/orders-edit.component';
import { DataService } from "./services/data.service";
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faUserCircle, faBug, faSignOutAlt, faTachometerAlt, faBook, faAddressBook, faFileAlt, faEnvelope, faFileUpload, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksEditComponent,
    CustomersComponent,
    CustomersEditComponent,
    DashboardComponent,
    OrdersComponent,
    OrdersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FilterPipeModule,
    OrderModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faTwitter, faGithub, faMedium, faHeart, faUserCircle, faBug, faSignOutAlt, faTachometerAlt, faBook, faAddressBook, faFileAlt, faEnvelope, faFileUpload, faDollarSign);
  }
}
