export enum PaymentType {
  CARD = 'CARD',
  ACCOUNT = 'ACCOUNT',
}
export class PaymentMethod {
  payment_method: {
    id: number
    type: PaymentType
  }
  cuotas: number
  promocion: number
}
