"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerRating = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerRating extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusinessPartnerRating = BusinessPartnerRating;
BusinessPartnerRating._entityName = 'A_BusinessPartnerRating';
BusinessPartnerRating._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BusinessPartnerRating._keys = [
    'BusinessPartner',
    'BusinessPartnerRatingProcedure',
    'BPRatingValidityEndDate'
];
//# sourceMappingURL=BusinessPartnerRating.js.map