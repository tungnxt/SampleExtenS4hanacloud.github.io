import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustSlsAreaAddrDepdntTaxInfoApi } from './CustSlsAreaAddrDepdntTaxInfoApi';
export declare class CustSlsAreaAddrDepdntTaxInfo<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustSlsAreaAddrDepdntTaxInfoType<T> {
    readonly _entityApi: CustSlsAreaAddrDepdntTaxInfoApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    departureCountry: DeserializedType<T, 'Edm.String'>;
    customerTaxCategory: DeserializedType<T, 'Edm.String'>;
    customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: CustSlsAreaAddrDepdntTaxInfoApi<T>);
}
export interface CustSlsAreaAddrDepdntTaxInfoType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    departureCountry: DeserializedType<T, 'Edm.String'>;
    customerTaxCategory: DeserializedType<T, 'Edm.String'>;
    customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;
}
