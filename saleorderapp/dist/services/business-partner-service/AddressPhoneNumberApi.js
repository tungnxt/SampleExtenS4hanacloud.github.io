"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressPhoneNumberApi = void 0;
const AddressPhoneNumber_1 = require("./AddressPhoneNumber");
const AddressPhoneNumberRequestBuilder_1 = require("./AddressPhoneNumberRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressPhoneNumberApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressPhoneNumber_1.AddressPhoneNumber;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressPhoneNumberApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new AddressPhoneNumberRequestBuilder_1.AddressPhoneNumberRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressPhoneNumber_1.AddressPhoneNumber, this.deSerializers);
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
                DESTINATION_LOCATION_COUNTRY: fieldBuilder.buildEdmTypeField('DestinationLocationCountry', 'Edm.String', true),
                IS_DEFAULT_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('IsDefaultPhoneNumber', 'Edm.Boolean', true),
                PHONE_NUMBER: fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true),
                PHONE_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField('PhoneNumberExtension', 'Edm.String', true),
                INTERNATIONAL_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('InternationalPhoneNumber', 'Edm.String', true),
                PHONE_NUMBER_TYPE: fieldBuilder.buildEdmTypeField('PhoneNumberType', 'Edm.String', true),
                ADDRESS_COMMUNICATION_REMARK_TEXT: fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressPhoneNumber_1.AddressPhoneNumber)
            };
        }
        return this._schema;
    }
}
exports.AddressPhoneNumberApi = AddressPhoneNumberApi;
//# sourceMappingURL=AddressPhoneNumberApi.js.map