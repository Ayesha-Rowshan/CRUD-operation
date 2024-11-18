import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  
import { RegistrationComponent } from './registration/registration.component'; 

export const appConfig = {
  providers: [
    importProvidersFrom(ReactiveFormsModule)
  ]
};
 