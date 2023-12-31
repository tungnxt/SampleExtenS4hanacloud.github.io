import { BusinessPartnerAddress } from './BusinessPartnerAddress';
import { BusinessPartnerAddressRequestBuilder } from './BusinessPartnerAddressRequestBuilder';
import { BuPaAddressUsageApi } from './BuPaAddressUsageApi';
import { BpAddrDepdntIntlLocNumberApi } from './BpAddrDepdntIntlLocNumberApi';
import { BpIntlAddressVersionApi } from './BpIntlAddressVersionApi';
import { AddressEmailAddressApi } from './AddressEmailAddressApi';
import { AddressFaxNumberApi } from './AddressFaxNumberApi';
import { AddressPhoneNumberApi } from './AddressPhoneNumberApi';
import { AddressHomePageUrlApi } from './AddressHomePageUrlApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class BusinessPartnerAddressApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<BusinessPartnerAddress<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): BusinessPartnerAddressApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        BuPaAddressUsageApi<DeSerializersT>,
        BpAddrDepdntIntlLocNumberApi<DeSerializersT>,
        BpIntlAddressVersionApi<DeSerializersT>,
        AddressEmailAddressApi<DeSerializersT>,
        AddressFaxNumberApi<DeSerializersT>,
        AddressPhoneNumberApi<DeSerializersT>,
        AddressPhoneNumberApi<DeSerializersT>,
        AddressHomePageUrlApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof BusinessPartnerAddress;
    requestBuilder(): BusinessPartnerAddressRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<BusinessPartnerAddress<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<BusinessPartnerAddress<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof BusinessPartnerAddress, DeSerializersT>;
    private _schema?;
    get schema(): {
        BUSINESS_PARTNER: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ADDRESS_ID: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        VALIDITY_START_DATE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTimeOffset", true, true>;
        VALIDITY_END_DATE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTimeOffset", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_UUID: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", true, true>;
        ADDITIONAL_STREET_PREFIX_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_STREET_SUFFIX_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_TIME_ZONE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CARE_OF_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CITY_CODE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CITY_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COMPANY_POSTAL_CODE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTRY: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTY: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_SERVICE_NUMBER: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_SERVICE_TYPE_CODE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DISTRICT: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FORM_OF_ADDRESS: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FULL_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HOME_CITY_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HOUSE_NUMBER: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HOUSE_NUMBER_SUPPLEMENT_TEXT: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LANGUAGE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_DEVIATING_CITY_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_DEVIATING_COUNTRY: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_DEVIATING_REGION: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_IS_WITHOUT_NUMBER: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        PO_BOX_LOBBY_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_POSTAL_CODE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PERSON: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        POSTAL_CODE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PRFRD_COMM_MEDIUM_TYPE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REGION: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_PREFIX_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_SUFFIX_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_JURISDICTION: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TRANSPORT_ZONE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_ID_BY_EXTERNAL_SYSTEM: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTY_CODE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TOWNSHIP_CODE: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TOWNSHIP_NAME: OrderableEdmTypeField<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_ADDRESS_USAGE: Link<BusinessPartnerAddress<DeSerializersT>, DeSerializersT, BuPaAddressUsageApi<DeSerializersT>>;
        TO_BP_ADDR_DEPDNT_INTL_LOC_NUMBER: OneToOneLink<BusinessPartnerAddress<DeSerializersT>, DeSerializersT, BpAddrDepdntIntlLocNumberApi<DeSerializersT>>;
        TO_BP_INTL_ADDRESS_VERSION: Link<BusinessPartnerAddress<DeSerializersT>, DeSerializersT, BpIntlAddressVersionApi<DeSerializersT>>;
        TO_EMAIL_ADDRESS: Link<BusinessPartnerAddress<DeSerializersT>, DeSerializersT, AddressEmailAddressApi<DeSerializersT>>;
        TO_FAX_NUMBER: Link<BusinessPartnerAddress<DeSerializersT>, DeSerializersT, AddressFaxNumberApi<DeSerializersT>>;
        TO_MOBILE_PHONE_NUMBER: Link<BusinessPartnerAddress<DeSerializersT>, DeSerializersT, AddressPhoneNumberApi<DeSerializersT>>;
        TO_PHONE_NUMBER: Link<BusinessPartnerAddress<DeSerializersT>, DeSerializersT, AddressPhoneNumberApi<DeSerializersT>>;
        TO_URL_ADDRESS: Link<BusinessPartnerAddress<DeSerializersT>, DeSerializersT, AddressHomePageUrlApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<BusinessPartnerAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
