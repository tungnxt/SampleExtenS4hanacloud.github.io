"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSalesAreaTaxApi = void 0;
const CustomerSalesAreaTax_1 = require("./CustomerSalesAreaTax");
const CustomerSalesAreaTaxRequestBuilder_1 = require("./CustomerSalesAreaTaxRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerSalesAreaTaxApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomerSalesAreaTax_1.CustomerSalesAreaTax;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomerSalesAreaTaxApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SLS_AREA_ADDR_DEPDNT_TAX: new odata_v2_1.Link('to_SlsAreaAddrDepdntTax', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new CustomerSalesAreaTaxRequestBuilder_1.CustomerSalesAreaTaxRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerSalesAreaTax_1.CustomerSalesAreaTax, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false),
                DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false),
                DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false),
                DEPARTURE_COUNTRY: fieldBuilder.buildEdmTypeField('DepartureCountry', 'Edm.String', false),
                CUSTOMER_TAX_CATEGORY: fieldBuilder.buildEdmTypeField('CustomerTaxCategory', 'Edm.String', false),
                CUSTOMER_TAX_CLASSIFICATION: fieldBuilder.buildEdmTypeField('CustomerTaxClassification', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerSalesAreaTax_1.CustomerSalesAreaTax)
            };
        }
        return this._schema;
    }
}
exports.CustomerSalesAreaTaxApi = CustomerSalesAreaTaxApi;
//# sourceMappingURL=CustomerSalesAreaTaxApi.js.map