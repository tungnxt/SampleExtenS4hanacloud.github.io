"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerTaxGroupingApi = void 0;
const CustomerTaxGrouping_1 = require("./CustomerTaxGrouping");
const CustomerTaxGroupingRequestBuilder_1 = require("./CustomerTaxGroupingRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerTaxGroupingApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomerTaxGrouping_1.CustomerTaxGrouping;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomerTaxGroupingApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustomerTaxGroupingRequestBuilder_1.CustomerTaxGroupingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerTaxGrouping_1.CustomerTaxGrouping, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                CUSTOMER_TAX_GROUPING_CODE: fieldBuilder.buildEdmTypeField('CustomerTaxGroupingCode', 'Edm.String', false),
                CUST_TAX_GRP_EXEMPTION_CERTIFICATE: fieldBuilder.buildEdmTypeField('CustTaxGrpExemptionCertificate', 'Edm.String', true),
                CUST_TAX_GROUP_EXEMPTION_RATE: fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionRate', 'Edm.Decimal', true),
                CUST_TAX_GROUP_EXEMPTION_START_DATE: fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionStartDate', 'Edm.DateTime', true),
                CUST_TAX_GROUP_EXEMPTION_END_DATE: fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionEndDate', 'Edm.DateTime', true),
                CUST_TAX_GROUP_SUBJECTED_START_DATE: fieldBuilder.buildEdmTypeField('CustTaxGroupSubjectedStartDate', 'Edm.DateTime', true),
                CUST_TAX_GROUP_SUBJECTED_END_DATE: fieldBuilder.buildEdmTypeField('CustTaxGroupSubjectedEndDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerTaxGrouping_1.CustomerTaxGrouping)
            };
        }
        return this._schema;
    }
}
exports.CustomerTaxGroupingApi = CustomerTaxGroupingApi;
//# sourceMappingURL=CustomerTaxGroupingApi.js.map