import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderPrecdgProcFlowApi } from './SalesOrderPrecdgProcFlowApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
export declare class SalesOrderPrecdgProcFlow<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderPrecdgProcFlowType<T> {
    readonly _entityApi: SalesOrderPrecdgProcFlowApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
    precedingDocument?: DeserializedType<T, 'Edm.String'> | null;
    precedingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
    processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
    overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    creationTime?: DeserializedType<T, 'Edm.Time'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    toSalesOrder?: SalesOrder<T> | null;
    constructor(_entityApi: SalesOrderPrecdgProcFlowApi<T>);
}
export interface SalesOrderPrecdgProcFlowType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
    precedingDocument?: DeserializedType<T, 'Edm.String'> | null;
    precedingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
    processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
    overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    creationTime?: DeserializedType<T, 'Edm.Time'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    toSalesOrder?: SalesOrderType<T> | null;
}
