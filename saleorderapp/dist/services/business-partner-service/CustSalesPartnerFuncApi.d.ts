import { CustSalesPartnerFunc } from './CustSalesPartnerFunc';
import { CustSalesPartnerFuncRequestBuilder } from './CustSalesPartnerFuncRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class CustSalesPartnerFuncApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustSalesPartnerFunc<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): CustSalesPartnerFuncApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof CustSalesPartnerFunc;
    requestBuilder(): CustSalesPartnerFuncRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustSalesPartnerFunc<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustSalesPartnerFunc<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustSalesPartnerFunc, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORGANIZATION: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DISTRIBUTION_CHANNEL: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DIVISION: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PARTNER_COUNTER: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PARTNER_FUNCTION: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BP_CUSTOMER_NUMBER: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_PARTNER_DESCRIPTION: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DEFAULT_PARTNER: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        SUPPLIER: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PERSONNEL_NUMBER: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_ID: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<CustSalesPartnerFunc<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
