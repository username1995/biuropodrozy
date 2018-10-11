import { NgModule } from '@angular/core';

import { BiuropodrozySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BiuropodrozySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BiuropodrozySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BiuropodrozySharedCommonModule {}
