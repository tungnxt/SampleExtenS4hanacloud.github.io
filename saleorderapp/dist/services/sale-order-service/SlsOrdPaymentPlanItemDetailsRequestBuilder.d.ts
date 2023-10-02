import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SlsOrdPaymentPlanItemDetails } from './SlsOrdPaymentPlanItemDetails';
export declare class SlsOrdPaymentPlanItemDetailsRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, paymentPlanItem: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>;
    getAll(): GetAllRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>;
    create(entity: SlsOrdPaymentPlanItemDetails<T>): CreateRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>;
    update(entity: SlsOrdPaymentPlanItemDetails<T>): UpdateRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>;
    delete(salesOrder: string, paymentPlanItem: string): DeleteRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>;
    delete(entity: SlsOrdPaymentPlanItemDetails<T>): DeleteRequestBuilder<SlsOrdPaymentPlanItemDetails<T>, T>;
}
