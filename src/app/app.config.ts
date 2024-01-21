import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { QueryClient, provideAngularQuery } from '@tanstack/angular-query-experimental';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"angular-1f34f","appId":"1:15797426967:web:a9ac057e89890172c6b552","storageBucket":"angular-1f34f.appspot.com","apiKey":"AIzaSyCd6hcw_AGPGYmGDu0WPo6UmmUntmQFJx8","authDomain":"angular-1f34f.firebaseapp.com","messagingSenderId":"15797426967"}))), 
    importProvidersFrom(provideFirestore(() => getFirestore())),
    BrowserModule,
    BrowserAnimationsModule,
    provideAngularQuery(new QueryClient()),
    importProvidersFrom(HttpClientModule)
  ]
};
