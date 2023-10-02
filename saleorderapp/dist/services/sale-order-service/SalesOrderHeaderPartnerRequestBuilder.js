"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPartnerRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderHeaderPartner_1 = require("./SalesOrderHeaderPartner");
class SalesOrderHeaderPartnerRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, partnerFunction) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            PartnerFunction: partnerFunction
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, partnerFunction) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderHeaderPartner_1.SalesOrderHeaderPartner
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                PartnerFunction: partnerFunction
            });
    }
}
exports.SalesOrderHeaderPartnerRequestBuilder = SalesOrderHeaderPartnerRequestBuilder;
//# sourceMappingURL=SalesOrderHeaderPartnerRequestBuilder.js.map