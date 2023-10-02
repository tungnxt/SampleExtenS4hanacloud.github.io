import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerSalesAreaTax } from './CustomerSalesAreaTax';
export declare class CustomerSalesAreaTaxRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerSalesAreaTax<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, salesOrganization: DeserializedType<T, 'Edm.String'>, distributionChannel: DeserializedType<T, 'Edm.String'>, division: DeserializedType<T, 'Edm.String'>, departureCountry: DeserializedType<T, 'Edm.String'>, customerTaxCategory: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerSalesAreaTax<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerSalesAreaTax<T>, T>;
    create(entity: CustomerSalesAreaTax<T>): CreateRequestBuilder<CustomerSalesAreaTax<T>, T>;
    update(entity: CustomerSalesAreaTax<T>): UpdateRequestBuilder<CustomerSalesAreaTax<T>, T>;
}
