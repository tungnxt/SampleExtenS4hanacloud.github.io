import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerText } from './CustomerText';
export declare class CustomerTextRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerText<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, language: DeserializedType<T, 'Edm.String'>, longTextId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerText<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerText<T>, T>;
    create(entity: CustomerText<T>): CreateRequestBuilder<CustomerText<T>, T>;
    update(entity: CustomerText<T>): UpdateRequestBuilder<CustomerText<T>, T>;
    delete(customer: string, language: string, longTextId: string): DeleteRequestBuilder<CustomerText<T>, T>;
    delete(entity: CustomerText<T>): DeleteRequestBuilder<CustomerText<T>, T>;
}
