//the imports is a TS feature that tells it where to find the components, nothing related to angular.
//There are three types of modules, featuremodule, shared module, and coremodule, feature module is used for features in the app like shopping list and recipes
//The shared modules is used when components, modules are shared between features, and the app module.
//  The CoreModule is an alternative to providedIn this module contains all the services of an appmodule then is imnported as a module in appmodule.ts, ie seprate module for the providers array if you used providedIn the new syntax no need to use this method

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// declarations is a combination of all the ComponentFactoryResolver, directives and custompipes in your project, components declared here can communicate with each other however cannot communicate with the ones declared in other modules, unless the module is imported
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    //DropdownDirective,
    //LoadingSpinnerComponent,
    //PlaceholderDirective...... double declarations are not allowed these were already declared in the sharedmodule, to use the we will have to import them
  ],

  //This array allows you to import other modules into your module. Helps  you to split your app into multiple modules.
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    
  ],

  //lists all the services we want to provide, application wide or use the latest syntax with providedIn: 'root' syntax
  // providers: [
    
  // ],

  //the root component is added to the bootstrap array
  bootstrap: [AppComponent],

  //used for components created in the code progamatically
  // entryComponents: [AlertComponent]
  
})
export class AppModule {}
