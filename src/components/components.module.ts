import { NgModule } from '@angular/core';
import { ReservaComponent } from './reserva/reserva';
import { LoginComponent } from './login/login';
import { SidebarComponent } from './sidebar/sidebar';
import { HttpModule } from '@angular/http'
import { SliderComponent } from './slider/slider';
import { CategoriasComponent } from './categorias/categorias';
@NgModule({
	declarations: [ReservaComponent,
    LoginComponent,
    SidebarComponent,
    SliderComponent,
    CategoriasComponent],
	imports: [HttpModule],
	exports: [ReservaComponent,
    LoginComponent,
    SidebarComponent,
    SliderComponent,
    CategoriasComponent]
})
export class ComponentsModule {}
