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
 * An optional object to filter `/liabilities/get` results. If provided, `options` cannot be null.
 * @export
 * @interface LiabilitiesGetRequestOptions
 */
export interface LiabilitiesGetRequestOptions {
    /**
     * A list of accounts to retrieve for the Item.
     * 
     * An error will be returned if a provided `account_id` is not associated with the Item
     * @type {Array<string>}
     * @memberof LiabilitiesGetRequestOptions
     */
    account_ids?: Array<string>;
}

/**
 * Check if a given object implements the LiabilitiesGetRequestOptions interface.
 */
export function instanceOfLiabilitiesGetRequestOptions(value: object): boolean {
    return true;
}

export function LiabilitiesGetRequestOptionsFromJSON(json: any): LiabilitiesGetRequestOptions {
    return LiabilitiesGetRequestOptionsFromJSONTyped(json, false);
}

export function LiabilitiesGetRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiabilitiesGetRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'account_ids': json['account_ids'] == null ? undefined : json['account_ids'],
    };
}

export function LiabilitiesGetRequestOptionsToJSON(value?: LiabilitiesGetRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_ids': value['account_ids'],
    };
}

