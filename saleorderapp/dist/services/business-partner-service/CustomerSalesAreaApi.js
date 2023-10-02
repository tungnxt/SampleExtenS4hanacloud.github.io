"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSalesAreaApi = void 0;
const CustomerSalesArea_1 = require("./CustomerSalesArea");
const CustomerSalesAreaRequestBuilder_1 = require("./CustomerSalesAreaRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerSalesAreaApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomerSalesArea_1.CustomerSalesArea;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomerSalesAreaApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARTNER_FUNCTION: new odata_v2_1.Link('to_PartnerFunction', this, linkedApis[0]),
            TO_SALES_AREA_TAX: new odata_v2_1.Link('to_SalesAreaTax', this, linkedApis[1]),
            TO_SALES_AREA_TEXT: new odata_v2_1.Link('to_SalesAreaText', this, linkedApis[2]),
            TO_SLS_AREA_ADDR_DEPDNT_INFO: new odata_v2_1.Link('to_SlsAreaAddrDepdntInfo', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new CustomerSalesAreaRequestBuilder_1.CustomerSalesAreaRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerSalesArea_1.CustomerSalesArea, this.deSerializers);
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
                ACCOUNT_BY_CUSTOMER: fieldBuilder.buildEdmTypeField('AccountByCustomer', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                BILLING_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('BillingIsBlockedForCustomer', 'Edm.String', true),
                COMPLETE_DELIVERY_IS_DEFINED: fieldBuilder.buildEdmTypeField('CompleteDeliveryIsDefined', 'Edm.Boolean', true),
                CREDIT_CONTROL_AREA: fieldBuilder.buildEdmTypeField('CreditControlArea', 'Edm.String', true),
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true),
                CUST_IS_RLVT_FOR_SETTLMT_MGMT: fieldBuilder.buildEdmTypeField('CustIsRlvtForSettlmtMgmt', 'Edm.Boolean', true),
                CUSTOMER_ABC_CLASSIFICATION: fieldBuilder.buildEdmTypeField('CustomerABCClassification', 'Edm.String', true),
                CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountAssignmentGroup', 'Edm.String', true),
                CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField('CustomerGroup', 'Edm.String', true),
                CUSTOMER_IS_REBATE_RELEVANT: fieldBuilder.buildEdmTypeField('CustomerIsRebateRelevant', 'Edm.Boolean', true),
                CUSTOMER_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', true),
                CUSTOMER_PRICE_GROUP: fieldBuilder.buildEdmTypeField('CustomerPriceGroup', 'Edm.String', true),
                CUSTOMER_PRICING_PROCEDURE: fieldBuilder.buildEdmTypeField('CustomerPricingProcedure', 'Edm.String', true),
                CUST_PROD_PROPOSAL_PROCEDURE: fieldBuilder.buildEdmTypeField('CustProdProposalProcedure', 'Edm.String', true),
                DELIVERY_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('DeliveryIsBlockedForCustomer', 'Edm.String', true),
                DELIVERY_PRIORITY: fieldBuilder.buildEdmTypeField('DeliveryPriority', 'Edm.String', true),
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true),
                INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true),
                INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true),
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true),
                INSP_SBST_HAS_NO_TIME_OR_QUANTITY: fieldBuilder.buildEdmTypeField('InspSbstHasNoTimeOrQuantity', 'Edm.Boolean', true),
                INVOICE_DATE: fieldBuilder.buildEdmTypeField('InvoiceDate', 'Edm.String', true),
                ITEM_ORDER_PROBABILITY_IN_PERCENT: fieldBuilder.buildEdmTypeField('ItemOrderProbabilityInPercent', 'Edm.String', true),
                MANUAL_INVOICE_MAINT_IS_RELEVANT: fieldBuilder.buildEdmTypeField('ManualInvoiceMaintIsRelevant', 'Edm.Boolean', true),
                MAX_NMBR_OF_PARTIAL_DELIVERY: fieldBuilder.buildEdmTypeField('MaxNmbrOfPartialDelivery', 'Edm.Decimal', true),
                ORDER_COMBINATION_IS_ALLOWED: fieldBuilder.buildEdmTypeField('OrderCombinationIsAllowed', 'Edm.Boolean', true),
                ORDER_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('OrderIsBlockedForCustomer', 'Edm.String', true),
                OVERDELIV_TOLRTD_LMT_RATIO_IN_PCT: fieldBuilder.buildEdmTypeField('OverdelivTolrtdLmtRatioInPct', 'Edm.Decimal', true),
                PARTIAL_DELIVERY_IS_ALLOWED: fieldBuilder.buildEdmTypeField('PartialDeliveryIsAllowed', 'Edm.String', true),
                PRICE_LIST_TYPE: fieldBuilder.buildEdmTypeField('PriceListType', 'Edm.String', true),
                PRODUCT_UNIT_GROUP: fieldBuilder.buildEdmTypeField('ProductUnitGroup', 'Edm.String', true),
                PROOF_OF_DELIVERY_TIME_VALUE: fieldBuilder.buildEdmTypeField('ProofOfDeliveryTimeValue', 'Edm.Decimal', true),
                SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                SALES_ITEM_PROPOSAL: fieldBuilder.buildEdmTypeField('SalesItemProposal', 'Edm.String', true),
                SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV: fieldBuilder.buildEdmTypeField('SlsDocIsRlvtForProofOfDeliv', 'Edm.Boolean', true),
                SLS_UNLMTD_OVRDELIV_IS_ALLWD: fieldBuilder.buildEdmTypeField('SlsUnlmtdOvrdelivIsAllwd', 'Edm.Boolean', true),
                SUPPLYING_PLANT: fieldBuilder.buildEdmTypeField('SupplyingPlant', 'Edm.String', true),
                SALES_DISTRICT: fieldBuilder.buildEdmTypeField('SalesDistrict', 'Edm.String', true),
                UNDERDELIV_TOLRTD_LMT_RATIO_IN_PCT: fieldBuilder.buildEdmTypeField('UnderdelivTolrtdLmtRatioInPct', 'Edm.Decimal', true),
                INVOICE_LIST_SCHEDULE: fieldBuilder.buildEdmTypeField('InvoiceListSchedule', 'Edm.String', true),
                EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField('ExchangeRateType', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_1: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup1', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_2: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup2', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_3: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup3', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_4: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup4', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_5: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup5', 'Edm.String', true),
                PAYMENT_GUARANTEE_PROCEDURE: fieldBuilder.buildEdmTypeField('PaymentGuaranteeProcedure', 'Edm.String', true),
                CUSTOMER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerSalesArea_1.CustomerSalesArea)
            };
        }
        return this._schema;
    }
}
exports.CustomerSalesAreaApi = CustomerSalesAreaApi;
//# sourceMappingURL=CustomerSalesAreaApi.js.map