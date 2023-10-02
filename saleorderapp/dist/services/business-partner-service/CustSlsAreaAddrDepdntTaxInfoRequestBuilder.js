"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntTaxInfoRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustSlsAreaAddrDepdntTaxInfo_1 = require("./CustSlsAreaAddrDepdntTaxInfo");
class CustSlsAreaAddrDepdntTaxInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, salesOrganization, distributionChannel, division, addressId, departureCountry, customerTaxCategory) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            AddressID: addressId,
            DepartureCountry: departureCountry,
            CustomerTaxCategory: customerTaxCategory
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
    delete(customerOrEntity, salesOrganization, distributionChannel, division, addressId, departureCountry, customerTaxCategory) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                SalesOrganization: salesOrganization,
                DistributionChannel: distributionChannel,
                Division: division,
                AddressID: addressId,
                DepartureCountry: departureCountry,
                CustomerTaxCategory: customerTaxCategory
            });
    }
}
exports.CustSlsAreaAddrDepdntTaxInfoRequestBuilder = CustSlsAreaAddrDepdntTaxInfoRequestBuilder;
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfoRequestBuilder.js.map