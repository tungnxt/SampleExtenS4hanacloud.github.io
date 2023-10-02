"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPurchasingOrgApi = void 0;
const SupplierPurchasingOrg_1 = require("./SupplierPurchasingOrg");
const SupplierPurchasingOrgRequestBuilder_1 = require("./SupplierPurchasingOrgRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPurchasingOrgApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierPurchasingOrg_1.SupplierPurchasingOrg;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierPurchasingOrgApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARTNER_FUNCTION: new odata_v2_1.Link('to_PartnerFunction', this, linkedApis[0]),
            TO_PURCHASING_ORG_TEXT: new odata_v2_1.Link('to_PurchasingOrgText', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SupplierPurchasingOrgRequestBuilder_1.SupplierPurchasingOrgRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierPurchasingOrg_1.SupplierPurchasingOrg, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
                PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false),
                AUTOMATIC_EVALUATED_RCPT_SETTLMT: fieldBuilder.buildEdmTypeField('AutomaticEvaluatedRcptSettlmt', 'Edm.Boolean', true),
                CALCULATION_SCHEMA_GROUP_CODE: fieldBuilder.buildEdmTypeField('CalculationSchemaGroupCode', 'Edm.String', true),
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                EVALD_RECEIPT_SETTLEMENT_IS_ACTIVE: fieldBuilder.buildEdmTypeField('EvaldReceiptSettlementIsActive', 'Edm.Boolean', true),
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true),
                INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true),
                INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true),
                INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true),
                INTRASTAT_CRS_BORDER_TR_MODE: fieldBuilder.buildEdmTypeField('IntrastatCrsBorderTrMode', 'Edm.String', true),
                INVOICE_IS_GOODS_RECEIPT_BASED: fieldBuilder.buildEdmTypeField('InvoiceIsGoodsReceiptBased', 'Edm.Boolean', true),
                INVOICE_IS_MM_SERVICE_ENTRY_BASED: fieldBuilder.buildEdmTypeField('InvoiceIsMMServiceEntryBased', 'Edm.Boolean', true),
                MATERIAL_PLANNED_DELIVERY_DURN: fieldBuilder.buildEdmTypeField('MaterialPlannedDeliveryDurn', 'Edm.Decimal', true),
                MINIMUM_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField('MinimumOrderAmount', 'Edm.Decimal', true),
                PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
                PLANNING_CYCLE: fieldBuilder.buildEdmTypeField('PlanningCycle', 'Edm.String', true),
                PRICING_DATE_CONTROL: fieldBuilder.buildEdmTypeField('PricingDateControl', 'Edm.String', true),
                PROD_STOCK_AND_SLS_DATA_TRANSF_PRFL: fieldBuilder.buildEdmTypeField('ProdStockAndSlsDataTransfPrfl', 'Edm.String', true),
                PRODUCT_UNIT_GROUP: fieldBuilder.buildEdmTypeField('ProductUnitGroup', 'Edm.String', true),
                PUR_ORD_AUTO_GENERATION_IS_ALLOWED: fieldBuilder.buildEdmTypeField('PurOrdAutoGenerationIsAllowed', 'Edm.Boolean', true),
                PURCHASE_ORDER_CURRENCY: fieldBuilder.buildEdmTypeField('PurchaseOrderCurrency', 'Edm.String', true),
                PURCHASING_GROUP: fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', true),
                PURCHASING_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField('PurchasingIsBlockedForSupplier', 'Edm.Boolean', true),
                ROUNDING_PROFILE: fieldBuilder.buildEdmTypeField('RoundingProfile', 'Edm.String', true),
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                SUPLR_DISCOUNT_IN_KIND_IS_GRANTED: fieldBuilder.buildEdmTypeField('SuplrDiscountInKindIsGranted', 'Edm.Boolean', true),
                SUPLR_INVC_REVAL_IS_ALLOWED: fieldBuilder.buildEdmTypeField('SuplrInvcRevalIsAllowed', 'Edm.Boolean', true),
                SUPLR_IS_RLVT_FOR_SETTLMT_MGMT: fieldBuilder.buildEdmTypeField('SuplrIsRlvtForSettlmtMgmt', 'Edm.Boolean', true),
                SUPLR_PURG_ORG_IS_RLVT_FOR_PRICE_DETN: fieldBuilder.buildEdmTypeField('SuplrPurgOrgIsRlvtForPriceDetn', 'Edm.Boolean', true),
                SUPPLIER_ABC_CLASSIFICATION_CODE: fieldBuilder.buildEdmTypeField('SupplierABCClassificationCode', 'Edm.String', true),
                SUPPLIER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField('SupplierAccountNumber', 'Edm.String', true),
                SUPPLIER_IS_RETURNS_SUPPLIER: fieldBuilder.buildEdmTypeField('SupplierIsReturnsSupplier', 'Edm.Boolean', true),
                SUPPLIER_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('SupplierPhoneNumber', 'Edm.String', true),
                SUPPLIER_RESP_SALES_PERSON_NAME: fieldBuilder.buildEdmTypeField('SupplierRespSalesPersonName', 'Edm.String', true),
                SUPPLIER_CONFIRMATION_CONTROL_KEY: fieldBuilder.buildEdmTypeField('SupplierConfirmationControlKey', 'Edm.String', true),
                IS_ORDER_ACKN_RQD: fieldBuilder.buildEdmTypeField('IsOrderAcknRqd', 'Edm.Boolean', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierPurchasingOrg_1.SupplierPurchasingOrg)
            };
        }
        return this._schema;
    }
}
exports.SupplierPurchasingOrgApi = SupplierPurchasingOrgApi;
//# sourceMappingURL=SupplierPurchasingOrgApi.js.map