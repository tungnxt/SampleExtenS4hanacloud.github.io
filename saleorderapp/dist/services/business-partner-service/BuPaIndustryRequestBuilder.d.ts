import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BuPaIndustry } from './BuPaIndustry';
export declare class BuPaIndustryRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BuPaIndustry<T>, T> {
    getByKey(industrySector: DeserializedType<T, 'Edm.String'>, industrySystemType: DeserializedType<T, 'Edm.String'>, businessPartner: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BuPaIndustry<T>, T>;
    getAll(): GetAllRequestBuilder<BuPaIndustry<T>, T>;
    create(entity: BuPaIndustry<T>): CreateRequestBuilder<BuPaIndustry<T>, T>;
    update(entity: BuPaIndustry<T>): UpdateRequestBuilder<BuPaIndustry<T>, T>;
    delete(industrySector: string, industrySystemType: string, businessPartner: string): DeleteRequestBuilder<BuPaIndustry<T>, T>;
    delete(entity: BuPaIndustry<T>): DeleteRequestBuilder<BuPaIndustry<T>, T>;
}
