"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDunningApi = void 0;
const CustomerDunning_1 = require("./CustomerDunning");
const CustomerDunningRequestBuilder_1 = require("./CustomerDunningRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerDunningApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomerDunning_1.CustomerDunning;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomerDunningApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustomerDunningRequestBuilder_1.CustomerDunningRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerDunning_1.CustomerDunning, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
                DUNNING_AREA: fieldBuilder.buildEdmTypeField('DunningArea', 'Edm.String', false),
                DUNNING_BLOCK: fieldBuilder.buildEdmTypeField('DunningBlock', 'Edm.String', true),
                DUNNING_LEVEL: fieldBuilder.buildEdmTypeField('DunningLevel', 'Edm.String', true),
                DUNNING_PROCEDURE: fieldBuilder.buildEdmTypeField('DunningProcedure', 'Edm.String', true),
                DUNNING_RECIPIENT: fieldBuilder.buildEdmTypeField('DunningRecipient', 'Edm.String', true),
                LAST_DUNNED_ON: fieldBuilder.buildEdmTypeField('LastDunnedOn', 'Edm.DateTime', true),
                LEG_DUNNING_PROCEDURE_ON: fieldBuilder.buildEdmTypeField('LegDunningProcedureOn', 'Edm.DateTime', true),
                DUNNING_CLERK: fieldBuilder.buildEdmTypeField('DunningClerk', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                CUSTOMER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerDunning_1.CustomerDunning)
            };
        }
        return this._schema;
    }
}
exports.CustomerDunningApi = CustomerDunningApi;
//# sourceMappingURL=CustomerDunningApi.js.map