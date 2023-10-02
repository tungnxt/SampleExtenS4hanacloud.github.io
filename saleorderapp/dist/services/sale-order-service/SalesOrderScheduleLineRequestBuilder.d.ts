import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderScheduleLine } from './SalesOrderScheduleLine';
export declare class SalesOrderScheduleLineRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderScheduleLine<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, scheduleLine: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderScheduleLine<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderScheduleLine<T>, T>;
    create(entity: SalesOrderScheduleLine<T>): CreateRequestBuilder<SalesOrderScheduleLine<T>, T>;
    update(entity: SalesOrderScheduleLine<T>): UpdateRequestBuilder<SalesOrderScheduleLine<T>, T>;
    delete(salesOrder: string, salesOrderItem: string, scheduleLine: string): DeleteRequestBuilder<SalesOrderScheduleLine<T>, T>;
    delete(entity: SalesOrderScheduleLine<T>): DeleteRequestBuilder<SalesOrderScheduleLine<T>, T>;
}
