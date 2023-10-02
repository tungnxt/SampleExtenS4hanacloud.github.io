import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustAddrDepdntInformation } from './CustAddrDepdntInformation';
export declare class CustAddrDepdntInformationRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustAddrDepdntInformation<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustAddrDepdntInformation<T>, T>;
    getAll(): GetAllRequestBuilder<CustAddrDepdntInformation<T>, T>;
    create(entity: CustAddrDepdntInformation<T>): CreateRequestBuilder<CustAddrDepdntInformation<T>, T>;
    update(entity: CustAddrDepdntInformation<T>): UpdateRequestBuilder<CustAddrDepdntInformation<T>, T>;
    delete(customer: string, addressId: string): DeleteRequestBuilder<CustAddrDepdntInformation<T>, T>;
    delete(entity: CustAddrDepdntInformation<T>): DeleteRequestBuilder<CustAddrDepdntInformation<T>, T>;
}
