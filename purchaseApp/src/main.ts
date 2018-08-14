import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//импортирует функциональность модуля platformBrowserDynamic
// из пакета angular/platform-browser-dynamic. 
//platformBrowserDynamic использует bootstrapModule 
//для загрузки нужного модуля.
import { AppModule } from './app/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);