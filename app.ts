import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipPeopleAccount } from './class/VipPeopleAccount'

PeopleAccount
console.log('PeopleAccount')
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath')
console.log(peopleAccount)

console.log()

console.log(`PeopleAccount - ${peopleAccount.getBalance()}`)

console.log()

console.log('PeopleAccount - deposit')
peopleAccount.deposit(100)

console.log()

console.log('PeopleAccount - withdraw')
peopleAccount.withdraw(500)

console.log()

console.log('PeopleAccount - withdraw')
peopleAccount.withdraw(50)

console.log()

console.log('PeopleAccount - showDocument')
peopleAccount.showDocumentId()

for (let i = 0; i < 5; i++) console.log()

console.log('CompanyAccount')

const companyAccount: CompanyAccount = new CompanyAccount('DIO')
console.log(companyAccount)

console.log()

console.log('CompanyAccount - getLoan | Status: true')

companyAccount.getLoan(1000)

console.log()

console.log('CompanyAccount - getLoan | Status: false')

companyAccount.getLoan(1000)
console.log('Status: ', companyAccount.validateStatus())
console.log('Debt: ', companyAccount.getDebt())
console.log('Saldo: ', companyAccount.getBalance())

console.log()

console.log('CompanyAccount - payDebt: 1000')
companyAccount.payDebt(1000)
console.log('Debt: ', companyAccount.getDebt())
console.log('Saldo: ', companyAccount.getBalance())
console.log()

console.log('CompanyAccount - payDebt: 200')
companyAccount.payDebt(200)
console.log('Debt: ', companyAccount.getDebt())
console.log('Saldo: ', companyAccount.getBalance())
console.log()

console.log('CompanyAccount - getBalance')
console.log(companyAccount.getBalance())
console.log()

for (let i = 0; i < 5; i++) console.log()

console.log("VipPeopleAccount")

const vipPeople = new VipPeopleAccount(20, 'Victor')
console.log(vipPeople)

console.log()

console.log("VipPeopleAccount - vipDeposit")

vipPeople.vipDeposit(1000)