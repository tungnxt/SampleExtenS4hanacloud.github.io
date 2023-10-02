import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderBillingPlanItem } from './SalesOrderBillingPlanItem';
export declare class SalesOrderBillingPlanItemRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderBillingPlanItem<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, billingPlan: DeserializedType<T, 'Edm.String'>, billingPlanItem: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderBillingPlanItem<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderBillingPlanItem<T>, T>;
    create(entity: SalesOrderBillingPlanItem<T>): CreateRequestBuilder<SalesOrderBillingPlanItem<T>, T>;
    update(entity: SalesOrderBillingPlanItem<T>): UpdateRequestBuilder<SalesOrderBillingPlanItem<T>, T>;
    delete(salesOrder: string, billingPlan: string, billingPlanItem: string): DeleteRequestBuilder<SalesOrderBillingPlanItem<T>, T>;
    delete(entity: SalesOrderBillingPlanItem<T>): DeleteRequestBuilder<SalesOrderBillingPlanItem<T>, T>;
}
