"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemApi = void 0;
const SalesOrderItem_1 = require("./SalesOrderItem");
const SalesOrderItemRequestBuilder_1 = require("./SalesOrderItemRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderItem_1.SalesOrderItem;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderItemApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_BILLING_PLAN: new odata_v2_1.OneToOneLink('to_BillingPlan', this, linkedApis[0]),
            TO_PARTNER: new odata_v2_1.Link('to_Partner', this, linkedApis[1]),
            TO_PRECEDING_PROC_FLOW_DOC_ITEM: new odata_v2_1.Link('to_PrecedingProcFlowDocItem', this, linkedApis[2]),
            TO_PRICING_ELEMENT: new odata_v2_1.Link('to_PricingElement', this, linkedApis[3]),
            TO_RELATED_OBJECT: new odata_v2_1.Link('to_RelatedObject', this, linkedApis[4]),
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[5]),
            TO_SCHEDULE_LINE: new odata_v2_1.Link('to_ScheduleLine', this, linkedApis[6]),
            TO_SUBSEQUENT_PROC_FLOW_DOC_ITEM: new odata_v2_1.Link('to_SubsequentProcFlowDocItem', this, linkedApis[7]),
            TO_TEXT: new odata_v2_1.Link('to_Text', this, linkedApis[8])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderItemRequestBuilder_1.SalesOrderItemRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderItem_1.SalesOrderItem, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                HIGHER_LEVEL_ITEM: fieldBuilder.buildEdmTypeField('HigherLevelItem', 'Edm.String', true),
                HIGHER_LEVEL_ITEM_USAGE: fieldBuilder.buildEdmTypeField('HigherLevelItemUsage', 'Edm.String', true),
                SALES_ORDER_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField('SalesOrderItemCategory', 'Edm.String', true),
                SALES_ORDER_ITEM_TEXT: fieldBuilder.buildEdmTypeField('SalesOrderItemText', 'Edm.String', true),
                PURCHASE_ORDER_BY_CUSTOMER: fieldBuilder.buildEdmTypeField('PurchaseOrderByCustomer', 'Edm.String', true),
                PURCHASE_ORDER_BY_SHIP_TO_PARTY: fieldBuilder.buildEdmTypeField('PurchaseOrderByShipToParty', 'Edm.String', true),
                UNDERLYING_PURCHASE_ORDER_ITEM: fieldBuilder.buildEdmTypeField('UnderlyingPurchaseOrderItem', 'Edm.String', true),
                EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField('ExternalItemID', 'Edm.String', true),
                MATERIAL: fieldBuilder.buildEdmTypeField('Material', 'Edm.String', true),
                MATERIAL_BY_CUSTOMER: fieldBuilder.buildEdmTypeField('MaterialByCustomer', 'Edm.String', true),
                PRICING_DATE: fieldBuilder.buildEdmTypeField('PricingDate', 'Edm.DateTime', true),
                PRICING_REFERENCE_MATERIAL: fieldBuilder.buildEdmTypeField('PricingReferenceMaterial', 'Edm.String', true),
                BILLING_PLAN: fieldBuilder.buildEdmTypeField('BillingPlan', 'Edm.String', true),
                REQUESTED_QUANTITY: fieldBuilder.buildEdmTypeField('RequestedQuantity', 'Edm.Decimal', true),
                REQUESTED_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('RequestedQuantityUnit', 'Edm.String', true),
                REQUESTED_QUANTITY_SAP_UNIT: fieldBuilder.buildEdmTypeField('RequestedQuantitySAPUnit', 'Edm.String', true),
                REQUESTED_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField('RequestedQuantityISOUnit', 'Edm.String', true),
                ORDER_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('OrderQuantityUnit', 'Edm.String', true),
                ORDER_QUANTITY_SAP_UNIT: fieldBuilder.buildEdmTypeField('OrderQuantitySAPUnit', 'Edm.String', true),
                ORDER_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField('OrderQuantityISOUnit', 'Edm.String', true),
                CONFD_DELIV_QTY_IN_ORDER_QTY_UNIT: fieldBuilder.buildEdmTypeField('ConfdDelivQtyInOrderQtyUnit', 'Edm.Decimal', true),
                ITEM_GROSS_WEIGHT: fieldBuilder.buildEdmTypeField('ItemGrossWeight', 'Edm.Decimal', true),
                ITEM_NET_WEIGHT: fieldBuilder.buildEdmTypeField('ItemNetWeight', 'Edm.Decimal', true),
                ITEM_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField('ItemWeightUnit', 'Edm.String', true),
                ITEM_WEIGHT_SAP_UNIT: fieldBuilder.buildEdmTypeField('ItemWeightSAPUnit', 'Edm.String', true),
                ITEM_WEIGHT_ISO_UNIT: fieldBuilder.buildEdmTypeField('ItemWeightISOUnit', 'Edm.String', true),
                ITEM_VOLUME: fieldBuilder.buildEdmTypeField('ItemVolume', 'Edm.Decimal', true),
                ITEM_VOLUME_UNIT: fieldBuilder.buildEdmTypeField('ItemVolumeUnit', 'Edm.String', true),
                ITEM_VOLUME_SAP_UNIT: fieldBuilder.buildEdmTypeField('ItemVolumeSAPUnit', 'Edm.String', true),
                ITEM_VOLUME_ISO_UNIT: fieldBuilder.buildEdmTypeField('ItemVolumeISOUnit', 'Edm.String', true),
                TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true),
                NET_AMOUNT: fieldBuilder.buildEdmTypeField('NetAmount', 'Edm.Decimal', true),
                TOTAL_SD_DOC_REFERENCE_STATUS: fieldBuilder.buildEdmTypeField('TotalSDDocReferenceStatus', 'Edm.String', true),
                SD_DOC_REFERENCE_STATUS: fieldBuilder.buildEdmTypeField('SDDocReferenceStatus', 'Edm.String', true),
                MATERIAL_SUBSTITUTION_REASON: fieldBuilder.buildEdmTypeField('MaterialSubstitutionReason', 'Edm.String', true),
                MATERIAL_GROUP: fieldBuilder.buildEdmTypeField('MaterialGroup', 'Edm.String', true),
                MATERIAL_PRICING_GROUP: fieldBuilder.buildEdmTypeField('MaterialPricingGroup', 'Edm.String', true),
                ADDITIONAL_MATERIAL_GROUP_1: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup1', 'Edm.String', true),
                ADDITIONAL_MATERIAL_GROUP_2: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup2', 'Edm.String', true),
                ADDITIONAL_MATERIAL_GROUP_3: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup3', 'Edm.String', true),
                ADDITIONAL_MATERIAL_GROUP_4: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup4', 'Edm.String', true),
                ADDITIONAL_MATERIAL_GROUP_5: fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup5', 'Edm.String', true),
                BILLING_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField('BillingDocumentDate', 'Edm.DateTime', true),
                CONTRACT_ACCOUNT: fieldBuilder.buildEdmTypeField('ContractAccount', 'Edm.String', true),
                ADDITIONAL_VALUE_DAYS: fieldBuilder.buildEdmTypeField('AdditionalValueDays', 'Edm.String', true),
                SERVICES_RENDERED_DATE: fieldBuilder.buildEdmTypeField('ServicesRenderedDate', 'Edm.DateTime', true),
                BATCH: fieldBuilder.buildEdmTypeField('Batch', 'Edm.String', true),
                PRODUCTION_PLANT: fieldBuilder.buildEdmTypeField('ProductionPlant', 'Edm.String', true),
                ORIGINAL_PLANT: fieldBuilder.buildEdmTypeField('OriginalPlant', 'Edm.String', true),
                ALTV_BSD_CONF_SUBSTITUTION_STATUS: fieldBuilder.buildEdmTypeField('AltvBsdConfSubstitutionStatus', 'Edm.String', true),
                STORAGE_LOCATION: fieldBuilder.buildEdmTypeField('StorageLocation', 'Edm.String', true),
                DELIVERY_GROUP: fieldBuilder.buildEdmTypeField('DeliveryGroup', 'Edm.String', true),
                SHIPPING_POINT: fieldBuilder.buildEdmTypeField('ShippingPoint', 'Edm.String', true),
                SHIPPING_TYPE: fieldBuilder.buildEdmTypeField('ShippingType', 'Edm.String', true),
                DELIVERY_PRIORITY: fieldBuilder.buildEdmTypeField('DeliveryPriority', 'Edm.String', true),
                DELIVERY_DATE_QUANTITY_IS_FIXED: fieldBuilder.buildEdmTypeField('DeliveryDateQuantityIsFixed', 'Edm.Boolean', true),
                DELIVERY_DATE_TYPE_RULE: fieldBuilder.buildEdmTypeField('DeliveryDateTypeRule', 'Edm.String', true),
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true),
                INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                TAX_AMOUNT: fieldBuilder.buildEdmTypeField('TaxAmount', 'Edm.Decimal', true),
                PRODUCT_TAX_CLASSIFICATION_1: fieldBuilder.buildEdmTypeField('ProductTaxClassification1', 'Edm.String', true),
                PRODUCT_TAX_CLASSIFICATION_2: fieldBuilder.buildEdmTypeField('ProductTaxClassification2', 'Edm.String', true),
                PRODUCT_TAX_CLASSIFICATION_3: fieldBuilder.buildEdmTypeField('ProductTaxClassification3', 'Edm.String', true),
                PRODUCT_TAX_CLASSIFICATION_4: fieldBuilder.buildEdmTypeField('ProductTaxClassification4', 'Edm.String', true),
                PRODUCT_TAX_CLASSIFICATION_5: fieldBuilder.buildEdmTypeField('ProductTaxClassification5', 'Edm.String', true),
                PRODUCT_TAX_CLASSIFICATION_6: fieldBuilder.buildEdmTypeField('ProductTaxClassification6', 'Edm.String', true),
                PRODUCT_TAX_CLASSIFICATION_7: fieldBuilder.buildEdmTypeField('ProductTaxClassification7', 'Edm.String', true),
                PRODUCT_TAX_CLASSIFICATION_8: fieldBuilder.buildEdmTypeField('ProductTaxClassification8', 'Edm.String', true),
                PRODUCT_TAX_CLASSIFICATION_9: fieldBuilder.buildEdmTypeField('ProductTaxClassification9', 'Edm.String', true),
                MATL_ACCOUNT_ASSIGNMENT_GROUP: fieldBuilder.buildEdmTypeField('MatlAccountAssignmentGroup', 'Edm.String', true),
                COST_AMOUNT: fieldBuilder.buildEdmTypeField('CostAmount', 'Edm.Decimal', true),
                CUSTOMER_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', true),
                FIXED_VALUE_DATE: fieldBuilder.buildEdmTypeField('FixedValueDate', 'Edm.DateTime', true),
                CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField('CustomerGroup', 'Edm.String', true),
                SALES_DOCUMENT_RJCN_REASON: fieldBuilder.buildEdmTypeField('SalesDocumentRjcnReason', 'Edm.String', true),
                ITEM_BILLING_BLOCK_REASON: fieldBuilder.buildEdmTypeField('ItemBillingBlockReason', 'Edm.String', true),
                SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV: fieldBuilder.buildEdmTypeField('SlsDocIsRlvtForProofOfDeliv', 'Edm.Boolean', true),
                WBS_ELEMENT: fieldBuilder.buildEdmTypeField('WBSElement', 'Edm.String', true),
                PROFIT_CENTER: fieldBuilder.buildEdmTypeField('ProfitCenter', 'Edm.String', true),
                ACCOUNTING_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField('AccountingExchangeRate', 'Edm.Decimal', true),
                REFERENCE_SD_DOCUMENT: fieldBuilder.buildEdmTypeField('ReferenceSDDocument', 'Edm.String', true),
                REFERENCE_SD_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('ReferenceSDDocumentItem', 'Edm.String', true),
                SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField('SDProcessStatus', 'Edm.String', true),
                DELIVERY_STATUS: fieldBuilder.buildEdmTypeField('DeliveryStatus', 'Edm.String', true),
                ORDER_RELATED_BILLING_STATUS: fieldBuilder.buildEdmTypeField('OrderRelatedBillingStatus', 'Edm.String', true),
                SUBTOTAL_1_AMOUNT: fieldBuilder.buildEdmTypeField('Subtotal1Amount', 'Edm.Decimal', true),
                SUBTOTAL_2_AMOUNT: fieldBuilder.buildEdmTypeField('Subtotal2Amount', 'Edm.Decimal', true),
                SUBTOTAL_3_AMOUNT: fieldBuilder.buildEdmTypeField('Subtotal3Amount', 'Edm.Decimal', true),
                SUBTOTAL_4_AMOUNT: fieldBuilder.buildEdmTypeField('Subtotal4Amount', 'Edm.Decimal', true),
                SUBTOTAL_5_AMOUNT: fieldBuilder.buildEdmTypeField('Subtotal5Amount', 'Edm.Decimal', true),
                SUBTOTAL_6_AMOUNT: fieldBuilder.buildEdmTypeField('Subtotal6Amount', 'Edm.Decimal', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderItem_1.SalesOrderItem)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderItemApi = SalesOrderItemApi;
//# sourceMappingURL=SalesOrderItemApi.js.map