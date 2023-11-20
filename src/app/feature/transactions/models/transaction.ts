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

    data: TransactionOneListMODEL[],
    itemCount: number,
    offset: number,
    perPage: number,
    pageCount: number,
    currentPage: number,
    pagingCounter: number,
    hasPrevPage: boolean,
    hasNextPage: boolean,
    prevPage: number,
    nextPage: number,

}

export interface TransactionOneListMODEL {

    _id: string,
    id: string,
    siacoinoutputs: SiacoinoutputsMODEL[],
    siacoinintputs: SiacoinoutputsMODEL[],
    siafundinputs: string,
    siafundoutputs: string,
    height: number,
    timestamp: Date,
    minerfees: string[],
    arbitrarydata: any[]

}

export interface SiacoinoutputsMODEL {

    id: string,
    value: string,
    unlockhash: string,
    _id: string

}