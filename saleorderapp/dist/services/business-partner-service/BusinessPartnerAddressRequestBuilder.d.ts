import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BusinessPartnerAddress } from './BusinessPartnerAddress';
export declare class BusinessPartnerAddressRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BusinessPartnerAddress<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BusinessPartnerAddress<T>, T>;
    getAll(): GetAllRequestBuilder<BusinessPartnerAddress<T>, T>;
    create(entity: BusinessPartnerAddress<T>): CreateRequestBuilder<BusinessPartnerAddress<T>, T>;
    update(entity: BusinessPartnerAddress<T>): UpdateRequestBuilder<BusinessPartnerAddress<T>, T>;
    delete(businessPartner: string, addressId: string): DeleteRequestBuilder<BusinessPartnerAddress<T>, T>;
    delete(entity: BusinessPartnerAddress<T>): DeleteRequestBuilder<BusinessPartnerAddress<T>, T>;
}
