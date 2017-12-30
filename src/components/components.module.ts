import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { SidebarComponent } from './sidebar/sidebar';
import { HttpModule } from '@angular/http'
import { SliderComponent } from './slider/slider';
import { CategoriasComponent } from './categorias/categorias';
import { ReservaComponent } from './reserva/reserva';
import { SociaComponent } from './socia/socia';
import { RegistroComponent } from './registro/registro';
@NgModule({
	declarations: [
    LoginComponent,
    SidebarComponent,
    SliderComponent,
    CategoriasComponent,
    ReservaComponent,
    SociaComponent,
    RegistroComponent,
    ],
	imports: [HttpModule],
	exports: [,
    LoginComponent,
    SidebarComponent,
    SliderComponent,
    CategoriasComponent,
    ReservaComponent,
    SociaComponent,
    RegistroComponent,
    ]
})
export class ComponentsModule {}
