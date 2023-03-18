"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrysController = void 0;
const common_1 = require("@nestjs/common");
const countrys_service_1 = require("./countrys.service");
const create_country_dto_1 = require("./dto/create-country.dto");
const update_country_dto_1 = require("./dto/update-country.dto");
let CountrysController = class CountrysController {
    constructor(countrysService) {
        this.countrysService = countrysService;
    }
    create(createCountryDto) {
        return this.countrysService.create(createCountryDto);
    }
    findAll() {
        return this.countrysService.findAll();
    }
    findOne(id) {
        return this.countrysService.findOne(+id);
    }
    update(id, updateCountryDto) {
        return this.countrysService.update(+id, updateCountryDto);
    }
    remove(id) {
        return this.countrysService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_country_dto_1.CreateCountryDto]),
    __metadata("design:returntype", void 0)
], CountrysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountrysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountrysController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_country_dto_1.UpdateCountryDto]),
    __metadata("design:returntype", void 0)
], CountrysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountrysController.prototype, "remove", null);
CountrysController = __decorate([
    (0, common_1.Controller)('countrys'),
    __metadata("design:paramtypes", [countrys_service_1.CountrysService])
], CountrysController);
exports.CountrysController = CountrysController;
//# sourceMappingURL=countrys.controller.js.map