import { Supplier } from './Supplier';
import { SupplierRequestBuilder } from './SupplierRequestBuilder';
import { SupplierCompanyApi } from './SupplierCompanyApi';
import { SupplierPurchasingOrgApi } from './SupplierPurchasingOrgApi';
import { SupplierTextApi } from './SupplierTextApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class SupplierApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Supplier<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SupplierApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SupplierCompanyApi<DeSerializersT>,
        SupplierPurchasingOrgApi<DeSerializersT>,
        SupplierTextApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Supplier;
    requestBuilder(): SupplierRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Supplier<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Supplier<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Supplier, DeSerializersT>;
    private _schema?;
    get schema(): {
        SUPPLIER: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ALTERNATIVE_PAYEE_ACCOUNT_NUMBER: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATED_BY_USER: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATION_DATE: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CUSTOMER: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_IS_BLOCKED_FOR_SUPPLIER: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        POSTING_IS_BLOCKED: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        PURCHASING_IS_BLOCKED: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        SUPPLIER_ACCOUNT_GROUP: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_FULL_NAME: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_NAME: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        VAT_REGISTRATION: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BIRTH_DATE: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CONCATENATED_INTERNATIONAL_LOC_NO: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELETION_INDICATOR: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        FISCAL_ADDRESS: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INDUSTRY: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_LOCATION_NUMBER_1: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_LOCATION_NUMBER_2: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_LOCATION_NUMBER_3: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_NATURAL_PERSON: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_REASON: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        RESPONSIBLE_TYPE: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPLR_QLTY_IN_PROCMT_CERTFN_VALID_TO: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        SUPLR_QUALITY_MANAGEMENT_SYSTEM: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_CORPORATE_GROUP: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_PROCUREMENT_BLOCK: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_1: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_2: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_3: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_4: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_5: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_RESPONSIBLE: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_TYPE: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPLR_PROOF_OF_DELIV_RLVT_CODE: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BR_TAX_IS_SPLIT: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        DATA_EXCHANGE_INSTRUCTION_KEY: OrderableEdmTypeField<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_SUPPLIER_COMPANY: Link<Supplier<DeSerializersT>, DeSerializersT, SupplierCompanyApi<DeSerializersT>>;
        TO_SUPPLIER_PURCHASING_ORG: Link<Supplier<DeSerializersT>, DeSerializersT, SupplierPurchasingOrgApi<DeSerializersT>>;
        TO_SUPPLIER_TEXT: Link<Supplier<DeSerializersT>, DeSerializersT, SupplierTextApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Supplier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
