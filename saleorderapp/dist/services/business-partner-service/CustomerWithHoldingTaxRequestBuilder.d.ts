import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerWithHoldingTax } from './CustomerWithHoldingTax';
export declare class CustomerWithHoldingTaxRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerWithHoldingTax<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>, withholdingTaxType: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerWithHoldingTax<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerWithHoldingTax<T>, T>;
    create(entity: CustomerWithHoldingTax<T>): CreateRequestBuilder<CustomerWithHoldingTax<T>, T>;
    update(entity: CustomerWithHoldingTax<T>): UpdateRequestBuilder<CustomerWithHoldingTax<T>, T>;
    delete(customer: string, companyCode: string, withholdingTaxType: string): DeleteRequestBuilder<CustomerWithHoldingTax<T>, T>;
    delete(entity: CustomerWithHoldingTax<T>): DeleteRequestBuilder<CustomerWithHoldingTax<T>, T>;
}
