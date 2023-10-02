"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaAddressUsageApi = void 0;
const BuPaAddressUsage_1 = require("./BuPaAddressUsage");
const BuPaAddressUsageRequestBuilder_1 = require("./BuPaAddressUsageRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BuPaAddressUsageApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BuPaAddressUsage_1.BuPaAddressUsage;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BuPaAddressUsageApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BuPaAddressUsageRequestBuilder_1.BuPaAddressUsageRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BuPaAddressUsage_1.BuPaAddressUsage, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', false),
                ADDRESS_USAGE: fieldBuilder.buildEdmTypeField('AddressUsage', 'Edm.String', false),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true),
                STANDARD_USAGE: fieldBuilder.buildEdmTypeField('StandardUsage', 'Edm.Boolean', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BuPaAddressUsage_1.BuPaAddressUsage)
            };
        }
        return this._schema;
    }
}
exports.BuPaAddressUsageApi = BuPaAddressUsageApi;
//# sourceMappingURL=BuPaAddressUsageApi.js.map