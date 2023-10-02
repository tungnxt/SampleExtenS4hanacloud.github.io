"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderScheduleLineApi = void 0;
const SalesOrderScheduleLine_1 = require("./SalesOrderScheduleLine");
const SalesOrderScheduleLineRequestBuilder_1 = require("./SalesOrderScheduleLineRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderScheduleLineApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderScheduleLine_1.SalesOrderScheduleLine;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderScheduleLineApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SalesOrderScheduleLineRequestBuilder_1.SalesOrderScheduleLineRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderScheduleLine_1.SalesOrderScheduleLine, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                SCHEDULE_LINE: fieldBuilder.buildEdmTypeField('ScheduleLine', 'Edm.String', false),
                REQUESTED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField('RequestedDeliveryDate', 'Edm.DateTime', true),
                CONFIRMED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField('ConfirmedDeliveryDate', 'Edm.DateTime', true),
                ORDER_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('OrderQuantityUnit', 'Edm.String', true),
                ORDER_QUANTITY_SAP_UNIT: fieldBuilder.buildEdmTypeField('OrderQuantitySAPUnit', 'Edm.String', true),
                ORDER_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField('OrderQuantityISOUnit', 'Edm.String', true),
                SCHEDULE_LINE_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField('ScheduleLineOrderQuantity', 'Edm.Decimal', true),
                CONFD_ORDER_QTY_BY_MATL_AVAIL_CHECK: fieldBuilder.buildEdmTypeField('ConfdOrderQtyByMatlAvailCheck', 'Edm.Decimal', true),
                DELIVERED_QTY_IN_ORDER_QTY_UNIT: fieldBuilder.buildEdmTypeField('DeliveredQtyInOrderQtyUnit', 'Edm.Decimal', true),
                OPEN_CONFD_DELIV_QTY_IN_ORD_QTY_UNIT: fieldBuilder.buildEdmTypeField('OpenConfdDelivQtyInOrdQtyUnit', 'Edm.Decimal', true),
                CORRECTED_QTY_IN_ORDER_QTY_UNIT: fieldBuilder.buildEdmTypeField('CorrectedQtyInOrderQtyUnit', 'Edm.Decimal', true),
                DELIV_BLOCK_REASON_FOR_SCHED_LINE: fieldBuilder.buildEdmTypeField('DelivBlockReasonForSchedLine', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderScheduleLine_1.SalesOrderScheduleLine)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderScheduleLineApi = SalesOrderScheduleLineApi;
//# sourceMappingURL=SalesOrderScheduleLineApi.js.map