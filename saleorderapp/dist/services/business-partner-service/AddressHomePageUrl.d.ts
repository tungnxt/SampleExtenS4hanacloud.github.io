import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { AddressHomePageUrlApi } from './AddressHomePageUrlApi';
export declare class AddressHomePageUrl<T extends DeSerializers = DefaultDeSerializers> extends Entity implements AddressHomePageUrlType<T> {
    readonly _entityApi: AddressHomePageUrlApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    validityStartDate: DeserializedType<T, 'Edm.DateTime'>;
    isDefaultUrlAddress: DeserializedType<T, 'Edm.Boolean'>;
    searchUrlAddress?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
    urlFieldLength?: DeserializedType<T, 'Edm.Int16'> | null;
    websiteUrl?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: AddressHomePageUrlApi<T>);
}
export interface AddressHomePageUrlType<T extends DeSerializers = DefaultDeSerializers> {
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    validityStartDate: DeserializedType<T, 'Edm.DateTime'>;
    isDefaultUrlAddress: DeserializedType<T, 'Edm.Boolean'>;
    searchUrlAddress?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
    urlFieldLength?: DeserializedType<T, 'Edm.Int16'> | null;
    websiteUrl?: DeserializedType<T, 'Edm.String'> | null;
}
