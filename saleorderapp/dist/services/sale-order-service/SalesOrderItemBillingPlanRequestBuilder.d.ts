import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItemBillingPlan } from './SalesOrderItemBillingPlan';
export declare class SalesOrderItemBillingPlanRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderItemBillingPlan<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, billingPlan: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderItemBillingPlan<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderItemBillingPlan<T>, T>;
    update(entity: SalesOrderItemBillingPlan<T>): UpdateRequestBuilder<SalesOrderItemBillingPlan<T>, T>;
}
