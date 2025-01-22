import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  getLoan = (value: number): void => {
    if(!this.validateStatus()) return
    this.incrementDebt(value)
    this.deposit(value)
    console.log('Você concluiu um empréstimo - Dívida de x1.1')
    console.log("---------------------------");
  }
}