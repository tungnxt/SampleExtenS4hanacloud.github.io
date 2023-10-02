"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerPaymentCard = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerPaymentCard extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusinessPartnerPaymentCard = BusinessPartnerPaymentCard;
BusinessPartnerPaymentCard._entityName = 'A_BusinessPartnerPaymentCard';
BusinessPartnerPaymentCard._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BusinessPartnerPaymentCard._keys = [
    'BusinessPartner',
    'PaymentCardID',
    'PaymentCardType',
    'CardNumber'
];
//# sourceMappingURL=BusinessPartnerPaymentCard.js.map