"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerService = void 0;
const common_1 = require("@nestjs/common");
const business_partner_service_1 = require("../../services/business-partner-service");
const odata_common_1 = require("@sap-cloud-sdk/odata-common");
const { businessPartnerApi } = (0, business_partner_service_1.businessPartnerService)();
let BusinessPartnerService = class BusinessPartnerService {
    async getAllBusinessPartners() {
        return await businessPartnerApi
            .requestBuilder()
            .getAll()
            .select(businessPartnerApi.schema.BUSINESS_PARTNER, businessPartnerApi.schema.FIRST_NAME, businessPartnerApi.schema.LAST_NAME)
            .filter((0, odata_common_1.or)(businessPartnerApi.schema.FIRST_NAME.notEquals(''), businessPartnerApi.schema.LAST_NAME.notEquals('')))
            .execute({
                destinationName: 's4-test'
        });
    }
};
exports.BusinessPartnerService = BusinessPartnerService;
exports.BusinessPartnerService = BusinessPartnerService = __decorate([
    (0, common_1.Injectable)()
], BusinessPartnerService);
//# sourceMappingURL=business-partner.service.js.map