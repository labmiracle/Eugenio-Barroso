const bankAccount = {
    money: 0,
    deposit(value: number, message?: string): void{
    this.money += value;
    if (message) {
    console.log(message);
    }
    }
    };
    
    bankAccount.deposit(20);
    bankAccount.deposit(10, 'Deposit received')
    
    export {bankAccount};