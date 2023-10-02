"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustUnldgPtAddrDepdntInfoApi = void 0;
const CustUnldgPtAddrDepdntInfo_1 = require("./CustUnldgPtAddrDepdntInfo");
const CustUnldgPtAddrDepdntInfoRequestBuilder_1 = require("./CustUnldgPtAddrDepdntInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustUnldgPtAddrDepdntInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustUnldgPtAddrDepdntInfoApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustUnldgPtAddrDepdntInfoRequestBuilder_1.CustUnldgPtAddrDepdntInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                UNLOADING_POINT_NAME: fieldBuilder.buildEdmTypeField('UnloadingPointName', 'Edm.String', false),
                CUSTOMER_FACTORY_CALENDER_CODE: fieldBuilder.buildEdmTypeField('CustomerFactoryCalenderCode', 'Edm.String', true),
                BP_GOODS_RECEIVING_HOURS_CODE: fieldBuilder.buildEdmTypeField('BPGoodsReceivingHoursCode', 'Edm.String', true),
                IS_DFLT_BP_UNLOADING_POINT: fieldBuilder.buildEdmTypeField('IsDfltBPUnloadingPoint', 'Edm.Boolean', true),
                MONDAY_MORNING_OPENING_TIME: fieldBuilder.buildEdmTypeField('MondayMorningOpeningTime', 'Edm.Time', true),
                MONDAY_MORNING_CLOSING_TIME: fieldBuilder.buildEdmTypeField('MondayMorningClosingTime', 'Edm.Time', true),
                MONDAY_AFTERNOON_OPENING_TIME: fieldBuilder.buildEdmTypeField('MondayAfternoonOpeningTime', 'Edm.Time', true),
                MONDAY_AFTERNOON_CLOSING_TIME: fieldBuilder.buildEdmTypeField('MondayAfternoonClosingTime', 'Edm.Time', true),
                TUESDAY_MORNING_OPENING_TIME: fieldBuilder.buildEdmTypeField('TuesdayMorningOpeningTime', 'Edm.Time', true),
                TUESDAY_MORNING_CLOSING_TIME: fieldBuilder.buildEdmTypeField('TuesdayMorningClosingTime', 'Edm.Time', true),
                TUESDAY_AFTERNOON_OPENING_TIME: fieldBuilder.buildEdmTypeField('TuesdayAfternoonOpeningTime', 'Edm.Time', true),
                TUESDAY_AFTERNOON_CLOSING_TIME: fieldBuilder.buildEdmTypeField('TuesdayAfternoonClosingTime', 'Edm.Time', true),
                WEDNESDAY_MORNING_OPENING_TIME: fieldBuilder.buildEdmTypeField('WednesdayMorningOpeningTime', 'Edm.Time', true),
                WEDNESDAY_MORNING_CLOSING_TIME: fieldBuilder.buildEdmTypeField('WednesdayMorningClosingTime', 'Edm.Time', true),
                WEDNESDAY_AFTERNOON_OPENING_TIME: fieldBuilder.buildEdmTypeField('WednesdayAfternoonOpeningTime', 'Edm.Time', true),
                WEDNESDAY_AFTERNOON_CLOSING_TIME: fieldBuilder.buildEdmTypeField('WednesdayAfternoonClosingTime', 'Edm.Time', true),
                THURSDAY_MORNING_OPENING_TIME: fieldBuilder.buildEdmTypeField('ThursdayMorningOpeningTime', 'Edm.Time', true),
                THURSDAY_MORNING_CLOSING_TIME: fieldBuilder.buildEdmTypeField('ThursdayMorningClosingTime', 'Edm.Time', true),
                THURSDAY_AFTERNOON_OPENING_TIME: fieldBuilder.buildEdmTypeField('ThursdayAfternoonOpeningTime', 'Edm.Time', true),
                THURSDAY_AFTERNOON_CLOSING_TIME: fieldBuilder.buildEdmTypeField('ThursdayAfternoonClosingTime', 'Edm.Time', true),
                FRIDAY_MORNING_OPENING_TIME: fieldBuilder.buildEdmTypeField('FridayMorningOpeningTime', 'Edm.Time', true),
                FRIDAY_MORNING_CLOSING_TIME: fieldBuilder.buildEdmTypeField('FridayMorningClosingTime', 'Edm.Time', true),
                FRIDAY_AFTERNOON_OPENING_TIME: fieldBuilder.buildEdmTypeField('FridayAfternoonOpeningTime', 'Edm.Time', true),
                FRIDAY_AFTERNOON_CLOSING_TIME: fieldBuilder.buildEdmTypeField('FridayAfternoonClosingTime', 'Edm.Time', true),
                SATURDAY_MORNING_OPENING_TIME: fieldBuilder.buildEdmTypeField('SaturdayMorningOpeningTime', 'Edm.Time', true),
                SATURDAY_MORNING_CLOSING_TIME: fieldBuilder.buildEdmTypeField('SaturdayMorningClosingTime', 'Edm.Time', true),
                SATURDAY_AFTERNOON_OPENING_TIME: fieldBuilder.buildEdmTypeField('SaturdayAfternoonOpeningTime', 'Edm.Time', true),
                SATURDAY_AFTERNOON_CLOSING_TIME: fieldBuilder.buildEdmTypeField('SaturdayAfternoonClosingTime', 'Edm.Time', true),
                SUNDAY_MORNING_OPENING_TIME: fieldBuilder.buildEdmTypeField('SundayMorningOpeningTime', 'Edm.Time', true),
                SUNDAY_MORNING_CLOSING_TIME: fieldBuilder.buildEdmTypeField('SundayMorningClosingTime', 'Edm.Time', true),
                SUNDAY_AFTERNOON_OPENING_TIME: fieldBuilder.buildEdmTypeField('SundayAfternoonOpeningTime', 'Edm.Time', true),
                SUNDAY_AFTERNOON_CLOSING_TIME: fieldBuilder.buildEdmTypeField('SundayAfternoonClosingTime', 'Edm.Time', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo)
            };
        }
        return this._schema;
    }
}
exports.CustUnldgPtAddrDepdntInfoApi = CustUnldgPtAddrDepdntInfoApi;
//# sourceMappingURL=CustUnldgPtAddrDepdntInfoApi.js.map