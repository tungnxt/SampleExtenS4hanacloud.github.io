import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerCompanyText } from './CustomerCompanyText';
export declare class CustomerCompanyTextRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerCompanyText<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>, language: DeserializedType<T, 'Edm.String'>, longTextId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerCompanyText<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerCompanyText<T>, T>;
    create(entity: CustomerCompanyText<T>): CreateRequestBuilder<CustomerCompanyText<T>, T>;
    update(entity: CustomerCompanyText<T>): UpdateRequestBuilder<CustomerCompanyText<T>, T>;
    delete(customer: string, companyCode: string, language: string, longTextId: string): DeleteRequestBuilder<CustomerCompanyText<T>, T>;
    delete(entity: CustomerCompanyText<T>): DeleteRequestBuilder<CustomerCompanyText<T>, T>;
}
