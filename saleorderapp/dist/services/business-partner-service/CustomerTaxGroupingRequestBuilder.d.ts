import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerTaxGrouping } from './CustomerTaxGrouping';
export declare class CustomerTaxGroupingRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerTaxGrouping<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, customerTaxGroupingCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerTaxGrouping<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerTaxGrouping<T>, T>;
    update(entity: CustomerTaxGrouping<T>): UpdateRequestBuilder<CustomerTaxGrouping<T>, T>;
    delete(customer: string, customerTaxGroupingCode: string): DeleteRequestBuilder<CustomerTaxGrouping<T>, T>;
    delete(entity: CustomerTaxGrouping<T>): DeleteRequestBuilder<CustomerTaxGrouping<T>, T>;
}
