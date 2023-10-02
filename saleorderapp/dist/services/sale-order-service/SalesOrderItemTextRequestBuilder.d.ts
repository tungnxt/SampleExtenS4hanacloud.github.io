import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItemText } from './SalesOrderItemText';
export declare class SalesOrderItemTextRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderItemText<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, language: DeserializedType<T, 'Edm.String'>, longTextId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderItemText<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderItemText<T>, T>;
    create(entity: SalesOrderItemText<T>): CreateRequestBuilder<SalesOrderItemText<T>, T>;
    update(entity: SalesOrderItemText<T>): UpdateRequestBuilder<SalesOrderItemText<T>, T>;
    delete(salesOrder: string, salesOrderItem: string, language: string, longTextId: string): DeleteRequestBuilder<SalesOrderItemText<T>, T>;
    delete(entity: SalesOrderItemText<T>): DeleteRequestBuilder<SalesOrderItemText<T>, T>;
}
