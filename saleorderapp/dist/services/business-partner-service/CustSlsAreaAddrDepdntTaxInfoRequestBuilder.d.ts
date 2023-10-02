import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustSlsAreaAddrDepdntTaxInfo } from './CustSlsAreaAddrDepdntTaxInfo';
export declare class CustSlsAreaAddrDepdntTaxInfoRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustSlsAreaAddrDepdntTaxInfo<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, salesOrganization: DeserializedType<T, 'Edm.String'>, distributionChannel: DeserializedType<T, 'Edm.String'>, division: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>, departureCountry: DeserializedType<T, 'Edm.String'>, customerTaxCategory: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustSlsAreaAddrDepdntTaxInfo<T>, T>;
    getAll(): GetAllRequestBuilder<CustSlsAreaAddrDepdntTaxInfo<T>, T>;
    create(entity: CustSlsAreaAddrDepdntTaxInfo<T>): CreateRequestBuilder<CustSlsAreaAddrDepdntTaxInfo<T>, T>;
    update(entity: CustSlsAreaAddrDepdntTaxInfo<T>): UpdateRequestBuilder<CustSlsAreaAddrDepdntTaxInfo<T>, T>;
    delete(customer: string, salesOrganization: string, distributionChannel: string, division: string, addressId: string, departureCountry: string, customerTaxCategory: string): DeleteRequestBuilder<CustSlsAreaAddrDepdntTaxInfo<T>, T>;
    delete(entity: CustSlsAreaAddrDepdntTaxInfo<T>): DeleteRequestBuilder<CustSlsAreaAddrDepdntTaxInfo<T>, T>;
}
