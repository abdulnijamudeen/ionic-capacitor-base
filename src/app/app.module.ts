import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialUiModule } from './shared/material-ui/material-ui.module';
import { TeacherLoginComponent } from './shared/teacher-login/teacher-login.component';
import { TeacherRegisterComponent } from './shared/teacher-register/teacher-register.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherLoginComponent,
    TeacherRegisterComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MaterialUiModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Clipboard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
