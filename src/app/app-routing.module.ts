import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingComponent } from './mapping/mapping.component';
import { AdcComponent } from './adc/adc.component';
import { CfgComponent } from './cfg/cfg.component';
import { GdtaComponent } from './gdta/gdta.component';
import { PdtComponent } from './pdt/pdt.component';
import { ResultatComponent } from './resultat/resultat.component';
import { UsrComponent } from './usr/usr.component';
import { ComposantsComponent } from './composants/composants.component';
import { CheminsComponent } from './chemins/chemins.component';

const routes: Routes = [ 
  {
    path: 'Mapping',
    component: MappingComponent
  },
  {
    path: 'Atelier-de-conception',
    component: AdcComponent
  },
  {
    path: 'Configuration',
    component: CfgComponent
  },
  {
    path: 'Generation-des-tests-automatises',
    component: GdtaComponent
  },
  {
    path: 'Preparation-de-tests',
    component: PdtComponent
  },
  {
    path: 'Resultat',
    component: ResultatComponent
  },
  {
    path: 'Users',
    component: UsrComponent
  },
  {
    path: 'Preparation-de-tests/Composants',
    component: ComposantsComponent
  },
  {
    path: 'Preparation-de-tests/Chemins',
    component: CheminsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
