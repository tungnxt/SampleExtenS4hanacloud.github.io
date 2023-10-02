"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleOrderService = void 0;
const common_1 = require("@nestjs/common");
const sale_order_service_1 = require("../../services/sale-order-service");
const { salesOrderApi } = (0, sale_order_service_1.saleOrderService)();
let SaleOrderService = class SaleOrderService {
    async getAllSalesOrder() {
        return await salesOrderApi
            .requestBuilder()
            .getAll()
            .select(salesOrderApi.schema.SALES_ORDER, salesOrderApi.schema.SALES_ORDER_TYPE, salesOrderApi.schema.SALES_ORGANIZATION, salesOrderApi.schema.SOLD_TO_PARTY, salesOrderApi.schema.TOTAL_NET_AMOUNT, salesOrderApi.schema.TRANSACTION_CURRENCY, salesOrderApi.schema.SALES_ORDER_DATE)
            .top(60)
            .execute({
                destinationName: 'extend-s4'
        });
    }
};
exports.SaleOrderService = SaleOrderService;
exports.SaleOrderService = SaleOrderService = __decorate([
    (0, common_1.Injectable)()
], SaleOrderService);
//# sourceMappingURL=sale-order.service.js.map