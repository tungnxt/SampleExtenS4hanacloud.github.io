"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierDunningApi = void 0;
const SupplierDunning_1 = require("./SupplierDunning");
const SupplierDunningRequestBuilder_1 = require("./SupplierDunningRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierDunningApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierDunning_1.SupplierDunning;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierDunningApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SupplierDunningRequestBuilder_1.SupplierDunningRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierDunning_1.SupplierDunning, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
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
                SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierDunning_1.SupplierDunning)
            };
        }
        return this._schema;
    }
}
exports.SupplierDunningApi = SupplierDunningApi;
//# sourceMappingURL=SupplierDunningApi.js.map