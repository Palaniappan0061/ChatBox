import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerComponent } from './component/customer/customer.component';
import { ExampleComponent } from './component/example/example.component';
import { SampleComponent } from './component/sample/sample.component';
import { SharedService } from './services/shared.service';
import { SupportComponent } from './component/support/support.component';
import { CustComponent } from './component/cust/cust.component';
import { ChatServiceService } from './service/chat-service.service';

@NgModule({
  declarations: [
    AppComponent,

    CustomerComponent,

    ExampleComponent,

    SampleComponent,

    SupportComponent,

    CustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SharedService,ChatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
