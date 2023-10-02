"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrderItemBillingPlanItemApi = void 0;
const SlsOrderItemBillingPlanItem_1 = require("./SlsOrderItemBillingPlanItem");
const SlsOrderItemBillingPlanItemRequestBuilder_1 = require("./SlsOrderItemBillingPlanItemRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SlsOrderItemBillingPlanItemApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SlsOrderItemBillingPlanItem_1.SlsOrderItemBillingPlanItem;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SlsOrderItemBillingPlanItemApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_BILLING_PLAN: new odata_v2_1.OneToOneLink('to_BillingPlan', this, linkedApis[0]),
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[1]),
            TO_SALES_ORDER_ITEM: new odata_v2_1.OneToOneLink('to_SalesOrderItem', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new SlsOrderItemBillingPlanItemRequestBuilder_1.SlsOrderItemBillingPlanItemRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SlsOrderItemBillingPlanItem_1.SlsOrderItemBillingPlanItem, this.deSerializers);
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
                BILLING_PLAN_ITEM: fieldBuilder.buildEdmTypeField('BillingPlanItem', 'Edm.String', false),
                BILLING_PLAN_DATE_CATEGORY: fieldBuilder.buildEdmTypeField('BillingPlanDateCategory', 'Edm.String', true),
                BILLING_PLAN_BILLING_DATE: fieldBuilder.buildEdmTypeField('BillingPlanBillingDate', 'Edm.DateTime', true),
                BILLING_PLAN_AMOUNT: fieldBuilder.buildEdmTypeField('BillingPlanAmount', 'Edm.Decimal', true),
                TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true),
                BILLING_PLAN_AMOUNT_PERCENT: fieldBuilder.buildEdmTypeField('BillingPlanAmountPercent', 'Edm.Decimal', true),
                CUSTOMER_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', true),
                PROPOSED_BILLING_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField('ProposedBillingDocumentType', 'Edm.String', true),
                BILLING_PLAN_DATE_DESCRIPTION_CODE: fieldBuilder.buildEdmTypeField('BillingPlanDateDescriptionCode', 'Edm.String', true),
                BILLING_BLOCK_REASON: fieldBuilder.buildEdmTypeField('BillingBlockReason', 'Edm.String', true),
                BILLING_PLAN_SERVICE_START_DATE: fieldBuilder.buildEdmTypeField('BillingPlanServiceStartDate', 'Edm.DateTime', true),
                BILLING_PLAN_SERVICE_END_DATE: fieldBuilder.buildEdmTypeField('BillingPlanServiceEndDate', 'Edm.DateTime', true),
                BILLING_PLAN_RELATED_BILLG_STATUS: fieldBuilder.buildEdmTypeField('BillingPlanRelatedBillgStatus', 'Edm.String', true),
                BILLING_PLAN_TYPE: fieldBuilder.buildEdmTypeField('BillingPlanType', 'Edm.String', true),
                ADOPTING_BILLING_DATE_ID: fieldBuilder.buildEdmTypeField('AdoptingBillingDateID', 'Edm.String', true),
                BILLING_PLAN_BILLING_RULE: fieldBuilder.buildEdmTypeField('BillingPlanBillingRule', 'Edm.String', true),
                BILLING_PLAN_MILESTONE_USAGE: fieldBuilder.buildEdmTypeField('BillingPlanMilestoneUsage', 'Edm.String', true),
                BILLG_PLN_DTE_CORRECTION_RFND_TYPE: fieldBuilder.buildEdmTypeField('BillgPlnDteCorrectionRfndType', 'Edm.String', true),
                ACCOUNTING_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField('AccountingExchangeRate', 'Edm.Decimal', true),
                POSTPONEMENT_REASON: fieldBuilder.buildEdmTypeField('PostponementReason', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SlsOrderItemBillingPlanItem_1.SlsOrderItemBillingPlanItem)
            };
        }
        return this._schema;
    }
}
exports.SlsOrderItemBillingPlanItemApi = SlsOrderItemBillingPlanItemApi;
//# sourceMappingURL=SlsOrderItemBillingPlanItemApi.js.map