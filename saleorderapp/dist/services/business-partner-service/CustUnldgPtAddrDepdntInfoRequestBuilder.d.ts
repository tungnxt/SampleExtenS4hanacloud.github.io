import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustUnldgPtAddrDepdntInfo } from './CustUnldgPtAddrDepdntInfo';
export declare class CustUnldgPtAddrDepdntInfoRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>, unloadingPointName: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
    getAll(): GetAllRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
    create(entity: CustUnldgPtAddrDepdntInfo<T>): CreateRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
    update(entity: CustUnldgPtAddrDepdntInfo<T>): UpdateRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
    delete(customer: string, addressId: string, unloadingPointName: string): DeleteRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
    delete(entity: CustUnldgPtAddrDepdntInfo<T>): DeleteRequestBuilder<CustUnldgPtAddrDepdntInfo<T>, T>;
}
