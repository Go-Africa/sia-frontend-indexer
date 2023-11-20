export class Block{
    hash!: string;
    height!: number;
    time!: string;
    transactionNumber!: number;
    proposerAddress! : ProposerAddress
    created_at!: string;
    updated_at!: string;
}

export class ProposerAddress {
    query_address!: string
    max_change_rate!: string
    max_rate!: string
    rate!: string
    update_time!:string
    key!: string
    delegator_shares!: string
    details!: string
    identity!: string
    moniker!: string
    security_contact!: string
    website!: string
    jailed!: boolean
    min_self_delegation!: number
    operator_address!: string
    status!: string
    tokens!: number
    unbonding_height!: number
    unbonding_time!: string
    created_at!: string
    updated_at!:string
}