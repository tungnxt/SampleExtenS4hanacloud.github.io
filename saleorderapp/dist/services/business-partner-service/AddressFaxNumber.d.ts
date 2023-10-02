import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { AddressFaxNumberApi } from './AddressFaxNumberApi';
export declare class AddressFaxNumber<T extends DeSerializers = DefaultDeSerializers> extends Entity implements AddressFaxNumberType<T> {
    readonly _entityApi: AddressFaxNumberApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    isDefaultFaxNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
    faxCountry?: DeserializedType<T, 'Edm.String'> | null;
    faxNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    internationalFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: AddressFaxNumberApi<T>);
}
export interface AddressFaxNumberType<T extends DeSerializers = DefaultDeSerializers> {
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    isDefaultFaxNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
    faxCountry?: DeserializedType<T, 'Edm.String'> | null;
    faxNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    internationalFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
}
