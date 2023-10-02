"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSalesPartnerFuncRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustSalesPartnerFunc_1 = require("./CustSalesPartnerFunc");
class CustSalesPartnerFuncRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, salesOrganization, distributionChannel, division, partnerCounter, partnerFunction) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            PartnerCounter: partnerCounter,
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
    delete(customerOrEntity, salesOrganization, distributionChannel, division, partnerCounter, partnerFunction) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustSalesPartnerFunc_1.CustSalesPartnerFunc
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                SalesOrganization: salesOrganization,
                DistributionChannel: distributionChannel,
                Division: division,
                PartnerCounter: partnerCounter,
                PartnerFunction: partnerFunction
            });
    }
}
exports.CustSalesPartnerFuncRequestBuilder = CustSalesPartnerFuncRequestBuilder;
//# sourceMappingURL=CustSalesPartnerFuncRequestBuilder.js.map