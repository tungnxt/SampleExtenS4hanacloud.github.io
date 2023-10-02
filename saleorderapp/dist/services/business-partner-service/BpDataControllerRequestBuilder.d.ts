import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpDataController } from './BpDataController';
export declare class BpDataControllerRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpDataController<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, dataController: DeserializedType<T, 'Edm.String'>, purposeForPersonalData: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BpDataController<T>, T>;
    getAll(): GetAllRequestBuilder<BpDataController<T>, T>;
    create(entity: BpDataController<T>): CreateRequestBuilder<BpDataController<T>, T>;
    update(entity: BpDataController<T>): UpdateRequestBuilder<BpDataController<T>, T>;
}
