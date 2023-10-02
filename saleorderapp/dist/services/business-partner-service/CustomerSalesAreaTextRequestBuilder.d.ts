import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerSalesAreaText } from './CustomerSalesAreaText';
export declare class CustomerSalesAreaTextRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerSalesAreaText<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, salesOrganization: DeserializedType<T, 'Edm.String'>, distributionChannel: DeserializedType<T, 'Edm.String'>, division: DeserializedType<T, 'Edm.String'>, language: DeserializedType<T, 'Edm.String'>, longTextId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerSalesAreaText<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerSalesAreaText<T>, T>;
    create(entity: CustomerSalesAreaText<T>): CreateRequestBuilder<CustomerSalesAreaText<T>, T>;
    update(entity: CustomerSalesAreaText<T>): UpdateRequestBuilder<CustomerSalesAreaText<T>, T>;
    delete(customer: string, salesOrganization: string, distributionChannel: string, division: string, language: string, longTextId: string): DeleteRequestBuilder<CustomerSalesAreaText<T>, T>;
    delete(entity: CustomerSalesAreaText<T>): DeleteRequestBuilder<CustomerSalesAreaText<T>, T>;
}
