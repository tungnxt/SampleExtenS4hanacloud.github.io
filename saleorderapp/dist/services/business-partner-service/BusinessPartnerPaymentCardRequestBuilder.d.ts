import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BusinessPartnerPaymentCard } from './BusinessPartnerPaymentCard';
export declare class BusinessPartnerPaymentCardRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BusinessPartnerPaymentCard<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, paymentCardId: DeserializedType<T, 'Edm.String'>, paymentCardType: DeserializedType<T, 'Edm.String'>, cardNumber: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BusinessPartnerPaymentCard<T>, T>;
    getAll(): GetAllRequestBuilder<BusinessPartnerPaymentCard<T>, T>;
    create(entity: BusinessPartnerPaymentCard<T>): CreateRequestBuilder<BusinessPartnerPaymentCard<T>, T>;
    update(entity: BusinessPartnerPaymentCard<T>): UpdateRequestBuilder<BusinessPartnerPaymentCard<T>, T>;
    delete(businessPartner: string, paymentCardId: string, paymentCardType: string, cardNumber: string): DeleteRequestBuilder<BusinessPartnerPaymentCard<T>, T>;
    delete(entity: BusinessPartnerPaymentCard<T>): DeleteRequestBuilder<BusinessPartnerPaymentCard<T>, T>;
}
