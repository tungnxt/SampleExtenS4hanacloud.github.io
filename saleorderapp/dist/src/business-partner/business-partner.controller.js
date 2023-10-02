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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerController = void 0;
const common_1 = require("@nestjs/common");
const business_partner_service_1 = require("./business-partner.service");
let BusinessPartnerController = class BusinessPartnerController {
    constructor(businessPartnerService) {
        this.businessPartnerService = businessPartnerService;
    }
    async getBusinessPartners() {
        return await this.businessPartnerService
            .getAllBusinessPartners()
            .catch((error) => {
            throw new common_1.HttpException(`Failed to get business partners - ${error.message}`, 500);
        });
    }
};
exports.BusinessPartnerController = BusinessPartnerController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessPartnerController.prototype, "getBusinessPartners", null);
exports.BusinessPartnerController = BusinessPartnerController = __decorate([
    (0, common_1.Controller)('business-partner'),
    __metadata("design:paramtypes", [business_partner_service_1.BusinessPartnerService])
], BusinessPartnerController);
//# sourceMappingURL=business-partner.controller.js.map