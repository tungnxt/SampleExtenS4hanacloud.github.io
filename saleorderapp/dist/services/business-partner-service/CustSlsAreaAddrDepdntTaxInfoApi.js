"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntTaxInfoApi = void 0;
const CustSlsAreaAddrDepdntTaxInfo_1 = require("./CustSlsAreaAddrDepdntTaxInfo");
const CustSlsAreaAddrDepdntTaxInfoRequestBuilder_1 = require("./CustSlsAreaAddrDepdntTaxInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustSlsAreaAddrDepdntTaxInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustSlsAreaAddrDepdntTaxInfoApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustSlsAreaAddrDepdntTaxInfoRequestBuilder_1.CustSlsAreaAddrDepdntTaxInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo, this.deSerializers);
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
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                DEPARTURE_COUNTRY: fieldBuilder.buildEdmTypeField('DepartureCountry', 'Edm.String', false),
                CUSTOMER_TAX_CATEGORY: fieldBuilder.buildEdmTypeField('CustomerTaxCategory', 'Edm.String', false),
                CUSTOMER_TAX_CLASSIFICATION: fieldBuilder.buildEdmTypeField('CustomerTaxClassification', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo)
            };
        }
        return this._schema;
    }
}
exports.CustSlsAreaAddrDepdntTaxInfoApi = CustSlsAreaAddrDepdntTaxInfoApi;
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfoApi.js.map