import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustSlsAreaAddrDepdntInfo } from './CustSlsAreaAddrDepdntInfo';
export declare class CustSlsAreaAddrDepdntInfoRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, salesOrganization: DeserializedType<T, 'Edm.String'>, distributionChannel: DeserializedType<T, 'Edm.String'>, division: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    getAll(): GetAllRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    create(entity: CustSlsAreaAddrDepdntInfo<T>): CreateRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    update(entity: CustSlsAreaAddrDepdntInfo<T>): UpdateRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    delete(customer: string, salesOrganization: string, distributionChannel: string, division: string, addressId: string): DeleteRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
    delete(entity: CustSlsAreaAddrDepdntInfo<T>): DeleteRequestBuilder<CustSlsAreaAddrDepdntInfo<T>, T>;
}
