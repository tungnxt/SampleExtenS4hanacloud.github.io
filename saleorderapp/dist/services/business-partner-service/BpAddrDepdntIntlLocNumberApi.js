"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpAddrDepdntIntlLocNumberApi = void 0;
const BpAddrDepdntIntlLocNumber_1 = require("./BpAddrDepdntIntlLocNumber");
const BpAddrDepdntIntlLocNumberRequestBuilder_1 = require("./BpAddrDepdntIntlLocNumberRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpAddrDepdntIntlLocNumberApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpAddrDepdntIntlLocNumberApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpAddrDepdntIntlLocNumberRequestBuilder_1.BpAddrDepdntIntlLocNumberRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                INTERNATIONAL_LOCATION_NUMBER_1: fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_2: fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_3: fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber)
            };
        }
        return this._schema;
    }
}
exports.BpAddrDepdntIntlLocNumberApi = BpAddrDepdntIntlLocNumberApi;
//# sourceMappingURL=BpAddrDepdntIntlLocNumberApi.js.map