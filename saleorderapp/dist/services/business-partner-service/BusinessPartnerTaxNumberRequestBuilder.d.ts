import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BusinessPartnerTaxNumber } from './BusinessPartnerTaxNumber';
export declare class BusinessPartnerTaxNumberRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BusinessPartnerTaxNumber<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, bpTaxType: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BusinessPartnerTaxNumber<T>, T>;
    getAll(): GetAllRequestBuilder<BusinessPartnerTaxNumber<T>, T>;
    create(entity: BusinessPartnerTaxNumber<T>): CreateRequestBuilder<BusinessPartnerTaxNumber<T>, T>;
    update(entity: BusinessPartnerTaxNumber<T>): UpdateRequestBuilder<BusinessPartnerTaxNumber<T>, T>;
    delete(businessPartner: string, bpTaxType: string): DeleteRequestBuilder<BusinessPartnerTaxNumber<T>, T>;
    delete(entity: BusinessPartnerTaxNumber<T>): DeleteRequestBuilder<BusinessPartnerTaxNumber<T>, T>;
}
