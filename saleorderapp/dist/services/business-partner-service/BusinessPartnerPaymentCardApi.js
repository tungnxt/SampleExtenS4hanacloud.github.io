"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerPaymentCardApi = void 0;
const BusinessPartnerPaymentCard_1 = require("./BusinessPartnerPaymentCard");
const BusinessPartnerPaymentCardRequestBuilder_1 = require("./BusinessPartnerPaymentCardRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerPaymentCardApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerPaymentCardApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerPaymentCardRequestBuilder_1.BusinessPartnerPaymentCardRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                PAYMENT_CARD_ID: fieldBuilder.buildEdmTypeField('PaymentCardID', 'Edm.String', false),
                PAYMENT_CARD_TYPE: fieldBuilder.buildEdmTypeField('PaymentCardType', 'Edm.String', false),
                CARD_NUMBER: fieldBuilder.buildEdmTypeField('CardNumber', 'Edm.String', false),
                IS_STANDARD_CARD: fieldBuilder.buildEdmTypeField('IsStandardCard', 'Edm.Boolean', true),
                CARD_DESCRIPTION: fieldBuilder.buildEdmTypeField('CardDescription', 'Edm.String', true),
                VALIDITY_DATE: fieldBuilder.buildEdmTypeField('ValidityDate', 'Edm.DateTime', true),
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', true),
                CARD_HOLDER: fieldBuilder.buildEdmTypeField('CardHolder', 'Edm.String', true),
                CARD_ISSUING_BANK: fieldBuilder.buildEdmTypeField('CardIssuingBank', 'Edm.String', true),
                CARD_ISSUE_DATE: fieldBuilder.buildEdmTypeField('CardIssueDate', 'Edm.DateTime', true),
                PAYMENT_CARD_LOCK: fieldBuilder.buildEdmTypeField('PaymentCardLock', 'Edm.String', true),
                MASKED_CARD_NUMBER: fieldBuilder.buildEdmTypeField('MaskedCardNumber', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerPaymentCardApi = BusinessPartnerPaymentCardApi;
//# sourceMappingURL=BusinessPartnerPaymentCardApi.js.map