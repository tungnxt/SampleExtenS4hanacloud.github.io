"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpContactToFuncAndDept = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpContactToFuncAndDept extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpContactToFuncAndDept = BpContactToFuncAndDept;
BpContactToFuncAndDept._entityName = 'A_BPContactToFuncAndDept';
BpContactToFuncAndDept._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpContactToFuncAndDept._keys = [
    'RelationshipNumber',
    'BusinessPartnerCompany',
    'BusinessPartnerPerson',
    'ValidityEndDate'
];
//# sourceMappingURL=BpContactToFuncAndDept.js.map