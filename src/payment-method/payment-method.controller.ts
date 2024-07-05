import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common'
import { PaymentMethod } from './payment-method.entity'
import { PaymentMethodService } from './payment-method.service'

@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Get()
  public async getPaymentMethods(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('merchantId', ParseIntPipe) merchantId: number,
  ): Promise<PaymentMethod[]> {
    if (userId < 1 || userId > 3) return [] // for dummy test
    return this.paymentMethodService.getPaymentMethods(userId, merchantId)
  }
}
