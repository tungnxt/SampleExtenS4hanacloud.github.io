import { SalesOrderItemPartner } from './SalesOrderItemPartner';
import { SalesOrderItemPartnerRequestBuilder } from './SalesOrderItemPartnerRequestBuilder';
import { SalesOrderItemPartnerAddressApi } from './SalesOrderItemPartnerAddressApi';
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderItemApi } from './SalesOrderItemApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderItemPartnerApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderItemPartner<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderItemPartnerApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SalesOrderItemPartnerAddressApi<DeSerializersT>,
        SalesOrderApi<DeSerializersT>,
        SalesOrderItemApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SalesOrderItemPartner;
    requestBuilder(): SalesOrderItemPartnerRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderItemPartner<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderItemPartner<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderItemPartner, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORDER_ITEM: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PARTNER_FUNCTION: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PARTNER_FUNCTION_INTERNAL_CODE: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PERSONNEL: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REFERENCE_BUSINESS_PARTNER: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_ID: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        VAT_REGISTRATION: OrderableEdmTypeField<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_ADDRESS: Link<SalesOrderItemPartner<DeSerializersT>, DeSerializersT, SalesOrderItemPartnerAddressApi<DeSerializersT>>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderItemPartner<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        TO_SALES_ORDER_ITEM: OneToOneLink<SalesOrderItemPartner<DeSerializersT>, DeSerializersT, SalesOrderItemApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderItemPartner<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
