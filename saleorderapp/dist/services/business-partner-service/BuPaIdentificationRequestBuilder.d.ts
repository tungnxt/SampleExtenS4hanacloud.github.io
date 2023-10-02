import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BuPaIdentification } from './BuPaIdentification';
export declare class BuPaIdentificationRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BuPaIdentification<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, bpIdentificationType: DeserializedType<T, 'Edm.String'>, bpIdentificationNumber: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BuPaIdentification<T>, T>;
    getAll(): GetAllRequestBuilder<BuPaIdentification<T>, T>;
    create(entity: BuPaIdentification<T>): CreateRequestBuilder<BuPaIdentification<T>, T>;
    update(entity: BuPaIdentification<T>): UpdateRequestBuilder<BuPaIdentification<T>, T>;
    delete(businessPartner: string, bpIdentificationType: string, bpIdentificationNumber: string): DeleteRequestBuilder<BuPaIdentification<T>, T>;
    delete(entity: BuPaIdentification<T>): DeleteRequestBuilder<BuPaIdentification<T>, T>;
}
