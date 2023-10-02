import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrder } from './SalesOrder';
export declare class SalesOrderRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrder<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrder<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrder<T>, T>;
    create(entity: SalesOrder<T>): CreateRequestBuilder<SalesOrder<T>, T>;
    update(entity: SalesOrder<T>): UpdateRequestBuilder<SalesOrder<T>, T>;
    delete(salesOrder: string): DeleteRequestBuilder<SalesOrder<T>, T>;
    delete(entity: SalesOrder<T>): DeleteRequestBuilder<SalesOrder<T>, T>;
}
