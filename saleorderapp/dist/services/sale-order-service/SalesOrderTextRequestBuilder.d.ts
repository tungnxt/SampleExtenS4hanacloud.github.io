import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderText } from './SalesOrderText';
export declare class SalesOrderTextRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderText<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, language: DeserializedType<T, 'Edm.String'>, longTextId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderText<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderText<T>, T>;
    create(entity: SalesOrderText<T>): CreateRequestBuilder<SalesOrderText<T>, T>;
    update(entity: SalesOrderText<T>): UpdateRequestBuilder<SalesOrderText<T>, T>;
    delete(salesOrder: string, language: string, longTextId: string): DeleteRequestBuilder<SalesOrderText<T>, T>;
    delete(entity: SalesOrderText<T>): DeleteRequestBuilder<SalesOrderText<T>, T>;
}
