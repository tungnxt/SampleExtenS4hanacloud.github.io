import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SupplierWithHoldingTax } from './SupplierWithHoldingTax';
export declare class SupplierWithHoldingTaxRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SupplierWithHoldingTax<T>, T> {
    getByKey(supplier: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>, withholdingTaxType: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SupplierWithHoldingTax<T>, T>;
    getAll(): GetAllRequestBuilder<SupplierWithHoldingTax<T>, T>;
    create(entity: SupplierWithHoldingTax<T>): CreateRequestBuilder<SupplierWithHoldingTax<T>, T>;
    update(entity: SupplierWithHoldingTax<T>): UpdateRequestBuilder<SupplierWithHoldingTax<T>, T>;
    delete(supplier: string, companyCode: string, withholdingTaxType: string): DeleteRequestBuilder<SupplierWithHoldingTax<T>, T>;
    delete(entity: SupplierWithHoldingTax<T>): DeleteRequestBuilder<SupplierWithHoldingTax<T>, T>;
}
