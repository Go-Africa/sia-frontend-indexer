export class Transaction {
    hash!: string;
    height!: string;
    type!: string;
    gasUsed!: string;
    gasWanted!: string;
    code!: number;
    tx!: any;
    created_at!: string;
    updated_at!: string;
    events!: any
    messages!: any
}

export interface TransactionListMODEL {

    docs: TransactionOneListMODEL[],
    totalDocs: number,
    limit: number,
    totalPages: number,
    page: number,
    pagingCounter: number,
    hasPrevPage: boolean,
    hasNextPage: boolean,
    prevPage: number,
    nextPage: number,

}

export class TransactionOneListMODEL {

    _id!: string;
    id!: string;
    siacoinoutputs!: SiacoinoutputsMODEL[];
    siacoinintputs!: SiacoinoutputsMODEL[];
    siafundinputs!: string;
    siafundoutputs!: string;
    height!: number;
    timestamp!: Date;
    minerfees!: string[];
    arbitrarydata!: any[]

}

export interface SiacoinoutputsMODEL {

    id: string,
    value: string,
    unlockhash: string,
    _id: string

}