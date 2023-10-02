import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerSalesArea } from './CustomerSalesArea';
export declare class CustomerSalesAreaRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerSalesArea<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, salesOrganization: DeserializedType<T, 'Edm.String'>, distributionChannel: DeserializedType<T, 'Edm.String'>, division: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerSalesArea<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerSalesArea<T>, T>;
    create(entity: CustomerSalesArea<T>): CreateRequestBuilder<CustomerSalesArea<T>, T>;
    update(entity: CustomerSalesArea<T>): UpdateRequestBuilder<CustomerSalesArea<T>, T>;
}
