import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BusinessPartner } from './BusinessPartner';
export declare class BusinessPartnerRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BusinessPartner<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BusinessPartner<T>, T>;
    getAll(): GetAllRequestBuilder<BusinessPartner<T>, T>;
    create(entity: BusinessPartner<T>): CreateRequestBuilder<BusinessPartner<T>, T>;
    update(entity: BusinessPartner<T>): UpdateRequestBuilder<BusinessPartner<T>, T>;
}
