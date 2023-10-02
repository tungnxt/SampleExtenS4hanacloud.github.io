import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderPartnerAddressApi } from './SalesOrderPartnerAddressApi';
import { SalesOrderHeaderPartner, SalesOrderHeaderPartnerType } from './SalesOrderHeaderPartner';
import { SalesOrder, SalesOrderType } from './SalesOrder';
export declare class SalesOrderPartnerAddress<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderPartnerAddressType<T> {
    readonly _entityApi: SalesOrderPartnerAddressApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    addressRepresentationCode: DeserializedType<T, 'Edm.String'>;
    correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
    addresseeFullName?: DeserializedType<T, 'Edm.String'> | null;
    organizationName1?: DeserializedType<T, 'Edm.String'> | null;
    organizationName2?: DeserializedType<T, 'Edm.String'> | null;
    organizationName3?: DeserializedType<T, 'Edm.String'> | null;
    organizationName4?: DeserializedType<T, 'Edm.String'> | null;
    cityName?: DeserializedType<T, 'Edm.String'> | null;
    districtName?: DeserializedType<T, 'Edm.String'> | null;
    postalCode?: DeserializedType<T, 'Edm.String'> | null;
    streetPrefixName1?: DeserializedType<T, 'Edm.String'> | null;
    streetPrefixName2?: DeserializedType<T, 'Edm.String'> | null;
    streetName?: DeserializedType<T, 'Edm.String'> | null;
    streetSuffixName1?: DeserializedType<T, 'Edm.String'> | null;
    streetSuffixName2?: DeserializedType<T, 'Edm.String'> | null;
    houseNumber?: DeserializedType<T, 'Edm.String'> | null;
    country?: DeserializedType<T, 'Edm.String'> | null;
    region?: DeserializedType<T, 'Edm.String'> | null;
    formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
    taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
    transportZone?: DeserializedType<T, 'Edm.String'> | null;
    poBox?: DeserializedType<T, 'Edm.String'> | null;
    poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    mobilePhoneCountry?: DeserializedType<T, 'Edm.String'> | null;
    mobileNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
    faxAreaCodeSubscriberNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
    toPartner?: SalesOrderHeaderPartner<T> | null;
    toSalesOrder?: SalesOrder<T> | null;
    constructor(_entityApi: SalesOrderPartnerAddressApi<T>);
}
export interface SalesOrderPartnerAddressType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    addressRepresentationCode: DeserializedType<T, 'Edm.String'>;
    correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
    addresseeFullName?: DeserializedType<T, 'Edm.String'> | null;
    organizationName1?: DeserializedType<T, 'Edm.String'> | null;
    organizationName2?: DeserializedType<T, 'Edm.String'> | null;
    organizationName3?: DeserializedType<T, 'Edm.String'> | null;
    organizationName4?: DeserializedType<T, 'Edm.String'> | null;
    cityName?: DeserializedType<T, 'Edm.String'> | null;
    districtName?: DeserializedType<T, 'Edm.String'> | null;
    postalCode?: DeserializedType<T, 'Edm.String'> | null;
    streetPrefixName1?: DeserializedType<T, 'Edm.String'> | null;
    streetPrefixName2?: DeserializedType<T, 'Edm.String'> | null;
    streetName?: DeserializedType<T, 'Edm.String'> | null;
    streetSuffixName1?: DeserializedType<T, 'Edm.String'> | null;
    streetSuffixName2?: DeserializedType<T, 'Edm.String'> | null;
    houseNumber?: DeserializedType<T, 'Edm.String'> | null;
    country?: DeserializedType<T, 'Edm.String'> | null;
    region?: DeserializedType<T, 'Edm.String'> | null;
    formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
    taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
    transportZone?: DeserializedType<T, 'Edm.String'> | null;
    poBox?: DeserializedType<T, 'Edm.String'> | null;
    poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    mobilePhoneCountry?: DeserializedType<T, 'Edm.String'> | null;
    mobileNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
    faxAreaCodeSubscriberNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
    toPartner?: SalesOrderHeaderPartnerType<T> | null;
    toSalesOrder?: SalesOrderType<T> | null;
}
