"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerWithHoldingTaxApi = void 0;
const CustomerWithHoldingTax_1 = require("./CustomerWithHoldingTax");
const CustomerWithHoldingTaxRequestBuilder_1 = require("./CustomerWithHoldingTaxRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerWithHoldingTaxApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomerWithHoldingTax_1.CustomerWithHoldingTax;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomerWithHoldingTaxApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustomerWithHoldingTaxRequestBuilder_1.CustomerWithHoldingTaxRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerWithHoldingTax_1.CustomerWithHoldingTax, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
                WITHHOLDING_TAX_TYPE: fieldBuilder.buildEdmTypeField('WithholdingTaxType', 'Edm.String', false),
                WITHHOLDING_TAX_CODE: fieldBuilder.buildEdmTypeField('WithholdingTaxCode', 'Edm.String', true),
                WITHHOLDING_TAX_AGENT: fieldBuilder.buildEdmTypeField('WithholdingTaxAgent', 'Edm.Boolean', true),
                OBLIGATION_DATE_BEGIN: fieldBuilder.buildEdmTypeField('ObligationDateBegin', 'Edm.DateTime', true),
                OBLIGATION_DATE_END: fieldBuilder.buildEdmTypeField('ObligationDateEnd', 'Edm.DateTime', true),
                WITHHOLDING_TAX_NUMBER: fieldBuilder.buildEdmTypeField('WithholdingTaxNumber', 'Edm.String', true),
                WITHHOLDING_TAX_CERTIFICATE: fieldBuilder.buildEdmTypeField('WithholdingTaxCertificate', 'Edm.String', true),
                WITHHOLDING_TAX_EXMPT_PERCENT: fieldBuilder.buildEdmTypeField('WithholdingTaxExmptPercent', 'Edm.Decimal', true),
                EXEMPTION_DATE_BEGIN: fieldBuilder.buildEdmTypeField('ExemptionDateBegin', 'Edm.DateTime', true),
                EXEMPTION_DATE_END: fieldBuilder.buildEdmTypeField('ExemptionDateEnd', 'Edm.DateTime', true),
                EXEMPTION_REASON: fieldBuilder.buildEdmTypeField('ExemptionReason', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerWithHoldingTax_1.CustomerWithHoldingTax)
            };
        }
        return this._schema;
    }
}
exports.CustomerWithHoldingTaxApi = CustomerWithHoldingTaxApi;
//# sourceMappingURL=CustomerWithHoldingTaxApi.js.map