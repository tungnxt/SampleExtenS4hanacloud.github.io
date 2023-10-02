"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderApi = void 0;
const SalesOrder_1 = require("./SalesOrder");
const SalesOrderRequestBuilder_1 = require("./SalesOrderRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrder_1.SalesOrder;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_BILLING_PLAN: new odata_v2_1.OneToOneLink('to_BillingPlan', this, linkedApis[0]),
            TO_ITEM: new odata_v2_1.Link('to_Item', this, linkedApis[1]),
            TO_PARTNER: new odata_v2_1.Link('to_Partner', this, linkedApis[2]),
            TO_PAYMENT_PLAN_ITEM_DETAILS: new odata_v2_1.Link('to_PaymentPlanItemDetails', this, linkedApis[3]),
            TO_PRECEDING_PROC_FLOW_DOC: new odata_v2_1.Link('to_PrecedingProcFlowDoc', this, linkedApis[4]),
            TO_PRICING_ELEMENT: new odata_v2_1.Link('to_PricingElement', this, linkedApis[5]),
            TO_RELATED_OBJECT: new odata_v2_1.Link('to_RelatedObject', this, linkedApis[6]),
            TO_SUBSEQUENT_PROC_FLOW_DOC: new odata_v2_1.Link('to_SubsequentProcFlowDoc', this, linkedApis[7]),
            TO_TEXT: new odata_v2_1.Link('to_Text', this, linkedApis[8])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderRequestBuilder_1.SalesOrderRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrder_1.SalesOrder, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                SALES_ORDER_TYPE: fieldBuilder.buildEdmTypeField('SalesOrderType', 'Edm.String', true),
                SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', true),
                DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', true),
                ORGANIZATION_DIVISION: fieldBuilder.buildEdmTypeField('OrganizationDivision', 'Edm.String', true),
                SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                SALES_DISTRICT: fieldBuilder.buildEdmTypeField('SalesDistrict', 'Edm.String', true),
                SOLD_TO_PARTY: fieldBuilder.buildEdmTypeField('SoldToParty', 'Edm.String', true),
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                SENDER_BUSINESS_SYSTEM_NAME: fieldBuilder.buildEdmTypeField('SenderBusinessSystemName', 'Edm.String', true),
                EXTERNAL_DOCUMENT_ID: fieldBuilder.buildEdmTypeField('ExternalDocumentID', 'Edm.String', true),
                LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField('LastChangeDateTime', 'Edm.DateTimeOffset', true),
                EXTERNAL_DOC_LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField('ExternalDocLastChangeDateTime', 'Edm.DateTimeOffset', true),
                PURCHASE_ORDER_BY_CUSTOMER: fieldBuilder.buildEdmTypeField('PurchaseOrderByCustomer', 'Edm.String', true),
                PURCHASE_ORDER_BY_SHIP_TO_PARTY: fieldBuilder.buildEdmTypeField('PurchaseOrderByShipToParty', 'Edm.String', true),
                CUSTOMER_PURCHASE_ORDER_TYPE: fieldBuilder.buildEdmTypeField('CustomerPurchaseOrderType', 'Edm.String', true),
                CUSTOMER_PURCHASE_ORDER_DATE: fieldBuilder.buildEdmTypeField('CustomerPurchaseOrderDate', 'Edm.DateTime', true),
                SALES_ORDER_DATE: fieldBuilder.buildEdmTypeField('SalesOrderDate', 'Edm.DateTime', true),
                TOTAL_NET_AMOUNT: fieldBuilder.buildEdmTypeField('TotalNetAmount', 'Edm.Decimal', true),
                OVERALL_DELIVERY_STATUS: fieldBuilder.buildEdmTypeField('OverallDeliveryStatus', 'Edm.String', true),
                TOTAL_BLOCK_STATUS: fieldBuilder.buildEdmTypeField('TotalBlockStatus', 'Edm.String', true),
                OVERALL_ORD_RELTD_BILLG_STATUS: fieldBuilder.buildEdmTypeField('OverallOrdReltdBillgStatus', 'Edm.String', true),
                OVERALL_SD_DOC_REFERENCE_STATUS: fieldBuilder.buildEdmTypeField('OverallSDDocReferenceStatus', 'Edm.String', true),
                TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true),
                SD_DOCUMENT_REASON: fieldBuilder.buildEdmTypeField('SDDocumentReason', 'Edm.String', true),
                PRICING_DATE: fieldBuilder.buildEdmTypeField('PricingDate', 'Edm.DateTime', true),
                PRICE_DETN_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField('PriceDetnExchangeRate', 'Edm.Decimal', true),
                BILLING_PLAN: fieldBuilder.buildEdmTypeField('BillingPlan', 'Edm.String', true),
                REQUESTED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField('RequestedDeliveryDate', 'Edm.DateTime', true),
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                COMPLETE_DELIVERY_IS_DEFINED: fieldBuilder.buildEdmTypeField('CompleteDeliveryIsDefined', 'Edm.Boolean', true),
                SHIPPING_TYPE: fieldBuilder.buildEdmTypeField('ShippingType', 'Edm.String', true),
                HEADER_BILLING_BLOCK_REASON: fieldBuilder.buildEdmTypeField('HeaderBillingBlockReason', 'Edm.String', true),
                DELIVERY_BLOCK_REASON: fieldBuilder.buildEdmTypeField('DeliveryBlockReason', 'Edm.String', true),
                DELIVERY_DATE_TYPE_RULE: fieldBuilder.buildEdmTypeField('DeliveryDateTypeRule', 'Edm.String', true),
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true),
                INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                CUSTOMER_PRICE_GROUP: fieldBuilder.buildEdmTypeField('CustomerPriceGroup', 'Edm.String', true),
                PRICE_LIST_TYPE: fieldBuilder.buildEdmTypeField('PriceListType', 'Edm.String', true),
                CUSTOMER_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', true),
                PAYMENT_METHOD: fieldBuilder.buildEdmTypeField('PaymentMethod', 'Edm.String', true),
                FIXED_VALUE_DATE: fieldBuilder.buildEdmTypeField('FixedValueDate', 'Edm.DateTime', true),
                ASSIGNMENT_REFERENCE: fieldBuilder.buildEdmTypeField('AssignmentReference', 'Edm.String', true),
                REFERENCE_SD_DOCUMENT: fieldBuilder.buildEdmTypeField('ReferenceSDDocument', 'Edm.String', true),
                REFERENCE_SD_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('ReferenceSDDocumentCategory', 'Edm.String', true),
                ACCOUNTING_DOC_EXTERNAL_REFERENCE: fieldBuilder.buildEdmTypeField('AccountingDocExternalReference', 'Edm.String', true),
                CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountAssignmentGroup', 'Edm.String', true),
                ACCOUNTING_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField('AccountingExchangeRate', 'Edm.Decimal', true),
                CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField('CustomerGroup', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_1: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup1', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_2: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup2', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_3: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup3', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_4: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup4', 'Edm.String', true),
                ADDITIONAL_CUSTOMER_GROUP_5: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup5', 'Edm.String', true),
                SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV: fieldBuilder.buildEdmTypeField('SlsDocIsRlvtForProofOfDeliv', 'Edm.Boolean', true),
                CUSTOMER_TAX_CLASSIFICATION_1: fieldBuilder.buildEdmTypeField('CustomerTaxClassification1', 'Edm.String', true),
                CUSTOMER_TAX_CLASSIFICATION_2: fieldBuilder.buildEdmTypeField('CustomerTaxClassification2', 'Edm.String', true),
                CUSTOMER_TAX_CLASSIFICATION_3: fieldBuilder.buildEdmTypeField('CustomerTaxClassification3', 'Edm.String', true),
                CUSTOMER_TAX_CLASSIFICATION_4: fieldBuilder.buildEdmTypeField('CustomerTaxClassification4', 'Edm.String', true),
                CUSTOMER_TAX_CLASSIFICATION_5: fieldBuilder.buildEdmTypeField('CustomerTaxClassification5', 'Edm.String', true),
                CUSTOMER_TAX_CLASSIFICATION_6: fieldBuilder.buildEdmTypeField('CustomerTaxClassification6', 'Edm.String', true),
                CUSTOMER_TAX_CLASSIFICATION_7: fieldBuilder.buildEdmTypeField('CustomerTaxClassification7', 'Edm.String', true),
                CUSTOMER_TAX_CLASSIFICATION_8: fieldBuilder.buildEdmTypeField('CustomerTaxClassification8', 'Edm.String', true),
                CUSTOMER_TAX_CLASSIFICATION_9: fieldBuilder.buildEdmTypeField('CustomerTaxClassification9', 'Edm.String', true),
                TAX_DEPARTURE_COUNTRY: fieldBuilder.buildEdmTypeField('TaxDepartureCountry', 'Edm.String', true),
                VAT_REGISTRATION_COUNTRY: fieldBuilder.buildEdmTypeField('VATRegistrationCountry', 'Edm.String', true),
                SALES_ORDER_APPROVAL_REASON: fieldBuilder.buildEdmTypeField('SalesOrderApprovalReason', 'Edm.String', true),
                SALES_DOC_APPROVAL_STATUS: fieldBuilder.buildEdmTypeField('SalesDocApprovalStatus', 'Edm.String', true),
                OVERALL_SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField('OverallSDProcessStatus', 'Edm.String', true),
                TOTAL_CREDIT_CHECK_STATUS: fieldBuilder.buildEdmTypeField('TotalCreditCheckStatus', 'Edm.String', true),
                OVERALL_TOTAL_DELIVERY_STATUS: fieldBuilder.buildEdmTypeField('OverallTotalDeliveryStatus', 'Edm.String', true),
                OVERALL_SD_DOCUMENT_REJECTION_STS: fieldBuilder.buildEdmTypeField('OverallSDDocumentRejectionSts', 'Edm.String', true),
                BILLING_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField('BillingDocumentDate', 'Edm.DateTime', true),
                CONTRACT_ACCOUNT: fieldBuilder.buildEdmTypeField('ContractAccount', 'Edm.String', true),
                ADDITIONAL_VALUE_DAYS: fieldBuilder.buildEdmTypeField('AdditionalValueDays', 'Edm.String', true),
                CUSTOMER_PURCHASE_ORDER_SUPLMNT: fieldBuilder.buildEdmTypeField('CustomerPurchaseOrderSuplmnt', 'Edm.String', true),
                SERVICES_RENDERED_DATE: fieldBuilder.buildEdmTypeField('ServicesRenderedDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrder_1.SalesOrder)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderApi = SalesOrderApi;
//# sourceMappingURL=SalesOrderApi.js.map