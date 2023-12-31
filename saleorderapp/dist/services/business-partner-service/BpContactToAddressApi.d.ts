import { BpContactToAddress } from './BpContactToAddress';
import { BpContactToAddressRequestBuilder } from './BpContactToAddressRequestBuilder';
import { AddressEmailAddressApi } from './AddressEmailAddressApi';
import { AddressFaxNumberApi } from './AddressFaxNumberApi';
import { AddressPhoneNumberApi } from './AddressPhoneNumberApi';
import { AddressHomePageUrlApi } from './AddressHomePageUrlApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class BpContactToAddressApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<BpContactToAddress<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): BpContactToAddressApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        AddressEmailAddressApi<DeSerializersT>,
        AddressFaxNumberApi<DeSerializersT>,
        AddressPhoneNumberApi<DeSerializersT>,
        AddressPhoneNumberApi<DeSerializersT>,
        AddressHomePageUrlApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof BpContactToAddress;
    requestBuilder(): BpContactToAddressRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<BpContactToAddress<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<BpContactToAddress<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof BpContactToAddress, DeSerializersT>;
    private _schema?;
    get schema(): {
        RELATIONSHIP_NUMBER: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BUSINESS_PARTNER_COMPANY: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BUSINESS_PARTNER_PERSON: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        VALIDITY_END_DATE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", false, true>;
        ADDRESS_ID: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ADDRESS_NUMBER: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_STREET_PREFIX_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_STREET_SUFFIX_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_TIME_ZONE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CARE_OF_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CITY_CODE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CITY_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COMPANY_POSTAL_CODE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTRY: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COUNTY: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_SERVICE_NUMBER: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_SERVICE_TYPE_CODE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DISTRICT: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FORM_OF_ADDRESS: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FULL_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HOME_CITY_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HOUSE_NUMBER: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HOUSE_NUMBER_SUPPLEMENT_TEXT: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LANGUAGE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_DEVIATING_CITY_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_DEVIATING_COUNTRY: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_DEVIATING_REGION: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_IS_WITHOUT_NUMBER: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        PO_BOX_LOBBY_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PO_BOX_POSTAL_CODE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PERSON: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        POSTAL_CODE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PRFRD_COMM_MEDIUM_TYPE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REGION: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_PREFIX_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        STREET_SUFFIX_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_JURISDICTION: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TRANSPORT_ZONE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_REPRESENTATION_CODE: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON_BUILDING: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON_PRFRD_COMM_MEDIUM: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_RELATIONSHIP_DEPARTMENT: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_RELATIONSHIP_FUNCTION: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CORRESPONDENCE_SHORT_NAME: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FLOOR: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INHOUSE_MAIL: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_DEFAULT_ADDRESS: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        ROOM_NUMBER: OrderableEdmTypeField<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_EMAIL_ADDRESS: Link<BpContactToAddress<DeSerializersT>, DeSerializersT, AddressEmailAddressApi<DeSerializersT>>;
        TO_FAX_NUMBER: Link<BpContactToAddress<DeSerializersT>, DeSerializersT, AddressFaxNumberApi<DeSerializersT>>;
        TO_MOBILE_PHONE_NUMBER: Link<BpContactToAddress<DeSerializersT>, DeSerializersT, AddressPhoneNumberApi<DeSerializersT>>;
        TO_PHONE_NUMBER: Link<BpContactToAddress<DeSerializersT>, DeSerializersT, AddressPhoneNumberApi<DeSerializersT>>;
        TO_URL_ADDRESS: Link<BpContactToAddress<DeSerializersT>, DeSerializersT, AddressHomePageUrlApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<BpContactToAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
