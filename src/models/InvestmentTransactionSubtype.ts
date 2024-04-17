/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.503.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * For descriptions of possible transaction types and subtypes, see the [Investment transaction types schema](https://plaid.com/docs/api/accounts/#investment-transaction-types-schema).
 * @export
 */
export const InvestmentTransactionSubtype = {
    AccountFee: 'account fee',
    Adjustment: 'adjustment',
    Assignment: 'assignment',
    Buy: 'buy',
    BuyToCover: 'buy to cover',
    Contribution: 'contribution',
    Deposit: 'deposit',
    Distribution: 'distribution',
    Dividend: 'dividend',
    DividendReinvestment: 'dividend reinvestment',
    Exercise: 'exercise',
    Expire: 'expire',
    FundFee: 'fund fee',
    Interest: 'interest',
    InterestReceivable: 'interest receivable',
    InterestReinvestment: 'interest reinvestment',
    LegalFee: 'legal fee',
    LoanPayment: 'loan payment',
    LongTermCapitalGain: 'long-term capital gain',
    LongTermCapitalGainReinvestment: 'long-term capital gain reinvestment',
    ManagementFee: 'management fee',
    MarginExpense: 'margin expense',
    Merger: 'merger',
    MiscellaneousFee: 'miscellaneous fee',
    NonQualifiedDividend: 'non-qualified dividend',
    NonResidentTax: 'non-resident tax',
    PendingCredit: 'pending credit',
    PendingDebit: 'pending debit',
    QualifiedDividend: 'qualified dividend',
    Rebalance: 'rebalance',
    ReturnOfPrincipal: 'return of principal',
    Request: 'request',
    Sell: 'sell',
    SellShort: 'sell short',
    Send: 'send',
    ShortTermCapitalGain: 'short-term capital gain',
    ShortTermCapitalGainReinvestment: 'short-term capital gain reinvestment',
    SpinOff: 'spin off',
    Split: 'split',
    StockDistribution: 'stock distribution',
    Tax: 'tax',
    TaxWithheld: 'tax withheld',
    Trade: 'trade',
    Transfer: 'transfer',
    TransferFee: 'transfer fee',
    TrustFee: 'trust fee',
    UnqualifiedGain: 'unqualified gain',
    Withdrawal: 'withdrawal'
} as const;
export type InvestmentTransactionSubtype = typeof InvestmentTransactionSubtype[keyof typeof InvestmentTransactionSubtype];


export function InvestmentTransactionSubtypeFromJSON(json: any): InvestmentTransactionSubtype {
    return InvestmentTransactionSubtypeFromJSONTyped(json, false);
}

export function InvestmentTransactionSubtypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvestmentTransactionSubtype {
    return json as InvestmentTransactionSubtype;
}

export function InvestmentTransactionSubtypeToJSON(value?: InvestmentTransactionSubtype | null): any {
    return value as any;
}
