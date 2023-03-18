"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrysModule = void 0;
const common_1 = require("@nestjs/common");
const countrys_service_1 = require("./countrys.service");
const countrys_controller_1 = require("./countrys.controller");
let CountrysModule = class CountrysModule {
};
CountrysModule = __decorate([
    (0, common_1.Module)({
        controllers: [countrys_controller_1.CountrysController],
        providers: [countrys_service_1.CountrysService]
    })
], CountrysModule);
exports.CountrysModule = CountrysModule;
//# sourceMappingURL=countrys.module.js.map