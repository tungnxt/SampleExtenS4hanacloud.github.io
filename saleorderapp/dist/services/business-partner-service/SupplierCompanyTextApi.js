"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCompanyTextApi = void 0;
const SupplierCompanyText_1 = require("./SupplierCompanyText");
const SupplierCompanyTextRequestBuilder_1 = require("./SupplierCompanyTextRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierCompanyTextApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierCompanyText_1.SupplierCompanyText;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierCompanyTextApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SupplierCompanyTextRequestBuilder_1.SupplierCompanyTextRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierCompanyText_1.SupplierCompanyText, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false),
                LONG_TEXT_ID: fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false),
                LONG_TEXT: fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierCompanyText_1.SupplierCompanyText)
            };
        }
        return this._schema;
    }
}
exports.SupplierCompanyTextApi = SupplierCompanyTextApi;
//# sourceMappingURL=SupplierCompanyTextApi.js.map