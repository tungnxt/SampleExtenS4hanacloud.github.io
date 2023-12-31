"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPurchasingOrgTextApi = void 0;
const SupplierPurchasingOrgText_1 = require("./SupplierPurchasingOrgText");
const SupplierPurchasingOrgTextRequestBuilder_1 = require("./SupplierPurchasingOrgTextRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPurchasingOrgTextApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierPurchasingOrgText_1.SupplierPurchasingOrgText;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierPurchasingOrgTextApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SupplierPurchasingOrgTextRequestBuilder_1.SupplierPurchasingOrgTextRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierPurchasingOrgText_1.SupplierPurchasingOrgText, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
                PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false),
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false),
                LONG_TEXT_ID: fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false),
                LONG_TEXT: fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierPurchasingOrgText_1.SupplierPurchasingOrgText)
            };
        }
        return this._schema;
    }
}
exports.SupplierPurchasingOrgTextApi = SupplierPurchasingOrgTextApi;
//# sourceMappingURL=SupplierPurchasingOrgTextApi.js.map