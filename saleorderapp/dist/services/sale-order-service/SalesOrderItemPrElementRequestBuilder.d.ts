import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItemPrElement } from './SalesOrderItemPrElement';
export declare class SalesOrderItemPrElementRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderItemPrElement<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, pricingProcedureStep: DeserializedType<T, 'Edm.String'>, pricingProcedureCounter: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderItemPrElement<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderItemPrElement<T>, T>;
    create(entity: SalesOrderItemPrElement<T>): CreateRequestBuilder<SalesOrderItemPrElement<T>, T>;
    update(entity: SalesOrderItemPrElement<T>): UpdateRequestBuilder<SalesOrderItemPrElement<T>, T>;
    delete(salesOrder: string, salesOrderItem: string, pricingProcedureStep: string, pricingProcedureCounter: string): DeleteRequestBuilder<SalesOrderItemPrElement<T>, T>;
    delete(entity: SalesOrderItemPrElement<T>): DeleteRequestBuilder<SalesOrderItemPrElement<T>, T>;
}
