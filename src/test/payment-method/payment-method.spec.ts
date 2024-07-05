import { PaymentMethodService } from '../../payment-method/payment-method.service'
import { PaymentCoreService } from '../../payment-method/payment-core.service'
import { expectedCase1 } from './expected/case-1'
import { expectedCase2 } from './expected/case-2'
import { expectedCase3 } from './expected/case-3'
import { paymentMethodsCase1 } from './mocks/payment-methods-case-1'
import { paymentMethodsCase2 } from './mocks/payment-methods-case-2'
import { paymentMethodsCase3 } from './mocks/payment-methods-case-3'

const paymentCoreService: PaymentCoreService = jest.createMockFromModule(
  '../../payment-method/payment-core.service',
)

describe('PaymentMethodService', () => {
  const paymentMethodService = new PaymentMethodService(
    paymentCoreService,
  )

  it('should be defined', () => {
    expect(paymentMethodService).toBeDefined()
  })

  describe('getPaymentMethods()', () => {
    it('should return payment methods for case 1', async () => {
      paymentCoreService.fetchPaymentMethods = jest.fn().mockResolvedValue(paymentMethodsCase1)
      expect(await paymentMethodService.getPaymentMethods(1, 1)).toEqual(expectedCase1)
    })
    it('should return payment methods for case 2', async () => {
      paymentCoreService.fetchPaymentMethods = jest.fn().mockResolvedValue(paymentMethodsCase2)
      const pay = await paymentMethodService.getPaymentMethods(1, 1)
      expect(pay).toEqual(expectedCase2)
    })
    it('should return payment methods for case 3', async () => {
      paymentCoreService.fetchPaymentMethods = jest.fn().mockResolvedValue(paymentMethodsCase3)
      const pay = await paymentMethodService.getPaymentMethods(1, 1)
      expect(pay).toEqual(expectedCase3)
    })
  })
})
