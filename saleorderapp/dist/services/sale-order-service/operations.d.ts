import { DeSerializers, DefaultDeSerializers, OperationRequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { FunctionResult } from './FunctionResult';
export interface RejectApprovalRequestParameters<DeSerializersT extends DeSerializers> {
    salesOrder?: string | null;
}
export declare function rejectApprovalRequest<DeSerializersT extends DeSerializers = DefaultDeSerializers>(parameters: RejectApprovalRequestParameters<DeSerializersT>, deSerializers?: DeSerializersT): OperationRequestBuilder<DeSerializersT, RejectApprovalRequestParameters<DeSerializersT>, FunctionResult>;
export interface ReleaseApprovalRequestParameters<DeSerializersT extends DeSerializers> {
    salesOrder?: string | null;
}
export declare function releaseApprovalRequest<DeSerializersT extends DeSerializers = DefaultDeSerializers>(parameters: ReleaseApprovalRequestParameters<DeSerializersT>, deSerializers?: DeSerializersT): OperationRequestBuilder<DeSerializersT, ReleaseApprovalRequestParameters<DeSerializersT>, FunctionResult>;
export declare const operations: {
    rejectApprovalRequest: typeof rejectApprovalRequest;
    releaseApprovalRequest: typeof releaseApprovalRequest;
};
