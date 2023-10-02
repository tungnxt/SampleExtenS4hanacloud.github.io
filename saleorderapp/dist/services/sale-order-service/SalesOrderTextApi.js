"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderTextApi = void 0;
const SalesOrderText_1 = require("./SalesOrderText");
const SalesOrderTextRequestBuilder_1 = require("./SalesOrderTextRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderTextApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderText_1.SalesOrderText;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderTextApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderTextRequestBuilder_1.SalesOrderTextRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderText_1.SalesOrderText, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false),
                LONG_TEXT_ID: fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false),
                LONG_TEXT: fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderText_1.SalesOrderText)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderTextApi = SalesOrderTextApi;
//# sourceMappingURL=SalesOrderTextApi.js.map