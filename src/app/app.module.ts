import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { MappingComponent } from './mapping/mapping.component';
import { PdtComponent } from './pdt/pdt.component';
import { AdcComponent } from './adc/adc.component';
import { GdtaComponent } from './gdta/gdta.component';
import { ResultatComponent } from './resultat/resultat.component';
import { CfgComponent } from './cfg/cfg.component';
import { UsrComponent } from './usr/usr.component';
import { ComposantsComponent } from './composants/composants.component';
import { CheminsComponent } from './chemins/chemins.component';


@NgModule({
  declarations: [
    
    
    AppComponent,
    MappingComponent,
    PdtComponent,
    AdcComponent,
    GdtaComponent,
    ResultatComponent,
    CfgComponent,
    UsrComponent,
    ComposantsComponent,
    CheminsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
