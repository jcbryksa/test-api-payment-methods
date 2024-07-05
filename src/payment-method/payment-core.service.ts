import { Injectable } from '@nestjs/common'
import { PaymentMethod, PaymentType } from './payment-method.entity'
import { paymentMethodsCase1 } from '../test/payment-method/mocks/payment-methods-case-1'
import { paymentMethodsCase2 } from '../test/payment-method/mocks/payment-methods-case-2'
import { paymentMethodsCase3 } from '../test/payment-method/mocks/payment-methods-case-3'

@Injectable()
export class PaymentCoreService {
  public async fetchPaymentMethods(
    userId: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    merchantId: number,
  ): Promise<PaymentMethod[]> {
    const dummyValues = [paymentMethodsCase1, paymentMethodsCase2, paymentMethodsCase3]
    return dummyValues[userId - 1] as PaymentMethod[]
  }
}
