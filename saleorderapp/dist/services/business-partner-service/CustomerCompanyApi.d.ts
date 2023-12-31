import { CustomerCompany } from './CustomerCompany';
import { CustomerCompanyRequestBuilder } from './CustomerCompanyRequestBuilder';
import { CustomerCompanyTextApi } from './CustomerCompanyTextApi';
import { CustomerDunningApi } from './CustomerDunningApi';
import { CustomerWithHoldingTaxApi } from './CustomerWithHoldingTaxApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class CustomerCompanyApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustomerCompany<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): CustomerCompanyApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        CustomerCompanyTextApi<DeSerializersT>,
        CustomerDunningApi<DeSerializersT>,
        CustomerWithHoldingTaxApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof CustomerCompany;
    requestBuilder(): CustomerCompanyRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustomerCompany<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustomerCompany<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustomerCompany, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        COMPANY_CODE: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        APAR_TOLERANCE_GROUP: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNT_BY_CUSTOMER: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_CLERK: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_CLERK_FAX_NUMBER: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_CLERK_INTERNET_ADDRESS: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_CLERK_PHONE_NUMBER: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALTERNATIVE_PAYER_ACCOUNT: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COLLECTIVE_INVOICE_VARIANT: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_ACCOUNT_NOTE: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_HEAD_OFFICE: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_SUPPLIER_CLEARING_IS_USED: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        HOUSE_BANK: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTEREST_CALCULATION_CODE: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTEREST_CALCULATION_DATE: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        INTRST_CALC_FREQUENCY_IN_MONTHS: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_TO_BE_LOCALLY_PROCESSED: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        ITEM_IS_TO_BE_PAID_SEPARATELY: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        LAYOUT_SORTING_RULE: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_BLOCKING_REASON: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_METHODS_LIST: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_REASON: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_TERMS: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYT_ADVICE_IS_SENTBY_EDI: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        PHYSICAL_INVENTORY_BLOCK_IND: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        RECONCILIATION_ACCOUNT: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        RECORD_PAYMENT_HISTORY_INDICATOR: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        USER_AT_CUSTOMER: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELETION_INDICATOR: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        CASH_PLANNING_GROUP: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        KNOWN_OR_NEGOTIATED_LEAVE: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        VALUE_ADJUSTMENT_KEY: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_ACCOUNT_GROUP: OrderableEdmTypeField<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_COMPANY_TEXT: Link<CustomerCompany<DeSerializersT>, DeSerializersT, CustomerCompanyTextApi<DeSerializersT>>;
        TO_CUSTOMER_DUNNING: Link<CustomerCompany<DeSerializersT>, DeSerializersT, CustomerDunningApi<DeSerializersT>>;
        TO_WITH_HOLDING_TAX: Link<CustomerCompany<DeSerializersT>, DeSerializersT, CustomerWithHoldingTaxApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<CustomerCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
