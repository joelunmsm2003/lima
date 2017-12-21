var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { VentaPage } from '../../pages/venta/venta';
/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SliderComponent = /** @class */ (function () {
    function SliderComponent(_categoria) {
        var _this = this;
        this._categoria = _categoria;
        this.host = 'http://codigito.com:8000/';
        this.ventaPage = VentaPage;
        this._categoria.getcategorias()
            .subscribe(function (data) { return _this.categoria = data; });
    }
    SliderComponent = __decorate([
        Component({
            selector: 'sliderpue',
            templateUrl: 'slider.html',
            providers: [CategoriasProvider]
        }),
        __metadata("design:paramtypes", [CategoriasProvider])
    ], SliderComponent);
    return SliderComponent;
}());
export { SliderComponent };
//# sourceMappingURL=slider.js.map