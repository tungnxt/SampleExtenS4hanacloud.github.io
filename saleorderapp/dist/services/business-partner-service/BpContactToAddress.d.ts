import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BpContactToAddressApi } from './BpContactToAddressApi';
import { AddressEmailAddress, AddressEmailAddressType } from './AddressEmailAddress';
import { AddressFaxNumber, AddressFaxNumberType } from './AddressFaxNumber';
import { AddressPhoneNumber, AddressPhoneNumberType } from './AddressPhoneNumber';
import { AddressHomePageUrl, AddressHomePageUrlType } from './AddressHomePageUrl';
export declare class BpContactToAddress<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BpContactToAddressType<T> {
    readonly _entityApi: BpContactToAddressApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    addressNumber?: DeserializedType<T, 'Edm.String'> | null;
    additionalStreetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
    additionalStreetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
    addressTimeZone?: DeserializedType<T, 'Edm.String'> | null;
    careOfName?: DeserializedType<T, 'Edm.String'> | null;
    cityCode?: DeserializedType<T, 'Edm.String'> | null;
    cityName?: DeserializedType<T, 'Edm.String'> | null;
    companyPostalCode?: DeserializedType<T, 'Edm.String'> | null;
    country?: DeserializedType<T, 'Edm.String'> | null;
    county?: DeserializedType<T, 'Edm.String'> | null;
    deliveryServiceNumber?: DeserializedType<T, 'Edm.String'> | null;
    deliveryServiceTypeCode?: DeserializedType<T, 'Edm.String'> | null;
    district?: DeserializedType<T, 'Edm.String'> | null;
    formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
    fullName?: DeserializedType<T, 'Edm.String'> | null;
    homeCityName?: DeserializedType<T, 'Edm.String'> | null;
    houseNumber?: DeserializedType<T, 'Edm.String'> | null;
    houseNumberSupplementText?: DeserializedType<T, 'Edm.String'> | null;
    language?: DeserializedType<T, 'Edm.String'> | null;
    poBox?: DeserializedType<T, 'Edm.String'> | null;
    poBoxDeviatingCityName?: DeserializedType<T, 'Edm.String'> | null;
    poBoxDeviatingCountry?: DeserializedType<T, 'Edm.String'> | null;
    poBoxDeviatingRegion?: DeserializedType<T, 'Edm.String'> | null;
    poBoxIsWithoutNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
    poBoxLobbyName?: DeserializedType<T, 'Edm.String'> | null;
    poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
    person?: DeserializedType<T, 'Edm.String'> | null;
    postalCode?: DeserializedType<T, 'Edm.String'> | null;
    prfrdCommMediumType?: DeserializedType<T, 'Edm.String'> | null;
    region?: DeserializedType<T, 'Edm.String'> | null;
    streetName?: DeserializedType<T, 'Edm.String'> | null;
    streetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
    streetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
    taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
    transportZone?: DeserializedType<T, 'Edm.String'> | null;
    addressRepresentationCode?: DeserializedType<T, 'Edm.String'> | null;
    contactPersonBuilding?: DeserializedType<T, 'Edm.String'> | null;
    contactPersonPrfrdCommMedium?: DeserializedType<T, 'Edm.String'> | null;
    contactRelationshipDepartment?: DeserializedType<T, 'Edm.String'> | null;
    contactRelationshipFunction?: DeserializedType<T, 'Edm.String'> | null;
    correspondenceShortName?: DeserializedType<T, 'Edm.String'> | null;
    floor?: DeserializedType<T, 'Edm.String'> | null;
    inhouseMail?: DeserializedType<T, 'Edm.String'> | null;
    isDefaultAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
    roomNumber?: DeserializedType<T, 'Edm.String'> | null;
    toEmailAddress: AddressEmailAddress<T>[];
    toFaxNumber: AddressFaxNumber<T>[];
    toMobilePhoneNumber: AddressPhoneNumber<T>[];
    toPhoneNumber: AddressPhoneNumber<T>[];
    toUrlAddress: AddressHomePageUrl<T>[];
    constructor(_entityApi: BpContactToAddressApi<T>);
}
export interface BpContactToAddressType<T extends DeSerializers = DefaultDeSerializers> {
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    addressNumber?: DeserializedType<T, 'Edm.String'> | null;
    additionalStreetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
    additionalStreetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
    addressTimeZone?: DeserializedType<T, 'Edm.String'> | null;
    careOfName?: DeserializedType<T, 'Edm.String'> | null;
    cityCode?: DeserializedType<T, 'Edm.String'> | null;
    cityName?: DeserializedType<T, 'Edm.String'> | null;
    companyPostalCode?: DeserializedType<T, 'Edm.String'> | null;
    country?: DeserializedType<T, 'Edm.String'> | null;
    county?: DeserializedType<T, 'Edm.String'> | null;
    deliveryServiceNumber?: DeserializedType<T, 'Edm.String'> | null;
    deliveryServiceTypeCode?: DeserializedType<T, 'Edm.String'> | null;
    district?: DeserializedType<T, 'Edm.String'> | null;
    formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
    fullName?: DeserializedType<T, 'Edm.String'> | null;
    homeCityName?: DeserializedType<T, 'Edm.String'> | null;
    houseNumber?: DeserializedType<T, 'Edm.String'> | null;
    houseNumberSupplementText?: DeserializedType<T, 'Edm.String'> | null;
    language?: DeserializedType<T, 'Edm.String'> | null;
    poBox?: DeserializedType<T, 'Edm.String'> | null;
    poBoxDeviatingCityName?: DeserializedType<T, 'Edm.String'> | null;
    poBoxDeviatingCountry?: DeserializedType<T, 'Edm.String'> | null;
    poBoxDeviatingRegion?: DeserializedType<T, 'Edm.String'> | null;
    poBoxIsWithoutNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
    poBoxLobbyName?: DeserializedType<T, 'Edm.String'> | null;
    poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
    person?: DeserializedType<T, 'Edm.String'> | null;
    postalCode?: DeserializedType<T, 'Edm.String'> | null;
    prfrdCommMediumType?: DeserializedType<T, 'Edm.String'> | null;
    region?: DeserializedType<T, 'Edm.String'> | null;
    streetName?: DeserializedType<T, 'Edm.String'> | null;
    streetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
    streetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
    taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
    transportZone?: DeserializedType<T, 'Edm.String'> | null;
    addressRepresentationCode?: DeserializedType<T, 'Edm.String'> | null;
    contactPersonBuilding?: DeserializedType<T, 'Edm.String'> | null;
    contactPersonPrfrdCommMedium?: DeserializedType<T, 'Edm.String'> | null;
    contactRelationshipDepartment?: DeserializedType<T, 'Edm.String'> | null;
    contactRelationshipFunction?: DeserializedType<T, 'Edm.String'> | null;
    correspondenceShortName?: DeserializedType<T, 'Edm.String'> | null;
    floor?: DeserializedType<T, 'Edm.String'> | null;
    inhouseMail?: DeserializedType<T, 'Edm.String'> | null;
    isDefaultAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
    roomNumber?: DeserializedType<T, 'Edm.String'> | null;
    toEmailAddress: AddressEmailAddressType<T>[];
    toFaxNumber: AddressFaxNumberType<T>[];
    toMobilePhoneNumber: AddressPhoneNumberType<T>[];
    toPhoneNumber: AddressPhoneNumberType<T>[];
    toUrlAddress: AddressHomePageUrlType<T>[];
}
