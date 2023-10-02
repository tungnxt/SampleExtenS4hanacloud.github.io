"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerContact = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerContact extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusinessPartnerContact = BusinessPartnerContact;
BusinessPartnerContact._entityName = 'A_BusinessPartnerContact';
BusinessPartnerContact._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BusinessPartnerContact._keys = [
    'RelationshipNumber',
    'BusinessPartnerCompany',
    'BusinessPartnerPerson',
    'ValidityEndDate'
];
//# sourceMappingURL=BusinessPartnerContact.js.map