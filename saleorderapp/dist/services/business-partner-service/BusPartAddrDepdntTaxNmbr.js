"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusPartAddrDepdntTaxNmbr = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusPartAddrDepdntTaxNmbr extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusPartAddrDepdntTaxNmbr = BusPartAddrDepdntTaxNmbr;
BusPartAddrDepdntTaxNmbr._entityName = 'A_BusPartAddrDepdntTaxNmbr';
BusPartAddrDepdntTaxNmbr._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BusPartAddrDepdntTaxNmbr._keys = ['BusinessPartner', 'AddressID', 'BPTaxType'];
//# sourceMappingURL=BusPartAddrDepdntTaxNmbr.js.map