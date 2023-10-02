import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpFiscalYearInformation } from './BpFiscalYearInformation';
export declare class BpFiscalYearInformationRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpFiscalYearInformation<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, businessPartnerFiscalYear: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BpFiscalYearInformation<T>, T>;
    getAll(): GetAllRequestBuilder<BpFiscalYearInformation<T>, T>;
    create(entity: BpFiscalYearInformation<T>): CreateRequestBuilder<BpFiscalYearInformation<T>, T>;
    update(entity: BpFiscalYearInformation<T>): UpdateRequestBuilder<BpFiscalYearInformation<T>, T>;
    delete(businessPartner: string, businessPartnerFiscalYear: string): DeleteRequestBuilder<BpFiscalYearInformation<T>, T>;
    delete(entity: BpFiscalYearInformation<T>): DeleteRequestBuilder<BpFiscalYearInformation<T>, T>;
}
