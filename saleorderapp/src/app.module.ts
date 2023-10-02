import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaleOrderController } from './sale-order/sale-order.controller';
import { BusinessPartnerController } from './business-partner/business-partner.controller';
import { BusinessPartnerService } from './business-partner/business-partner.service';
import { SaleOrderService } from './sale-order/sale-order.service';

@Module({
  imports: [],
  controllers: [AppController, SaleOrderController, BusinessPartnerController],
  providers: [AppService, BusinessPartnerService, SaleOrderService],
})
export class AppModule {}
