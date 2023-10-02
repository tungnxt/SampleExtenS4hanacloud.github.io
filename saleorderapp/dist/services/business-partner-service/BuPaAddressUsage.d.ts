import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BuPaAddressUsageApi } from './BuPaAddressUsageApi';
export declare class BuPaAddressUsage<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BuPaAddressUsageType<T> {
    readonly _entityApi: BuPaAddressUsageApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
    addressUsage: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    standardUsage?: DeserializedType<T, 'Edm.Boolean'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BuPaAddressUsageApi<T>);
}
export interface BuPaAddressUsageType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
    addressUsage: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    standardUsage?: DeserializedType<T, 'Edm.Boolean'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
