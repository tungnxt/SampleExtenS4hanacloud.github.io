"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemRelatedObjectApi = void 0;
const SalesOrderItemRelatedObject_1 = require("./SalesOrderItemRelatedObject");
const SalesOrderItemRelatedObjectRequestBuilder_1 = require("./SalesOrderItemRelatedObjectRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemRelatedObjectApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderItemRelatedObject_1.SalesOrderItemRelatedObject;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderItemRelatedObjectApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0]),
            TO_SALES_ORDER_ITEM: new odata_v2_1.OneToOneLink('to_SalesOrderItem', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderItemRelatedObjectRequestBuilder_1.SalesOrderItemRelatedObjectRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderItemRelatedObject_1.SalesOrderItemRelatedObject, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                SD_DOC_RELATED_OBJECT_SEQUENCE_NMBR: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectSequenceNmbr', 'Edm.String', false),
                SD_DOCUMENT_RELATED_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('SDDocumentRelatedObjectType', 'Edm.String', true),
                SD_DOC_RELATED_OBJECT_SYSTEM: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectSystem', 'Edm.String', true),
                SD_DOC_RELATED_OBJECT_REFERENCE_1: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectReference1', 'Edm.String', true),
                SD_DOC_RELATED_OBJECT_REFERENCE_2: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectReference2', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderItemRelatedObject_1.SalesOrderItemRelatedObject)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderItemRelatedObjectApi = SalesOrderItemRelatedObjectApi;
//# sourceMappingURL=SalesOrderItemRelatedObjectApi.js.map