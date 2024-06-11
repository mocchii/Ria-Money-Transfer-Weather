import { ModuleWithProviders, NgModule } from '@angular/core';
import { CelciusPipe } from '@lib/components/models/celciuspipe';
import { PopPipe } from '@lib/components/models/poppipe';


@NgModule({
  declarations: [
    CelciusPipe, PopPipe
  ],
  exports: [
    CelciusPipe, PopPipe
  ]
})
export class SharingModule {
  static forRoot(): ModuleWithProviders<SharingModule> {
    return {
      ngModule: SharingModule,
      providers: [  ]
    };
  }
}