import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderRelatedObject } from './SalesOrderRelatedObject';
export declare class SalesOrderRelatedObjectRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderRelatedObject<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, sdDocRelatedObjectSequenceNmbr: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderRelatedObject<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderRelatedObject<T>, T>;
    create(entity: SalesOrderRelatedObject<T>): CreateRequestBuilder<SalesOrderRelatedObject<T>, T>;
    delete(salesOrder: string, sdDocRelatedObjectSequenceNmbr: string): DeleteRequestBuilder<SalesOrderRelatedObject<T>, T>;
    delete(entity: SalesOrderRelatedObject<T>): DeleteRequestBuilder<SalesOrderRelatedObject<T>, T>;
}
