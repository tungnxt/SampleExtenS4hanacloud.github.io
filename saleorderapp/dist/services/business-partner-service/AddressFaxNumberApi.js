"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressFaxNumberApi = void 0;
const AddressFaxNumber_1 = require("./AddressFaxNumber");
const AddressFaxNumberRequestBuilder_1 = require("./AddressFaxNumberRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressFaxNumberApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressFaxNumber_1.AddressFaxNumber;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressFaxNumberApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new AddressFaxNumberRequestBuilder_1.AddressFaxNumberRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressFaxNumber_1.AddressFaxNumber, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', false),
                ORDINAL_NUMBER: fieldBuilder.buildEdmTypeField('OrdinalNumber', 'Edm.String', false),
                IS_DEFAULT_FAX_NUMBER: fieldBuilder.buildEdmTypeField('IsDefaultFaxNumber', 'Edm.Boolean', true),
                FAX_COUNTRY: fieldBuilder.buildEdmTypeField('FaxCountry', 'Edm.String', true),
                FAX_NUMBER: fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', true),
                FAX_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField('FaxNumberExtension', 'Edm.String', true),
                INTERNATIONAL_FAX_NUMBER: fieldBuilder.buildEdmTypeField('InternationalFaxNumber', 'Edm.String', true),
                ADDRESS_COMMUNICATION_REMARK_TEXT: fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressFaxNumber_1.AddressFaxNumber)
            };
        }
        return this._schema;
    }
}
exports.AddressFaxNumberApi = AddressFaxNumberApi;
//# sourceMappingURL=AddressFaxNumberApi.js.map