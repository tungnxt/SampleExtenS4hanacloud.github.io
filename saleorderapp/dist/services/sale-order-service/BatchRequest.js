"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSaleOrderServicePath = exports.changeset = exports.batch = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const util_1 = require("@sap-cloud-sdk/util");
function batch(first, ...rest) {
    return new odata_v2_1.ODataBatchRequestBuilder(exports.defaultSaleOrderServicePath, (0, util_1.transformVariadicArgumentToArray)(first, rest));
}
exports.batch = batch;
function changeset(first, ...rest) {
    return new odata_v2_1.BatchChangeSet((0, util_1.transformVariadicArgumentToArray)(first, rest));
}
exports.changeset = changeset;
exports.defaultSaleOrderServicePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
//# sourceMappingURL=BatchRequest.js.map