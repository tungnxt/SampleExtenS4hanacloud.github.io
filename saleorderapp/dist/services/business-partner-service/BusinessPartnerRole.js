"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerRole = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerRole extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusinessPartnerRole = BusinessPartnerRole;
BusinessPartnerRole._entityName = 'A_BusinessPartnerRole';
BusinessPartnerRole._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BusinessPartnerRole._keys = ['BusinessPartner', 'BusinessPartnerRole'];
//# sourceMappingURL=BusinessPartnerRole.js.map