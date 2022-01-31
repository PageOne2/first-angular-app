import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { CsvComponent } from './components/csv/csv.component';
import { ButtonComponent } from './components/button/button.component';

const appRoutes: Routes = [
  { path: '', component: ButtonComponent},
  { path: 'dados', component: CsvComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CsvComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
