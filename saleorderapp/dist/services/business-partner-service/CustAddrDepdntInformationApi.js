"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustAddrDepdntInformationApi = void 0;
const CustAddrDepdntInformation_1 = require("./CustAddrDepdntInformation");
const CustAddrDepdntInformationRequestBuilder_1 = require("./CustAddrDepdntInformationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustAddrDepdntInformationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustAddrDepdntInformation_1.CustAddrDepdntInformation;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustAddrDepdntInformationApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustAddrDepdntInformationRequestBuilder_1.CustAddrDepdntInformationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustAddrDepdntInformation_1.CustAddrDepdntInformation, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                EXPRESS_TRAIN_STATION_NAME: fieldBuilder.buildEdmTypeField('ExpressTrainStationName', 'Edm.String', true),
                TRAIN_STATION_NAME: fieldBuilder.buildEdmTypeField('TrainStationName', 'Edm.String', true),
                CITY_CODE: fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true),
                COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustAddrDepdntInformation_1.CustAddrDepdntInformation)
            };
        }
        return this._schema;
    }
}
exports.CustAddrDepdntInformationApi = CustAddrDepdntInformationApi;
//# sourceMappingURL=CustAddrDepdntInformationApi.js.map