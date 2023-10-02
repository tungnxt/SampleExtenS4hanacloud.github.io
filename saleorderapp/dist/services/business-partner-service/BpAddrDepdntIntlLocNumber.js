"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpAddrDepdntIntlLocNumber = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpAddrDepdntIntlLocNumber extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpAddrDepdntIntlLocNumber = BpAddrDepdntIntlLocNumber;
BpAddrDepdntIntlLocNumber._entityName = 'A_BPAddrDepdntIntlLocNumber';
BpAddrDepdntIntlLocNumber._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpAddrDepdntIntlLocNumber._keys = ['BusinessPartner', 'AddressID'];
//# sourceMappingURL=BpAddrDepdntIntlLocNumber.js.map