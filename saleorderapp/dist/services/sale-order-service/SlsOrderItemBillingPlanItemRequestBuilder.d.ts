import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SlsOrderItemBillingPlanItem } from './SlsOrderItemBillingPlanItem';
export declare class SlsOrderItemBillingPlanItemRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SlsOrderItemBillingPlanItem<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, billingPlan: DeserializedType<T, 'Edm.String'>, billingPlanItem: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>;
    getAll(): GetAllRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>;
    create(entity: SlsOrderItemBillingPlanItem<T>): CreateRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>;
    update(entity: SlsOrderItemBillingPlanItem<T>): UpdateRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>;
    delete(salesOrder: string, salesOrderItem: string, billingPlan: string, billingPlanItem: string): DeleteRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>;
    delete(entity: SlsOrderItemBillingPlanItem<T>): DeleteRequestBuilder<SlsOrderItemBillingPlanItem<T>, T>;
}
