import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { AddressEmailAddressApi } from './AddressEmailAddressApi';
export declare class AddressEmailAddress<T extends DeSerializers = DefaultDeSerializers> extends Entity implements AddressEmailAddressType<T> {
    readonly _entityApi: AddressEmailAddressApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    searchEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: AddressEmailAddressApi<T>);
}
export interface AddressEmailAddressType<T extends DeSerializers = DefaultDeSerializers> {
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    searchEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
}
