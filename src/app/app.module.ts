import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameGeneratorComponent } from './name-generator/name-generator.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormComponent } from './appform/appform.component';

@NgModule({
  declarations: [
    AppComponent,
    NameGeneratorComponent,
    ProfileEditorComponent,
    FormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
