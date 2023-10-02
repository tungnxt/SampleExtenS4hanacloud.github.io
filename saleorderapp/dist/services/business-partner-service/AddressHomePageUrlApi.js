"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressHomePageUrlApi = void 0;
const AddressHomePageUrl_1 = require("./AddressHomePageUrl");
const AddressHomePageUrlRequestBuilder_1 = require("./AddressHomePageUrlRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressHomePageUrlApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressHomePageUrl_1.AddressHomePageUrl;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressHomePageUrlApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new AddressHomePageUrlRequestBuilder_1.AddressHomePageUrlRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressHomePageUrl_1.AddressHomePageUrl, this.deSerializers);
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
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', false),
                IS_DEFAULT_URL_ADDRESS: fieldBuilder.buildEdmTypeField('IsDefaultURLAddress', 'Edm.Boolean', false),
                SEARCH_URL_ADDRESS: fieldBuilder.buildEdmTypeField('SearchURLAddress', 'Edm.String', true),
                ADDRESS_COMMUNICATION_REMARK_TEXT: fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true),
                URL_FIELD_LENGTH: fieldBuilder.buildEdmTypeField('URLFieldLength', 'Edm.Int16', true),
                WEBSITE_URL: fieldBuilder.buildEdmTypeField('WebsiteURL', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressHomePageUrl_1.AddressHomePageUrl)
            };
        }
        return this._schema;
    }
}
exports.AddressHomePageUrlApi = AddressHomePageUrlApi;
//# sourceMappingURL=AddressHomePageUrlApi.js.map