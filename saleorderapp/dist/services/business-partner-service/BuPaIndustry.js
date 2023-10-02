"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaIndustry = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BuPaIndustry extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BuPaIndustry = BuPaIndustry;
BuPaIndustry._entityName = 'A_BuPaIndustry';
BuPaIndustry._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BuPaIndustry._keys = ['IndustrySector', 'IndustrySystemType', 'BusinessPartner'];
//# sourceMappingURL=BuPaIndustry.js.map