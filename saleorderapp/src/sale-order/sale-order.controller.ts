import { Controller, Get, HttpException } from '@nestjs/common';
import { SalesOrder } from '../../services/sale-order-service';
import { SaleOrderService } from './sale-order.service';

@Controller('sale-order')
export class SaleOrderController {
  constructor(private saleOrderService: SaleOrderService) {}

  @Get()
  async getSalesOrder(): Promise<SalesOrder[]> {
    return await this.saleOrderService.getAllSalesOrder().catch((error) => {
      throw new HttpException(
        `Failed to get sale order - ${error.message}`,
        500,
      );
    });
  }
}
