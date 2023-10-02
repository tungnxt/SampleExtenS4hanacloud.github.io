"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerBankApi = void 0;
const BusinessPartnerBank_1 = require("./BusinessPartnerBank");
const BusinessPartnerBankRequestBuilder_1 = require("./BusinessPartnerBankRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerBankApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartnerBank_1.BusinessPartnerBank;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerBankApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerBankRequestBuilder_1.BusinessPartnerBankRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerBank_1.BusinessPartnerBank, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                BANK_IDENTIFICATION: fieldBuilder.buildEdmTypeField('BankIdentification', 'Edm.String', false),
                BANK_COUNTRY_KEY: fieldBuilder.buildEdmTypeField('BankCountryKey', 'Edm.String', true),
                BANK_NAME: fieldBuilder.buildEdmTypeField('BankName', 'Edm.String', true),
                BANK_NUMBER: fieldBuilder.buildEdmTypeField('BankNumber', 'Edm.String', true),
                SWIFT_CODE: fieldBuilder.buildEdmTypeField('SWIFTCode', 'Edm.String', true),
                BANK_CONTROL_KEY: fieldBuilder.buildEdmTypeField('BankControlKey', 'Edm.String', true),
                BANK_ACCOUNT_HOLDER_NAME: fieldBuilder.buildEdmTypeField('BankAccountHolderName', 'Edm.String', true),
                BANK_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField('BankAccountName', 'Edm.String', true),
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true),
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', true),
                IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
                IBAN_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('IBANValidityStartDate', 'Edm.DateTime', true),
                BANK_ACCOUNT: fieldBuilder.buildEdmTypeField('BankAccount', 'Edm.String', true),
                BANK_ACCOUNT_REFERENCE_TEXT: fieldBuilder.buildEdmTypeField('BankAccountReferenceText', 'Edm.String', true),
                COLLECTION_AUTH_IND: fieldBuilder.buildEdmTypeField('CollectionAuthInd', 'Edm.Boolean', true),
                CITY_NAME: fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerBank_1.BusinessPartnerBank)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerBankApi = BusinessPartnerBankApi;
//# sourceMappingURL=BusinessPartnerBankApi.js.map