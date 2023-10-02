"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusPartAddrDepdntTaxNmbrApi = void 0;
const BusPartAddrDepdntTaxNmbr_1 = require("./BusPartAddrDepdntTaxNmbr");
const BusPartAddrDepdntTaxNmbrRequestBuilder_1 = require("./BusPartAddrDepdntTaxNmbrRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusPartAddrDepdntTaxNmbrApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusPartAddrDepdntTaxNmbrApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusPartAddrDepdntTaxNmbrRequestBuilder_1.BusPartAddrDepdntTaxNmbrRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                BP_TAX_TYPE: fieldBuilder.buildEdmTypeField('BPTaxType', 'Edm.String', false),
                BP_TAX_NUMBER: fieldBuilder.buildEdmTypeField('BPTaxNumber', 'Edm.String', true),
                BP_TAX_LONG_NUMBER: fieldBuilder.buildEdmTypeField('BPTaxLongNumber', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr)
            };
        }
        return this._schema;
    }
}
exports.BusPartAddrDepdntTaxNmbrApi = BusPartAddrDepdntTaxNmbrApi;
//# sourceMappingURL=BusPartAddrDepdntTaxNmbrApi.js.map