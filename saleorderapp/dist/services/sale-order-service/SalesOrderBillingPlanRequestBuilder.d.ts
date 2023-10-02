import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderBillingPlan } from './SalesOrderBillingPlan';
export declare class SalesOrderBillingPlanRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderBillingPlan<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, billingPlan: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderBillingPlan<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderBillingPlan<T>, T>;
    update(entity: SalesOrderBillingPlan<T>): UpdateRequestBuilder<SalesOrderBillingPlan<T>, T>;
}
