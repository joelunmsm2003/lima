import { NgModule } from '@angular/core';
import { ReservaComponent } from './reserva/reserva';
import { LoginComponent } from './login/login';
import { SidebarComponent } from './sidebar/sidebar';
import { HttpModule } from '@angular/http'
@NgModule({
	declarations: [ReservaComponent,
    LoginComponent,
    SidebarComponent],
	imports: [HttpModule],
	exports: [ReservaComponent,
    LoginComponent,
    SidebarComponent]
})
export class ComponentsModule {}
