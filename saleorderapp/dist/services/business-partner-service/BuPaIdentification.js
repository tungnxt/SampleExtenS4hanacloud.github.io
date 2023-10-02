"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaIdentification = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BuPaIdentification extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BuPaIdentification = BuPaIdentification;
BuPaIdentification._entityName = 'A_BuPaIdentification';
BuPaIdentification._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BuPaIdentification._keys = [
    'BusinessPartner',
    'BPIdentificationType',
    'BPIdentificationNumber'
];
//# sourceMappingURL=BuPaIdentification.js.map