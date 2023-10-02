import { SalesOrderPartnerAddress } from './SalesOrderPartnerAddress';
import { SalesOrderPartnerAddressRequestBuilder } from './SalesOrderPartnerAddressRequestBuilder';
import { SalesOrderHeaderPartnerApi } from './SalesOrderHeaderPartnerApi';
import { SalesOrderApi } from './SalesOrderApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderPartnerAddressApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderPartnerAddress<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderPartnerAddressApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SalesOrderHeaderPartnerApi<DeSerializersT>,
        SalesOrderApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SalesOrderPartnerAddress;
    requestBuilder(): SalesOrderPartnerAddressRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderPartnerAddress<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderPartnerAddress<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderPartnerAddress, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PARTNER_FUNCTION: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ADDRESS_REPRESENTATION_CODE: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CORRESPONDENCE_LANGUAGE: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESSEE_FULL_NAME: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_NAME_1: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_NAME_2: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_NAME_3: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_NAME_4: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CITY_NAME: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DISTRICT_NAME: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        POSTAL_CODE: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_PREFIX_NAME_1: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_PREFIX_NAME_2: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_NAME: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_SUFFIX_NAME_1: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_SUFFIX_NAME_2: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HOUSE_NUMBER: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTRY: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REGION: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FORM_OF_ADDRESS: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_JURISDICTION: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TRANSPORT_ZONE: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_POSTAL_CODE: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        EMAIL_ADDRESS: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        MOBILE_PHONE_COUNTRY: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        MOBILE_NUMBER: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHONE_NUMBER_COUNTRY: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHONE_NUMBER: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHONE_EXTENSION_NUMBER: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FAX_NUMBER_COUNTRY: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FAX_AREA_CODE_SUBSCRIBER_NUMBER: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FAX_EXTENSION_NUMBER: OrderableEdmTypeField<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_PARTNER: OneToOneLink<SalesOrderPartnerAddress<DeSerializersT>, DeSerializersT, SalesOrderHeaderPartnerApi<DeSerializersT>>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderPartnerAddress<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
