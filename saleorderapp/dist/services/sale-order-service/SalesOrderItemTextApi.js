"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemTextApi = void 0;
const SalesOrderItemText_1 = require("./SalesOrderItemText");
const SalesOrderItemTextRequestBuilder_1 = require("./SalesOrderItemTextRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemTextApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderItemText_1.SalesOrderItemText;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderItemTextApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0]),
            TO_SALES_ORDER_ITEM: new odata_v2_1.OneToOneLink('to_SalesOrderItem', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderItemTextRequestBuilder_1.SalesOrderItemTextRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderItemText_1.SalesOrderItemText, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false),
                LONG_TEXT_ID: fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false),
                LONG_TEXT: fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderItemText_1.SalesOrderItemText)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderItemTextApi = SalesOrderItemTextApi;
//# sourceMappingURL=SalesOrderItemTextApi.js.map