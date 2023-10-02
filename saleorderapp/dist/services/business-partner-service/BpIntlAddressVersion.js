"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpIntlAddressVersion = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpIntlAddressVersion extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpIntlAddressVersion = BpIntlAddressVersion;
BpIntlAddressVersion._entityName = 'A_BPIntlAddressVersion';
BpIntlAddressVersion._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpIntlAddressVersion._keys = ['BusinessPartner', 'AddressID', 'AddressRepresentationCode'];
//# sourceMappingURL=BpIntlAddressVersion.js.map