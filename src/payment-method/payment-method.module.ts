import { Module } from '@nestjs/common'
import { PaymentMethodService } from './payment-method.service'
import { PaymentMethodController } from './payment-method.controller'
import { PaymentCoreService } from './payment-core.service'

@Module({
  providers: [PaymentMethodService, PaymentCoreService],
  controllers: [PaymentMethodController]
})
export class PaymentMethodModule {}
