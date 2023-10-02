"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntInfoApi = void 0;
const CustSlsAreaAddrDepdntInfo_1 = require("./CustSlsAreaAddrDepdntInfo");
const CustSlsAreaAddrDepdntInfoRequestBuilder_1 = require("./CustSlsAreaAddrDepdntInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustSlsAreaAddrDepdntInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustSlsAreaAddrDepdntInfoApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustSlsAreaAddrDepdntInfoRequestBuilder_1.CustSlsAreaAddrDepdntInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false),
                DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false),
                DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true),
                INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true),
                INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true),
                DELIVERY_IS_BLOCKED: fieldBuilder.buildEdmTypeField('DeliveryIsBlocked', 'Edm.String', true),
                SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                SUPPLYING_PLANT: fieldBuilder.buildEdmTypeField('SupplyingPlant', 'Edm.String', true),
                INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo)
            };
        }
        return this._schema;
    }
}
exports.CustSlsAreaAddrDepdntInfoApi = CustSlsAreaAddrDepdntInfoApi;
//# sourceMappingURL=CustSlsAreaAddrDepdntInfoApi.js.map