export interface HostGetAll {

    docs: HostOne[],
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

export interface HostOne {

    priceTable: PriceTable,
    settings: Settings,
    interactions: Interactions
    _id: string,
    knownSince: Date,
    publicKey: string,
    lastAnnouncement: Date,
    netAddress: string,
    scanned: boolean

}


export interface PriceTable {

    uid: string,
    validity: number,
    hostblockheight: number,
    updatepricetablecost: string,
    accountbalancecost: string,
    fundaccountcost: string,
    latestrevisioncost: string,
    subscriptionmemorycost: string,
    subscriptionnotificationcost: string,
    initbasecost: string,
    memorytimecost: string,
    downloadbandwidthcost: string,
    uploadbandwidthcost: string,
    dropsectorsbasecost: string,
    dropsectorsunitcost: string,
    hassectorbasecost: string,
    readbasecost: string,
    readlengthcost: string,
    renewcontractcost: string,
    revisionbasecost: string,
    swapsectorcost: string,
    writebasecost: string,
    writelengthcost: string,
    writestorecost: string,
    txnfeeminrecommended: string,
    txnfeemaxrecommended: string,
    contractprice: string,
    collateralcost: string,
    maxcollateral: string,
    maxduration: number,
    windowsize: number,
    registryentriesleft: number,
    registryentriestotal: number,
    expiry: Date

}

interface Settings {

    acceptingcontracts: boolean,
    baserpcprice: string,
    collateral: string,
    contractprice: string,
    downloadbandwidthprice: number,
    ephemeralaccountexpiry: 604800000000000,
    maxcollateral: number,
    maxdownloadbatchsize: 17825792,
    maxduration: 25920,
    maxrevisebatchsize: 17825792,
    remainingstorage: 485025120256,
    revisionnumber: 45993460,
    sectorsize: 4194304,
    totalstorage: 3999956729856,
    windowsize: 144,
    maxephemeralaccountbalance: number,
    netaddress: string,
    sectoraccessprice: string,
    siamuxport: string,
    storageprice: number,
    unlockhash: string,
    uploadbandwidthprice: number,
    version: string

}

interface Interactions {

    TotalScans: number,
    LastScan: Date,
    LastScanSuccess: boolean,
    SecondToLastScanSuccess: boolean,
    Uptime: number,
    Downtime: number,
    SuccessfulInteractions: number,
    FailedInteractions: number
    
}