"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartnerAddressRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemPartnerAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, salesOrderItem, partnerFunction, addressRepresentationCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            PartnerFunction: partnerFunction,
            AddressRepresentationCode: addressRepresentationCode
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SalesOrderItemPartnerAddressRequestBuilder = SalesOrderItemPartnerAddressRequestBuilder;
//# sourceMappingURL=SalesOrderItemPartnerAddressRequestBuilder.js.map