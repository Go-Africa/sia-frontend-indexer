export class Address{
    account_number!: number;
    address!: string;
    type!: string;
    balance!: Balance[];
    transactions! : any
}

export class Balance{
    denom! : string
    amount! : number
}