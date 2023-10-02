import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpContactToAddress } from './BpContactToAddress';
export declare class BpContactToAddressRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpContactToAddress<T>, T> {
    getByKey(relationshipNumber: DeserializedType<T, 'Edm.String'>, businessPartnerCompany: DeserializedType<T, 'Edm.String'>, businessPartnerPerson: DeserializedType<T, 'Edm.String'>, validityEndDate: DeserializedType<T, 'Edm.DateTime'>, addressId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BpContactToAddress<T>, T>;
    getAll(): GetAllRequestBuilder<BpContactToAddress<T>, T>;
    create(entity: BpContactToAddress<T>): CreateRequestBuilder<BpContactToAddress<T>, T>;
    update(entity: BpContactToAddress<T>): UpdateRequestBuilder<BpContactToAddress<T>, T>;
}
