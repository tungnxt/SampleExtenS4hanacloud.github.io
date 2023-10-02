"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaIdentificationApi = void 0;
const BuPaIdentification_1 = require("./BuPaIdentification");
const BuPaIdentificationRequestBuilder_1 = require("./BuPaIdentificationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BuPaIdentificationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BuPaIdentification_1.BuPaIdentification;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BuPaIdentificationApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BuPaIdentificationRequestBuilder_1.BuPaIdentificationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BuPaIdentification_1.BuPaIdentification, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                BP_IDENTIFICATION_TYPE: fieldBuilder.buildEdmTypeField('BPIdentificationType', 'Edm.String', false),
                BP_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField('BPIdentificationNumber', 'Edm.String', false),
                BP_IDN_NMBR_ISSUING_INSTITUTE: fieldBuilder.buildEdmTypeField('BPIdnNmbrIssuingInstitute', 'Edm.String', true),
                BP_IDENTIFICATION_ENTRY_DATE: fieldBuilder.buildEdmTypeField('BPIdentificationEntryDate', 'Edm.DateTime', true),
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true),
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BuPaIdentification_1.BuPaIdentification)
            };
        }
        return this._schema;
    }
}
exports.BuPaIdentificationApi = BuPaIdentificationApi;
//# sourceMappingURL=BuPaIdentificationApi.js.map