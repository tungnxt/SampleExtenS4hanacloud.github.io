"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemBillingPlanApi = void 0;
const SalesOrderItemBillingPlan_1 = require("./SalesOrderItemBillingPlan");
const SalesOrderItemBillingPlanRequestBuilder_1 = require("./SalesOrderItemBillingPlanRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemBillingPlanApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderItemBillingPlan_1.SalesOrderItemBillingPlan;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderItemBillingPlanApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_BILLING_PLAN_ITEM: new odata_v2_1.Link('to_BillingPlanItem', this, linkedApis[0]),
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[1]),
            TO_SALES_ORDER_ITEM: new odata_v2_1.OneToOneLink('to_SalesOrderItem', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderItemBillingPlanRequestBuilder_1.SalesOrderItemBillingPlanRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderItemBillingPlan_1.SalesOrderItemBillingPlan, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                BILLING_PLAN: fieldBuilder.buildEdmTypeField('BillingPlan', 'Edm.String', false),
                BILLING_PLAN_IS_IN_HEADER: fieldBuilder.buildEdmTypeField('BillingPlanIsInHeader', 'Edm.Boolean', true),
                BILLING_PLAN_START_DATE: fieldBuilder.buildEdmTypeField('BillingPlanStartDate', 'Edm.DateTime', true),
                BILLING_PLAN_START_DATE_RULE: fieldBuilder.buildEdmTypeField('BillingPlanStartDateRule', 'Edm.String', true),
                REFERENCE_BILLING_PLAN: fieldBuilder.buildEdmTypeField('ReferenceBillingPlan', 'Edm.String', true),
                BILLING_PLAN_CATEGORY: fieldBuilder.buildEdmTypeField('BillingPlanCategory', 'Edm.String', true),
                BILLING_PLAN_TYPE: fieldBuilder.buildEdmTypeField('BillingPlanType', 'Edm.String', true),
                BILLING_PLAN_END_DATE: fieldBuilder.buildEdmTypeField('BillingPlanEndDate', 'Edm.DateTime', true),
                BILLING_PLAN_END_DATE_RULE: fieldBuilder.buildEdmTypeField('BillingPlanEndDateRule', 'Edm.String', true),
                BILLING_PLAN_SEARCH_TERM: fieldBuilder.buildEdmTypeField('BillingPlanSearchTerm', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderItemBillingPlan_1.SalesOrderItemBillingPlan)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderItemBillingPlanApi = SalesOrderItemBillingPlanApi;
//# sourceMappingURL=SalesOrderItemBillingPlanApi.js.map