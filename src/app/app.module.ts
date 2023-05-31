import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { StandaloneComponent } from "./standalone/standalone.component";

@NgModule({
    declarations: [
        AppComponent,
        TraditionalComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StandaloneComponent
    ]
})
export class AppModule { }
