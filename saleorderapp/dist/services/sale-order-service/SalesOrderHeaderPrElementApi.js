"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPrElementApi = void 0;
const SalesOrderHeaderPrElement_1 = require("./SalesOrderHeaderPrElement");
const SalesOrderHeaderPrElementRequestBuilder_1 = require("./SalesOrderHeaderPrElementRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderHeaderPrElementApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderHeaderPrElement_1.SalesOrderHeaderPrElement;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderHeaderPrElementApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderHeaderPrElementRequestBuilder_1.SalesOrderHeaderPrElementRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderHeaderPrElement_1.SalesOrderHeaderPrElement, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                PRICING_PROCEDURE_STEP: fieldBuilder.buildEdmTypeField('PricingProcedureStep', 'Edm.String', false),
                PRICING_PROCEDURE_COUNTER: fieldBuilder.buildEdmTypeField('PricingProcedureCounter', 'Edm.String', false),
                CONDITION_TYPE: fieldBuilder.buildEdmTypeField('ConditionType', 'Edm.String', true),
                PRICING_DATE_TIME: fieldBuilder.buildEdmTypeField('PricingDateTime', 'Edm.String', true),
                PRICE_CONDITION_DETERMINATION_DTE: fieldBuilder.buildEdmTypeField('PriceConditionDeterminationDte', 'Edm.DateTime', true),
                CONDITION_CALCULATION_TYPE: fieldBuilder.buildEdmTypeField('ConditionCalculationType', 'Edm.String', true),
                CONDITION_BASE_VALUE: fieldBuilder.buildEdmTypeField('ConditionBaseValue', 'Edm.Decimal', true),
                CONDITION_RATE_VALUE: fieldBuilder.buildEdmTypeField('ConditionRateValue', 'Edm.Decimal', true),
                CONDITION_CURRENCY: fieldBuilder.buildEdmTypeField('ConditionCurrency', 'Edm.String', true),
                CONDITION_QUANTITY: fieldBuilder.buildEdmTypeField('ConditionQuantity', 'Edm.Decimal', true),
                CONDITION_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('ConditionQuantityUnit', 'Edm.String', true),
                CONDITION_QUANTITY_SAP_UNIT: fieldBuilder.buildEdmTypeField('ConditionQuantitySAPUnit', 'Edm.String', true),
                CONDITION_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField('ConditionQuantityISOUnit', 'Edm.String', true),
                CONDITION_CATEGORY: fieldBuilder.buildEdmTypeField('ConditionCategory', 'Edm.String', true),
                CONDITION_IS_FOR_STATISTICS: fieldBuilder.buildEdmTypeField('ConditionIsForStatistics', 'Edm.Boolean', true),
                PRICING_SCALE_TYPE: fieldBuilder.buildEdmTypeField('PricingScaleType', 'Edm.String', true),
                CONDITION_ORIGIN: fieldBuilder.buildEdmTypeField('ConditionOrigin', 'Edm.String', true),
                IS_GROUP_CONDITION: fieldBuilder.buildEdmTypeField('IsGroupCondition', 'Edm.String', true),
                CONDITION_RECORD: fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', true),
                CONDITION_SEQUENTIAL_NUMBER: fieldBuilder.buildEdmTypeField('ConditionSequentialNumber', 'Edm.String', true),
                TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
                WITHHOLDING_TAX_CODE: fieldBuilder.buildEdmTypeField('WithholdingTaxCode', 'Edm.String', true),
                CNDN_ROUNDING_OFF_DIFF_AMOUNT: fieldBuilder.buildEdmTypeField('CndnRoundingOffDiffAmount', 'Edm.Decimal', true),
                CONDITION_AMOUNT: fieldBuilder.buildEdmTypeField('ConditionAmount', 'Edm.Decimal', true),
                TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true),
                CONDITION_CONTROL: fieldBuilder.buildEdmTypeField('ConditionControl', 'Edm.String', true),
                CONDITION_INACTIVE_REASON: fieldBuilder.buildEdmTypeField('ConditionInactiveReason', 'Edm.String', true),
                CONDITION_CLASS: fieldBuilder.buildEdmTypeField('ConditionClass', 'Edm.String', true),
                PRCG_PROCEDURE_COUNTER_FOR_HEADER: fieldBuilder.buildEdmTypeField('PrcgProcedureCounterForHeader', 'Edm.String', true),
                FACTOR_FOR_CONDITION_BASIS_VALUE: fieldBuilder.buildEdmTypeField('FactorForConditionBasisValue', 'Edm.Double', true),
                STRUCTURE_CONDITION: fieldBuilder.buildEdmTypeField('StructureCondition', 'Edm.String', true),
                PERIOD_FACTOR_FOR_CNDN_BASIS_VALUE: fieldBuilder.buildEdmTypeField('PeriodFactorForCndnBasisValue', 'Edm.Double', true),
                PRICING_SCALE_BASIS: fieldBuilder.buildEdmTypeField('PricingScaleBasis', 'Edm.String', true),
                CONDITION_SCALE_BASIS_VALUE: fieldBuilder.buildEdmTypeField('ConditionScaleBasisValue', 'Edm.Decimal', true),
                CONDITION_SCALE_BASIS_UNIT: fieldBuilder.buildEdmTypeField('ConditionScaleBasisUnit', 'Edm.String', true),
                CONDITION_SCALE_BASIS_CURRENCY: fieldBuilder.buildEdmTypeField('ConditionScaleBasisCurrency', 'Edm.String', true),
                CNDN_IS_RELEVANT_FOR_INTCO_BILLING: fieldBuilder.buildEdmTypeField('CndnIsRelevantForIntcoBilling', 'Edm.Boolean', true),
                CONDITION_IS_MANUALLY_CHANGED: fieldBuilder.buildEdmTypeField('ConditionIsManuallyChanged', 'Edm.Boolean', true),
                CONDITION_IS_FOR_CONFIGURATION: fieldBuilder.buildEdmTypeField('ConditionIsForConfiguration', 'Edm.Boolean', true),
                VARIANT_CONDITION: fieldBuilder.buildEdmTypeField('VariantCondition', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderHeaderPrElement_1.SalesOrderHeaderPrElement)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderHeaderPrElementApi = SalesOrderHeaderPrElementApi;
//# sourceMappingURL=SalesOrderHeaderPrElementApi.js.map