"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSalesPartnerFuncApi = void 0;
const CustSalesPartnerFunc_1 = require("./CustSalesPartnerFunc");
const CustSalesPartnerFuncRequestBuilder_1 = require("./CustSalesPartnerFuncRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustSalesPartnerFuncApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustSalesPartnerFunc_1.CustSalesPartnerFunc;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustSalesPartnerFuncApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustSalesPartnerFuncRequestBuilder_1.CustSalesPartnerFuncRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustSalesPartnerFunc_1.CustSalesPartnerFunc, this.deSerializers);
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
                PARTNER_COUNTER: fieldBuilder.buildEdmTypeField('PartnerCounter', 'Edm.String', false),
                PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false),
                BP_CUSTOMER_NUMBER: fieldBuilder.buildEdmTypeField('BPCustomerNumber', 'Edm.String', true),
                CUSTOMER_PARTNER_DESCRIPTION: fieldBuilder.buildEdmTypeField('CustomerPartnerDescription', 'Edm.String', true),
                DEFAULT_PARTNER: fieldBuilder.buildEdmTypeField('DefaultPartner', 'Edm.Boolean', true),
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true),
                PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField('PersonnelNumber', 'Edm.String', true),
                CONTACT_PERSON: fieldBuilder.buildEdmTypeField('ContactPerson', 'Edm.String', true),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustSalesPartnerFunc_1.CustSalesPartnerFunc)
            };
        }
        return this._schema;
    }
}
exports.CustSalesPartnerFuncApi = CustSalesPartnerFuncApi;
//# sourceMappingURL=CustSalesPartnerFuncApi.js.map