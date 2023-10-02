"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpContactToAddress = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpContactToAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpContactToAddress = BpContactToAddress;
BpContactToAddress._entityName = 'A_BPContactToAddress';
BpContactToAddress._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpContactToAddress._keys = [
    'RelationshipNumber',
    'BusinessPartnerCompany',
    'BusinessPartnerPerson',
    'ValidityEndDate',
    'AddressID'
];
//# sourceMappingURL=BpContactToAddress.js.map