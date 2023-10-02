"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = exports.releaseApprovalRequest = exports.rejectApprovalRequest = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const FunctionResult_1 = require("./FunctionResult");
function rejectApprovalRequest(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        salesOrder: new odata_v2_1.OperationParameter('SalesOrder', 'Edm.String', parameters.salesOrder)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_SALES_ORDER_SRV', 'rejectApprovalRequest', data => (0, odata_v2_1.transformReturnValueForComplexType)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, FunctionResult_1.FunctionResult)), params, deSerializers);
}
exports.rejectApprovalRequest = rejectApprovalRequest;
function releaseApprovalRequest(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        salesOrder: new odata_v2_1.OperationParameter('SalesOrder', 'Edm.String', parameters.salesOrder)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/API_SALES_ORDER_SRV', 'releaseApprovalRequest', data => (0, odata_v2_1.transformReturnValueForComplexType)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, FunctionResult_1.FunctionResult)), params, deSerializers);
}
exports.releaseApprovalRequest = releaseApprovalRequest;
exports.operations = {
    rejectApprovalRequest,
    releaseApprovalRequest
};
//# sourceMappingURL=operations.js.map