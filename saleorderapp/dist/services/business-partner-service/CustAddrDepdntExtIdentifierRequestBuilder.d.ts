import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustAddrDepdntExtIdentifier } from './CustAddrDepdntExtIdentifier';
export declare class CustAddrDepdntExtIdentifierRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustAddrDepdntExtIdentifier<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    getAll(): GetAllRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    create(entity: CustAddrDepdntExtIdentifier<T>): CreateRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    update(entity: CustAddrDepdntExtIdentifier<T>): UpdateRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    delete(customer: string, addressId: string): DeleteRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
    delete(entity: CustAddrDepdntExtIdentifier<T>): DeleteRequestBuilder<CustAddrDepdntExtIdentifier<T>, T>;
}
