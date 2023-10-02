import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItemRelatedObject } from './SalesOrderItemRelatedObject';
export declare class SalesOrderItemRelatedObjectRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderItemRelatedObject<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, sdDocRelatedObjectSequenceNmbr: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderItemRelatedObject<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderItemRelatedObject<T>, T>;
    create(entity: SalesOrderItemRelatedObject<T>): CreateRequestBuilder<SalesOrderItemRelatedObject<T>, T>;
    delete(salesOrder: string, salesOrderItem: string, sdDocRelatedObjectSequenceNmbr: string): DeleteRequestBuilder<SalesOrderItemRelatedObject<T>, T>;
    delete(entity: SalesOrderItemRelatedObject<T>): DeleteRequestBuilder<SalesOrderItemRelatedObject<T>, T>;
}
