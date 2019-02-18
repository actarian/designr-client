import { NgModule } from '@angular/core';
import { PluginsModule } from '@designr/plugins';
import { environment } from '../environments/environment';

console.log('AppPlugins > environment.plugins', environment.plugins);

@NgModule({
	imports: [
		PluginsModule.forRoot(environment.plugins),
	],
	exports: [PluginsModule]
})

export class AppPlugins {

}
