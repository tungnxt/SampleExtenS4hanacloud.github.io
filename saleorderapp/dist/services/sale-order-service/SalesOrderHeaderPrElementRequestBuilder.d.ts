import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderHeaderPrElement } from './SalesOrderHeaderPrElement';
export declare class SalesOrderHeaderPrElementRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderHeaderPrElement<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, pricingProcedureStep: DeserializedType<T, 'Edm.String'>, pricingProcedureCounter: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
    create(entity: SalesOrderHeaderPrElement<T>): CreateRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
    update(entity: SalesOrderHeaderPrElement<T>): UpdateRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
    delete(salesOrder: string, pricingProcedureStep: string, pricingProcedureCounter: string): DeleteRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
    delete(entity: SalesOrderHeaderPrElement<T>): DeleteRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
}
