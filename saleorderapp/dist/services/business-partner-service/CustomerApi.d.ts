import { Customer } from './Customer';
import { CustomerRequestBuilder } from './CustomerRequestBuilder';
import { CustAddrDepdntExtIdentifierApi } from './CustAddrDepdntExtIdentifierApi';
import { CustAddrDepdntInformationApi } from './CustAddrDepdntInformationApi';
import { CustomerCompanyApi } from './CustomerCompanyApi';
import { CustomerSalesAreaApi } from './CustomerSalesAreaApi';
import { CustomerTaxGroupingApi } from './CustomerTaxGroupingApi';
import { CustomerTextApi } from './CustomerTextApi';
import { CustomerUnloadingPointApi } from './CustomerUnloadingPointApi';
import { CustUnldgPtAddrDepdntInfoApi } from './CustUnldgPtAddrDepdntInfoApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class CustomerApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Customer<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): CustomerApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        CustAddrDepdntExtIdentifierApi<DeSerializersT>,
        CustAddrDepdntInformationApi<DeSerializersT>,
        CustomerCompanyApi<DeSerializersT>,
        CustomerSalesAreaApi<DeSerializersT>,
        CustomerTaxGroupingApi<DeSerializersT>,
        CustomerTextApi<DeSerializersT>,
        CustomerUnloadingPointApi<DeSerializersT>,
        CustUnldgPtAddrDepdntInfoApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Customer;
    requestBuilder(): CustomerRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Customer<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Customer<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Customer, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATED_BY_USER: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATION_DATE: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CUSTOMER_ACCOUNT_GROUP: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_CLASSIFICATION: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_FULL_NAME: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BP_CUSTOMER_FULL_NAME: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_NAME: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BP_CUSTOMER_NAME: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_IS_BLOCKED: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_01: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_02: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_03: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_04: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_05: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_06: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_07: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_08: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_09: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FREE_DEFINED_ATTRIBUTE_10: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        NF_PARTNER_IS_NATURAL_PERSON: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORDER_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        POSTING_IS_BLOCKED: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        SUPPLIER: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_CORPORATE_GROUP: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FISCAL_ADDRESS: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INDUSTRY: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INDUSTRY_CODE_1: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INDUSTRY_CODE_2: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INDUSTRY_CODE_3: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INDUSTRY_CODE_4: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INDUSTRY_CODE_5: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_LOCATION_NUMBER_1: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_LOCATION_NUMBER_2: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_LOCATION_NUMBER_3: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        NIELSEN_REGION: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_REASON: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        RESPONSIBLE_TYPE: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_1: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_2: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_3: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_4: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_5: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_NUMBER_TYPE: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        VAT_REGISTRATION: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELETION_INDICATOR: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        EXPRESS_TRAIN_STATION_NAME: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TRAIN_STATION_NAME: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CITY_CODE: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTY: OrderableEdmTypeField<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_CUST_ADDR_DEPDNT_EXT_IDENTIFIER: Link<Customer<DeSerializersT>, DeSerializersT, CustAddrDepdntExtIdentifierApi<DeSerializersT>>;
        TO_CUST_ADDR_DEPDNT_INFORMATION: Link<Customer<DeSerializersT>, DeSerializersT, CustAddrDepdntInformationApi<DeSerializersT>>;
        TO_CUSTOMER_COMPANY: Link<Customer<DeSerializersT>, DeSerializersT, CustomerCompanyApi<DeSerializersT>>;
        TO_CUSTOMER_SALES_AREA: Link<Customer<DeSerializersT>, DeSerializersT, CustomerSalesAreaApi<DeSerializersT>>;
        TO_CUSTOMER_TAX_GROUPING: Link<Customer<DeSerializersT>, DeSerializersT, CustomerTaxGroupingApi<DeSerializersT>>;
        TO_CUSTOMER_TEXT: Link<Customer<DeSerializersT>, DeSerializersT, CustomerTextApi<DeSerializersT>>;
        TO_CUSTOMER_UNLOADING_POINT: Link<Customer<DeSerializersT>, DeSerializersT, CustomerUnloadingPointApi<DeSerializersT>>;
        TO_CUST_UNLDG_PT_ADDR_DEPDNT_INFO: Link<Customer<DeSerializersT>, DeSerializersT, CustUnldgPtAddrDepdntInfoApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Customer<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
