# Desenvolvendo o Dio Bank
Idealizado por [Nathally Souza](https://github.com/nathyts) | Desenvolvido por [Victor-Lis](https://www.linkedin.com/in/victor-lis-bronzo)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm run dev

#### Desafios
[ X ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[ X ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

[ X ] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[ X ] Todos os atributos de qualquer conta devem ser privados

[ X ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[ X ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

#### Extra
[ X ] Adicionado cálculo de dívida ao pegar empréstimo
  - Ao pegar empréstimo a dívida é 1.1x o valor pego
  - Impossibilita de pegar novos empréstimos enquanto a dívida está ativa
  - Caso seja pago a mais do que a dívida, o restante é depositado
  - Caso seja pago menos que dívida, apenas é descontado