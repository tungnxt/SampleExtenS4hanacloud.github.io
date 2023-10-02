"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerPaymentCardRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessPartnerPaymentCard_1 = require("./BusinessPartnerPaymentCard");
class BusinessPartnerPaymentCardRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, paymentCardId, paymentCardType, cardNumber) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            PaymentCardID: paymentCardId,
            PaymentCardType: paymentCardType,
            CardNumber: cardNumber
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
    delete(businessPartnerOrEntity, paymentCardId, paymentCardType, cardNumber) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                PaymentCardID: paymentCardId,
                PaymentCardType: paymentCardType,
                CardNumber: cardNumber
            });
    }
}
exports.BusinessPartnerPaymentCardRequestBuilder = BusinessPartnerPaymentCardRequestBuilder;
//# sourceMappingURL=BusinessPartnerPaymentCardRequestBuilder.js.map