import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpFinancialServicesReporting } from './BpFinancialServicesReporting';
export declare class BpFinancialServicesReportingRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpFinancialServicesReporting<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BpFinancialServicesReporting<T>, T>;
    getAll(): GetAllRequestBuilder<BpFinancialServicesReporting<T>, T>;
    create(entity: BpFinancialServicesReporting<T>): CreateRequestBuilder<BpFinancialServicesReporting<T>, T>;
    update(entity: BpFinancialServicesReporting<T>): UpdateRequestBuilder<BpFinancialServicesReporting<T>, T>;
}
