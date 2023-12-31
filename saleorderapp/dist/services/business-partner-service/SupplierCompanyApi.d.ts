import { SupplierCompany } from './SupplierCompany';
import { SupplierCompanyRequestBuilder } from './SupplierCompanyRequestBuilder';
import { SupplierCompanyTextApi } from './SupplierCompanyTextApi';
import { SupplierApi } from './SupplierApi';
import { SupplierDunningApi } from './SupplierDunningApi';
import { SupplierWithHoldingTaxApi } from './SupplierWithHoldingTaxApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SupplierCompanyApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SupplierCompany<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SupplierCompanyApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SupplierCompanyTextApi<DeSerializersT>,
        SupplierApi<DeSerializersT>,
        SupplierDunningApi<DeSerializersT>,
        SupplierWithHoldingTaxApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SupplierCompany;
    requestBuilder(): SupplierCompanyRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SupplierCompany<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SupplierCompany<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SupplierCompany, DeSerializersT>;
    private _schema?;
    get schema(): {
        SUPPLIER: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        COMPANY_CODE: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COMPANY_CODE_NAME: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_BLOCKING_REASON: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_IS_BLOCKED_FOR_POSTING: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        ACCOUNTING_CLERK: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_CLERK_FAX_NUMBER: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_CLERK_PHONE_NUMBER: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_CLERK: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_CLERK_URL: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_METHODS_LIST: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_REASON: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_TERMS: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CLEAR_CUSTOMER_SUPPLIER: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        IS_TO_BE_LOCALLY_PROCESSED: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        ITEM_IS_TO_BE_PAID_SEPARATELY: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        PAYMENT_IS_TO_BE_SENT_BY_EDI: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        HOUSE_BANK: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CHECK_PAID_DURATION_IN_DAYS: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        CURRENCY: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILL_OF_EXCH_LMT_AMT_IN_CO_CODE_CRCY: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        SUPPLIER_CLERK_ID_BY_SUPPLIER: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        RECONCILIATION_ACCOUNT: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTEREST_CALCULATION_CODE: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTEREST_CALCULATION_DATE: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        INTRST_CALC_FREQUENCY_IN_MONTHS: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_HEAD_OFFICE: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALTERNATIVE_PAYEE: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LAYOUT_SORTING_RULE: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        APAR_TOLERANCE_GROUP: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_CERTIFICATION_DATE: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        SUPPLIER_ACCOUNT_NOTE: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        WITHHOLDING_TAX_COUNTRY: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELETION_INDICATOR: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        CASH_PLANNING_GROUP: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_TO_BE_CHECKED_FOR_DUPLICATES: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        MINORITY_GROUP: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_ACCOUNT_GROUP: OrderableEdmTypeField<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_COMPANY_TEXT: Link<SupplierCompany<DeSerializersT>, DeSerializersT, SupplierCompanyTextApi<DeSerializersT>>;
        TO_SUPPLIER: OneToOneLink<SupplierCompany<DeSerializersT>, DeSerializersT, SupplierApi<DeSerializersT>>;
        TO_SUPPLIER_DUNNING: Link<SupplierCompany<DeSerializersT>, DeSerializersT, SupplierDunningApi<DeSerializersT>>;
        TO_SUPPLIER_WITH_HOLDING_TAX: Link<SupplierCompany<DeSerializersT>, DeSerializersT, SupplierWithHoldingTaxApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SupplierCompany<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
