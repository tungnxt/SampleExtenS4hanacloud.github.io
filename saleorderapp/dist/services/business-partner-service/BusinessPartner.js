"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartner = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartner extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusinessPartner = BusinessPartner;
BusinessPartner._entityName = 'A_BusinessPartner';
BusinessPartner._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BusinessPartner._keys = ['BusinessPartner'];
//# sourceMappingURL=BusinessPartner.js.map