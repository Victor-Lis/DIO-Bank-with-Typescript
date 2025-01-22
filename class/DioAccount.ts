export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number = Math.floor(Math.random() * 10000000);
  private balance: number = 0;
  private status: boolean = true;
  private debt: number = 0;

  constructor(name: string){
    this.name = name
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  withdraw = (value: number): void => {
    if(!this.validateStatus() || this.balance < value) return
    console.log();
    console.log("----------Sacando----------");
    console.log("Saldo anterior:", this.balance);
    this.balance -= value;
    console.log(`Saldo atual: ${this.balance} | Saque: ${value}`);
    console.log("---------------------------");
  }

  deposit = (value: number): void => {
    console.log();
    console.log("--------Depositando--------");
    console.log(`Saldo anterior: ${this.balance} | Depósito: ${value}`);
    this.balance += value;
    console.log("Saldo atual:", this.balance);
    console.log("---------------------------");
  }

  getBalance = (): number => {
    return this.balance
  }

  toggleStatus = (): void => {
    this.status = !this.status
  }

  validateStatus = (): boolean => {
    // if (this.status) return this.status
    // throw new Error('Conta inválida')
    return this.status
  }

  getDebt = (): number => {
    return this.debt
  }

  incrementDebt = (value: number): void => {
    if(this.validateStatus()) this.toggleStatus()
    this.debt += value*1.1
  }

  payDebt = (value: number): void => {
    if ((this.debt-value) < 0) {
      this.deposit((this.debt-value)*-1)
      this.debt = 0
    } else {
      this.debt -= value
    }
  }
}
