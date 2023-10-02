import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpContactToFuncAndDept } from './BpContactToFuncAndDept';
export declare class BpContactToFuncAndDeptRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpContactToFuncAndDept<T>, T> {
    getByKey(relationshipNumber: DeserializedType<T, 'Edm.String'>, businessPartnerCompany: DeserializedType<T, 'Edm.String'>, businessPartnerPerson: DeserializedType<T, 'Edm.String'>, validityEndDate: DeserializedType<T, 'Edm.DateTime'>): GetByKeyRequestBuilder<BpContactToFuncAndDept<T>, T>;
    getAll(): GetAllRequestBuilder<BpContactToFuncAndDept<T>, T>;
    update(entity: BpContactToFuncAndDept<T>): UpdateRequestBuilder<BpContactToFuncAndDept<T>, T>;
}
