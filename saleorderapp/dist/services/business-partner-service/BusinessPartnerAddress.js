"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerAddress = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusinessPartnerAddress = BusinessPartnerAddress;
BusinessPartnerAddress._entityName = 'A_BusinessPartnerAddress';
BusinessPartnerAddress._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BusinessPartnerAddress._keys = ['BusinessPartner', 'AddressID'];
//# sourceMappingURL=BusinessPartnerAddress.js.map