"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCompanyApi = void 0;
const CustomerCompany_1 = require("./CustomerCompany");
const CustomerCompanyRequestBuilder_1 = require("./CustomerCompanyRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerCompanyApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomerCompany_1.CustomerCompany;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomerCompanyApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_COMPANY_TEXT: new odata_v2_1.Link('to_CompanyText', this, linkedApis[0]),
            TO_CUSTOMER_DUNNING: new odata_v2_1.Link('to_CustomerDunning', this, linkedApis[1]),
            TO_WITH_HOLDING_TAX: new odata_v2_1.Link('to_WithHoldingTax', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new CustomerCompanyRequestBuilder_1.CustomerCompanyRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerCompany_1.CustomerCompany, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
                APAR_TOLERANCE_GROUP: fieldBuilder.buildEdmTypeField('APARToleranceGroup', 'Edm.String', true),
                ACCOUNT_BY_CUSTOMER: fieldBuilder.buildEdmTypeField('AccountByCustomer', 'Edm.String', true),
                ACCOUNTING_CLERK: fieldBuilder.buildEdmTypeField('AccountingClerk', 'Edm.String', true),
                ACCOUNTING_CLERK_FAX_NUMBER: fieldBuilder.buildEdmTypeField('AccountingClerkFaxNumber', 'Edm.String', true),
                ACCOUNTING_CLERK_INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField('AccountingClerkInternetAddress', 'Edm.String', true),
                ACCOUNTING_CLERK_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('AccountingClerkPhoneNumber', 'Edm.String', true),
                ALTERNATIVE_PAYER_ACCOUNT: fieldBuilder.buildEdmTypeField('AlternativePayerAccount', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                COLLECTIVE_INVOICE_VARIANT: fieldBuilder.buildEdmTypeField('CollectiveInvoiceVariant', 'Edm.String', true),
                CUSTOMER_ACCOUNT_NOTE: fieldBuilder.buildEdmTypeField('CustomerAccountNote', 'Edm.String', true),
                CUSTOMER_HEAD_OFFICE: fieldBuilder.buildEdmTypeField('CustomerHeadOffice', 'Edm.String', true),
                CUSTOMER_SUPPLIER_CLEARING_IS_USED: fieldBuilder.buildEdmTypeField('CustomerSupplierClearingIsUsed', 'Edm.Boolean', true),
                HOUSE_BANK: fieldBuilder.buildEdmTypeField('HouseBank', 'Edm.String', true),
                INTEREST_CALCULATION_CODE: fieldBuilder.buildEdmTypeField('InterestCalculationCode', 'Edm.String', true),
                INTEREST_CALCULATION_DATE: fieldBuilder.buildEdmTypeField('InterestCalculationDate', 'Edm.DateTime', true),
                INTRST_CALC_FREQUENCY_IN_MONTHS: fieldBuilder.buildEdmTypeField('IntrstCalcFrequencyInMonths', 'Edm.String', true),
                IS_TO_BE_LOCALLY_PROCESSED: fieldBuilder.buildEdmTypeField('IsToBeLocallyProcessed', 'Edm.Boolean', true),
                ITEM_IS_TO_BE_PAID_SEPARATELY: fieldBuilder.buildEdmTypeField('ItemIsToBePaidSeparately', 'Edm.Boolean', true),
                LAYOUT_SORTING_RULE: fieldBuilder.buildEdmTypeField('LayoutSortingRule', 'Edm.String', true),
                PAYMENT_BLOCKING_REASON: fieldBuilder.buildEdmTypeField('PaymentBlockingReason', 'Edm.String', true),
                PAYMENT_METHODS_LIST: fieldBuilder.buildEdmTypeField('PaymentMethodsList', 'Edm.String', true),
                PAYMENT_REASON: fieldBuilder.buildEdmTypeField('PaymentReason', 'Edm.String', true),
                PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
                PAYT_ADVICE_IS_SENTBY_EDI: fieldBuilder.buildEdmTypeField('PaytAdviceIsSentbyEDI', 'Edm.Boolean', true),
                PHYSICAL_INVENTORY_BLOCK_IND: fieldBuilder.buildEdmTypeField('PhysicalInventoryBlockInd', 'Edm.Boolean', true),
                RECONCILIATION_ACCOUNT: fieldBuilder.buildEdmTypeField('ReconciliationAccount', 'Edm.String', true),
                RECORD_PAYMENT_HISTORY_INDICATOR: fieldBuilder.buildEdmTypeField('RecordPaymentHistoryIndicator', 'Edm.Boolean', true),
                USER_AT_CUSTOMER: fieldBuilder.buildEdmTypeField('UserAtCustomer', 'Edm.String', true),
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                CASH_PLANNING_GROUP: fieldBuilder.buildEdmTypeField('CashPlanningGroup', 'Edm.String', true),
                KNOWN_OR_NEGOTIATED_LEAVE: fieldBuilder.buildEdmTypeField('KnownOrNegotiatedLeave', 'Edm.String', true),
                VALUE_ADJUSTMENT_KEY: fieldBuilder.buildEdmTypeField('ValueAdjustmentKey', 'Edm.String', true),
                CUSTOMER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerCompany_1.CustomerCompany)
            };
        }
        return this._schema;
    }
}
exports.CustomerCompanyApi = CustomerCompanyApi;
//# sourceMappingURL=CustomerCompanyApi.js.map