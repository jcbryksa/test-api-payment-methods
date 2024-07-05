import { Injectable } from '@nestjs/common'
import { PaymentMethod } from './payment-method.entity'
import { PaymentCoreService } from './payment-core.service'

@Injectable()
export class PaymentMethodService {
  constructor(private readonly paymentCoreService: PaymentCoreService) {}

  public async getPaymentMethods(
    userId: number,
    merchantId: number,
  ): Promise<PaymentMethod[]> {
    const paymentMethods = await this.paymentCoreService.fetchPaymentMethods(userId, merchantId)
    return paymentMethods.sort((pm1, pm2) => {
      const methods = {
        CARD: 0,
        ACCOUNT: 1,
      }
      // Promocion (desc)
      if (pm1.promocion < pm2.promocion) return 1
      else if (pm1.promocion > pm2.promocion) return -1
      // Cuotas (desc)
      else if (pm1.cuotas < pm2.cuotas) return 1
      else if (pm1.cuotas > pm2.cuotas) return -1
      // Metodos: 1° CARD, 2° ACCOUNT
      else if (
        methods[pm1.payment_method.type] > methods[pm2.payment_method.type]
      )
        return 1
      else if (
        methods[pm1.payment_method.type] < methods[pm2.payment_method.type]
      )
        return -1
      return 0
    })
  }
}
