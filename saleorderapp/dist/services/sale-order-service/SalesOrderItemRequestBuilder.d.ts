import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItem } from './SalesOrderItem';
export declare class SalesOrderItemRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderItem<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderItem<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderItem<T>, T>;
    create(entity: SalesOrderItem<T>): CreateRequestBuilder<SalesOrderItem<T>, T>;
    update(entity: SalesOrderItem<T>): UpdateRequestBuilder<SalesOrderItem<T>, T>;
    delete(salesOrder: string, salesOrderItem: string): DeleteRequestBuilder<SalesOrderItem<T>, T>;
    delete(entity: SalesOrderItem<T>): DeleteRequestBuilder<SalesOrderItem<T>, T>;
}
