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
import type { AssetTransaction } from './AssetTransaction';
import {
    AssetTransactionFromJSON,
    AssetTransactionFromJSONTyped,
    AssetTransactionToJSON,
} from './AssetTransaction';

/**
 * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
 * @export
 * @interface AssetTransactions
 */
export interface AssetTransactions {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<AssetTransaction>}
     * @memberof AssetTransactions
     */
    ASSET_TRANSACTION: Array<AssetTransaction>;
}

/**
 * Check if a given object implements the AssetTransactions interface.
 */
export function instanceOfAssetTransactions(value: object): boolean {
    if (!('ASSET_TRANSACTION' in value)) return false;
    return true;
}

export function AssetTransactionsFromJSON(json: any): AssetTransactions {
    return AssetTransactionsFromJSONTyped(json, false);
}

export function AssetTransactionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetTransactions {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'ASSET_TRANSACTION': ((json['ASSET_TRANSACTION'] as Array<any>).map(AssetTransactionFromJSON)),
    };
}

export function AssetTransactionsToJSON(value?: AssetTransactions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'ASSET_TRANSACTION': ((value['ASSET_TRANSACTION'] as Array<any>).map(AssetTransactionToJSON)),
    };
}

