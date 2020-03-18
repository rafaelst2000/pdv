import {Routes} from '@angular/router'

import {CestaComponent} from './cesta/cesta.component'
import {ListaComponent} from './lista/lista.component'

export const ROUTES: Routes = [
    {path: '', component: ListaComponent},
    {path: 'lista', component: ListaComponent},
    {path: 'cesta', component: CestaComponent}
]