"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderRelatedObjectApi = void 0;
const SalesOrderRelatedObject_1 = require("./SalesOrderRelatedObject");
const SalesOrderRelatedObjectRequestBuilder_1 = require("./SalesOrderRelatedObjectRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderRelatedObjectApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderRelatedObject_1.SalesOrderRelatedObject;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderRelatedObjectApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderRelatedObjectRequestBuilder_1.SalesOrderRelatedObjectRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderRelatedObject_1.SalesOrderRelatedObject, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                SD_DOC_RELATED_OBJECT_SEQUENCE_NMBR: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectSequenceNmbr', 'Edm.String', false),
                SD_DOCUMENT_RELATED_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('SDDocumentRelatedObjectType', 'Edm.String', true),
                SD_DOC_RELATED_OBJECT_SYSTEM: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectSystem', 'Edm.String', true),
                SD_DOC_RELATED_OBJECT_REFERENCE_1: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectReference1', 'Edm.String', true),
                SD_DOC_RELATED_OBJECT_REFERENCE_2: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectReference2', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderRelatedObject_1.SalesOrderRelatedObject)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderRelatedObjectApi = SalesOrderRelatedObjectApi;
//# sourceMappingURL=SalesOrderRelatedObjectApi.js.map