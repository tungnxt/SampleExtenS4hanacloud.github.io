"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaAddressUsage = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BuPaAddressUsage extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BuPaAddressUsage = BuPaAddressUsage;
BuPaAddressUsage._entityName = 'A_BuPaAddressUsage';
BuPaAddressUsage._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BuPaAddressUsage._keys = [
    'BusinessPartner',
    'ValidityEndDate',
    'AddressUsage',
    'AddressID'
];
//# sourceMappingURL=BuPaAddressUsage.js.map