"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressEmailAddressApi = void 0;
const AddressEmailAddress_1 = require("./AddressEmailAddress");
const AddressEmailAddressRequestBuilder_1 = require("./AddressEmailAddressRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressEmailAddressApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressEmailAddress_1.AddressEmailAddress;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressEmailAddressApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new AddressEmailAddressRequestBuilder_1.AddressEmailAddressRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressEmailAddress_1.AddressEmailAddress, this.deSerializers);
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
                IS_DEFAULT_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('IsDefaultEmailAddress', 'Edm.Boolean', true),
                EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true),
                SEARCH_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('SearchEmailAddress', 'Edm.String', true),
                ADDRESS_COMMUNICATION_REMARK_TEXT: fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressEmailAddress_1.AddressEmailAddress)
            };
        }
        return this._schema;
    }
}
exports.AddressEmailAddressApi = AddressEmailAddressApi;
//# sourceMappingURL=AddressEmailAddressApi.js.map