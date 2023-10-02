import { Injectable } from '@nestjs/common';
import {
  saleOrderService,
  SalesOrder,
} from '../../services/sale-order-service';

const { salesOrderApi } = saleOrderService();

@Injectable()
export class SaleOrderService {
  async getAllSalesOrder(): Promise<SalesOrder[]> {
    return await salesOrderApi
      .requestBuilder()
      .getAll()
      .select(
        salesOrderApi.schema.SALES_ORDER,
        salesOrderApi.schema.SALES_ORDER_TYPE,
        salesOrderApi.schema.SALES_ORGANIZATION,
        salesOrderApi.schema.SOLD_TO_PARTY,
        salesOrderApi.schema.TOTAL_NET_AMOUNT,
        salesOrderApi.schema.TRANSACTION_CURRENCY,
        salesOrderApi.schema.SALES_ORDER_DATE,
      )
      .top(60)
      .execute({ destinationName: 'extend-s4' });
  }
}
