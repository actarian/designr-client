import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppDatas } from './app.datas';
import { AppEditor } from './app.editor';
import { AppPages } from './app.pages';
import { AppPlugins } from './app.plugins';
import { AppRouting } from './app.routing';
import { AppUI } from './app.ui';
import { ContactComponent } from './pages/contact/contact.component';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';

@NgModule({
	imports: [
		BrowserModule.withServerTransition(environment.transition),
		BrowserTransferStateModule,
		AppRouting, // first
		AppDatas,
		AppPages,
		AppEditor,
		AppPlugins,
		AppUI,
	],
	providers: [],
	declarations: [
		AppComponent,
		ContactComponent,
		DefaultComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
		NotFoundComponent,
	],
	entryComponents: [
		ContactComponent,
		DefaultComponent,
		HomeComponent,
		NotFoundComponent,
	],
})

export class AppModule { }
