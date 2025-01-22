import { PeopleAccount } from './PeopleAccount'

export class VipPeopleAccount extends PeopleAccount {
  vipDeposit = (value: number): void => {
    this.deposit(value * 1.1)
  }
}