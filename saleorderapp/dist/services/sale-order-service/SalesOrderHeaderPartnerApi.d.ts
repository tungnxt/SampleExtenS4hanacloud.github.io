import { SalesOrderHeaderPartner } from './SalesOrderHeaderPartner';
import { SalesOrderHeaderPartnerRequestBuilder } from './SalesOrderHeaderPartnerRequestBuilder';
import { SalesOrderPartnerAddressApi } from './SalesOrderPartnerAddressApi';
import { SalesOrderApi } from './SalesOrderApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderHeaderPartnerApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderHeaderPartner<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderHeaderPartnerApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SalesOrderPartnerAddressApi<DeSerializersT>,
        SalesOrderApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SalesOrderHeaderPartner;
    requestBuilder(): SalesOrderHeaderPartnerRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderHeaderPartner<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderHeaderPartner<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderHeaderPartner, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PARTNER_FUNCTION: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PARTNER_FUNCTION_INTERNAL_CODE: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PERSONNEL: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REFERENCE_BUSINESS_PARTNER: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_ID: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        VAT_REGISTRATION: OrderableEdmTypeField<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_ADDRESS: Link<SalesOrderHeaderPartner<DeSerializersT>, DeSerializersT, SalesOrderPartnerAddressApi<DeSerializersT>>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderHeaderPartner<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderHeaderPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
