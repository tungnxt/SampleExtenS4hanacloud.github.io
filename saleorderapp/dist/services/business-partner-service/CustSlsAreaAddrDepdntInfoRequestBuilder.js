"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntInfoRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustSlsAreaAddrDepdntInfo_1 = require("./CustSlsAreaAddrDepdntInfo");
class CustSlsAreaAddrDepdntInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, salesOrganization, distributionChannel, division, addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            AddressID: addressId
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
    delete(customerOrEntity, salesOrganization, distributionChannel, division, addressId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                SalesOrganization: salesOrganization,
                DistributionChannel: distributionChannel,
                Division: division,
                AddressID: addressId
            });
    }
}
exports.CustSlsAreaAddrDepdntInfoRequestBuilder = CustSlsAreaAddrDepdntInfoRequestBuilder;
//# sourceMappingURL=CustSlsAreaAddrDepdntInfoRequestBuilder.js.map