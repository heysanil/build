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

import { mapValues } from '../runtime';
/**
 * Investment security associated with the account.
 * @export
 * @interface AssetReportInvestmentSecurity
 */
export interface AssetReportInvestmentSecurity {
    [key: string]: any | any;
    /**
     * A unique, Plaid-specific identifier for the security, used to associate securities with holdings. Like all Plaid identifiers, the `security_id` is case sensitive. The `security_id` may change if inherent details of the security change due to a corporate action, for example, in the event of a ticker symbol change or CUSIP change.
     * @type {string}
     * @memberof AssetReportInvestmentSecurity
     */
    security_id: string;
    /**
     * A descriptive name for the security, suitable for display.
     * @type {string}
     * @memberof AssetReportInvestmentSecurity
     */
    name: string | null;
    /**
     * The security’s trading symbol for publicly traded securities, and otherwise a short identifier if available.
     * @type {string}
     * @memberof AssetReportInvestmentSecurity
     */
    ticker_symbol: string | null;
    /**
     * The security type of the holding. Valid security types are:
     * 
     * `cash`: Cash, currency, and money market funds
     * 
     * `cryptocurrency`: Digital or virtual currencies
     * 
     * `derivative`: Options, warrants, and other derivative instruments
     * 
     * `equity`: Domestic and foreign equities
     * 
     * `etf`: Multi-asset exchange-traded investment funds
     * 
     * `fixed income`: Bonds and certificates of deposit (CDs)
     * 
     * `loan`: Loans and loan receivables
     * 
     * `mutual fund`: Open- and closed-end vehicles pooling funds of multiple investors
     * 
     * `other`: Unknown or other investment types
     * @type {string}
     * @memberof AssetReportInvestmentSecurity
     */
    type: string | null;
}

/**
 * Check if a given object implements the AssetReportInvestmentSecurity interface.
 */
export function instanceOfAssetReportInvestmentSecurity(value: object): boolean {
    if (!('security_id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('ticker_symbol' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function AssetReportInvestmentSecurityFromJSON(json: any): AssetReportInvestmentSecurity {
    return AssetReportInvestmentSecurityFromJSONTyped(json, false);
}

export function AssetReportInvestmentSecurityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReportInvestmentSecurity {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'security_id': json['security_id'],
        'name': json['name'],
        'ticker_symbol': json['ticker_symbol'],
        'type': json['type'],
    };
}

export function AssetReportInvestmentSecurityToJSON(value?: AssetReportInvestmentSecurity | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'security_id': value['security_id'],
        'name': value['name'],
        'ticker_symbol': value['ticker_symbol'],
        'type': value['type'],
    };
}

