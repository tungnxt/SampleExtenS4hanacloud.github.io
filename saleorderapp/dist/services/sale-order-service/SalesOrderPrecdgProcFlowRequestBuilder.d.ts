import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderPrecdgProcFlow } from './SalesOrderPrecdgProcFlow';
export declare class SalesOrderPrecdgProcFlowRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderPrecdgProcFlow<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>): GetByKeyRequestBuilder<SalesOrderPrecdgProcFlow<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderPrecdgProcFlow<T>, T>;
}
