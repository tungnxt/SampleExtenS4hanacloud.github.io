"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaIndustryApi = void 0;
const BuPaIndustry_1 = require("./BuPaIndustry");
const BuPaIndustryRequestBuilder_1 = require("./BuPaIndustryRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BuPaIndustryApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BuPaIndustry_1.BuPaIndustry;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BuPaIndustryApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BuPaIndustryRequestBuilder_1.BuPaIndustryRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BuPaIndustry_1.BuPaIndustry, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                INDUSTRY_SECTOR: fieldBuilder.buildEdmTypeField('IndustrySector', 'Edm.String', false),
                INDUSTRY_SYSTEM_TYPE: fieldBuilder.buildEdmTypeField('IndustrySystemType', 'Edm.String', false),
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                IS_STANDARD_INDUSTRY: fieldBuilder.buildEdmTypeField('IsStandardIndustry', 'Edm.String', true),
                INDUSTRY_KEY_DESCRIPTION: fieldBuilder.buildEdmTypeField('IndustryKeyDescription', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BuPaIndustry_1.BuPaIndustry)
            };
        }
        return this._schema;
    }
}
exports.BuPaIndustryApi = BuPaIndustryApi;
//# sourceMappingURL=BuPaIndustryApi.js.map