"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPartnerFuncApi = void 0;
const SupplierPartnerFunc_1 = require("./SupplierPartnerFunc");
const SupplierPartnerFuncRequestBuilder_1 = require("./SupplierPartnerFuncRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPartnerFuncApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierPartnerFunc_1.SupplierPartnerFunc;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierPartnerFuncApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SupplierPartnerFuncRequestBuilder_1.SupplierPartnerFuncRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierPartnerFunc_1.SupplierPartnerFunc, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
                PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false),
                SUPPLIER_SUBRANGE: fieldBuilder.buildEdmTypeField('SupplierSubrange', 'Edm.String', false),
                PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
                PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false),
                PARTNER_COUNTER: fieldBuilder.buildEdmTypeField('PartnerCounter', 'Edm.String', false),
                DEFAULT_PARTNER: fieldBuilder.buildEdmTypeField('DefaultPartner', 'Edm.Boolean', true),
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                REFERENCE_SUPPLIER: fieldBuilder.buildEdmTypeField('ReferenceSupplier', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierPartnerFunc_1.SupplierPartnerFunc)
            };
        }
        return this._schema;
    }
}
exports.SupplierPartnerFuncApi = SupplierPartnerFuncApi;
//# sourceMappingURL=SupplierPartnerFuncApi.js.map