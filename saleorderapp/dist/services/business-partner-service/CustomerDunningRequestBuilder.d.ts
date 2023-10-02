import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerDunning } from './CustomerDunning';
export declare class CustomerDunningRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerDunning<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>, dunningArea: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerDunning<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerDunning<T>, T>;
    create(entity: CustomerDunning<T>): CreateRequestBuilder<CustomerDunning<T>, T>;
    update(entity: CustomerDunning<T>): UpdateRequestBuilder<CustomerDunning<T>, T>;
    delete(customer: string, companyCode: string, dunningArea: string): DeleteRequestBuilder<CustomerDunning<T>, T>;
    delete(entity: CustomerDunning<T>): DeleteRequestBuilder<CustomerDunning<T>, T>;
}
