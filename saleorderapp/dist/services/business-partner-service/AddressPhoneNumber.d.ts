import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { AddressPhoneNumberApi } from './AddressPhoneNumberApi';
export declare class AddressPhoneNumber<T extends DeSerializers = DefaultDeSerializers> extends Entity implements AddressPhoneNumberType<T> {
    readonly _entityApi: AddressPhoneNumberApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    destinationLocationCountry?: DeserializedType<T, 'Edm.String'> | null;
    isDefaultPhoneNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
    phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    internationalPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumberType?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: AddressPhoneNumberApi<T>);
}
export interface AddressPhoneNumberType<T extends DeSerializers = DefaultDeSerializers> {
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    destinationLocationCountry?: DeserializedType<T, 'Edm.String'> | null;
    isDefaultPhoneNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
    phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    internationalPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumberType?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
}
