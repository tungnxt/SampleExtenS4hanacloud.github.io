import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerCompany } from './CustomerCompany';
export declare class CustomerCompanyRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerCompany<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerCompany<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerCompany<T>, T>;
    create(entity: CustomerCompany<T>): CreateRequestBuilder<CustomerCompany<T>, T>;
    update(entity: CustomerCompany<T>): UpdateRequestBuilder<CustomerCompany<T>, T>;
}
