import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { SidebarComponent } from './sidebar/sidebar';
import { HttpModule } from '@angular/http'
import { SliderComponent } from './slider/slider';
import { CategoriasComponent } from './categorias/categorias';
import { ReservaComponent } from './reserva/reserva';
import { SociaComponent } from './socia/socia';
@NgModule({
	declarations: [
    LoginComponent,
    SidebarComponent,
    SliderComponent,
    CategoriasComponent,
    ReservaComponent,
    SociaComponent,
    ],
	imports: [HttpModule],
	exports: [,
    LoginComponent,
    SidebarComponent,
    SliderComponent,
    CategoriasComponent,
    ReservaComponent,
    SociaComponent,
    ]
})
export class ComponentsModule {}
