"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPartnerApi = void 0;
const SalesOrderHeaderPartner_1 = require("./SalesOrderHeaderPartner");
const SalesOrderHeaderPartnerRequestBuilder_1 = require("./SalesOrderHeaderPartnerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderHeaderPartnerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderHeaderPartner_1.SalesOrderHeaderPartner;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderHeaderPartnerApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_ADDRESS: new odata_v2_1.Link('to_Address', this, linkedApis[0]),
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderHeaderPartnerRequestBuilder_1.SalesOrderHeaderPartnerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderHeaderPartner_1.SalesOrderHeaderPartner, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false),
                PARTNER_FUNCTION_INTERNAL_CODE: fieldBuilder.buildEdmTypeField('PartnerFunctionInternalCode', 'Edm.String', true),
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true),
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true),
                PERSONNEL: fieldBuilder.buildEdmTypeField('Personnel', 'Edm.String', true),
                CONTACT_PERSON: fieldBuilder.buildEdmTypeField('ContactPerson', 'Edm.String', true),
                REFERENCE_BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('ReferenceBusinessPartner', 'Edm.String', true),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', true),
                VAT_REGISTRATION: fieldBuilder.buildEdmTypeField('VATRegistration', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderHeaderPartner_1.SalesOrderHeaderPartner)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderHeaderPartnerApi = SalesOrderHeaderPartnerApi;
//# sourceMappingURL=SalesOrderHeaderPartnerApi.js.map