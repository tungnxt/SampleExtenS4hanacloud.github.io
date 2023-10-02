import { SalesOrder } from '../../services/sale-order-service';
import { SaleOrderService } from './sale-order.service';
export declare class SaleOrderController {
    private saleOrderService;
    constructor(saleOrderService: SaleOrderService);
    getSalesOrder(): Promise<SalesOrder[]>;
}
