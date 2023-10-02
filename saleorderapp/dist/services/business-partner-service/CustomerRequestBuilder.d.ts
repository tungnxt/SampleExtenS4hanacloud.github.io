import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Customer } from './Customer';
export declare class CustomerRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Customer<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<Customer<T>, T>;
    getAll(): GetAllRequestBuilder<Customer<T>, T>;
    update(entity: Customer<T>): UpdateRequestBuilder<Customer<T>, T>;
}
