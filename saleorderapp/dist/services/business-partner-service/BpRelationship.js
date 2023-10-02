"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpRelationship = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpRelationship extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpRelationship = BpRelationship;
BpRelationship._entityName = 'A_BPRelationship';
BpRelationship._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpRelationship._keys = [
    'RelationshipNumber',
    'BusinessPartner1',
    'BusinessPartner2',
    'ValidityEndDate'
];
//# sourceMappingURL=BpRelationship.js.map