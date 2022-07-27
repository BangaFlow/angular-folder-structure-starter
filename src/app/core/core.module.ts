import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NoAuthGuard } from './guards/no-auth.guard';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [HttpClientModule],
  providers: [
    NoAuthGuard
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
