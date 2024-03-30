import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadEventsComponent } from './upload-events/upload-events.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    UploadEventsComponent,
    
    AdminPageComponent
  ],
  imports: [
     AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp( environment.firebase )),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
