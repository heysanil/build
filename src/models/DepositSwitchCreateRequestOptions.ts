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
 * Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
 * @export
 * @interface DepositSwitchCreateRequestOptions
 */
export interface DepositSwitchCreateRequestOptions {
    /**
     * The URL registered to receive webhooks when the status of a deposit switch request has changed.
     * 
     * @type {string}
     * @memberof DepositSwitchCreateRequestOptions
     */
    webhook?: string;
    /**
     * An array of access tokens corresponding to transaction items to use when attempting to match the user to their Payroll Provider. These tokens must be created by the same client id as the one creating the switch, and have access to the transactions product.
     * @type {Array<string>}
     * @memberof DepositSwitchCreateRequestOptions
     */
    transaction_item_access_tokens?: Array<string>;
}

/**
 * Check if a given object implements the DepositSwitchCreateRequestOptions interface.
 */
export function instanceOfDepositSwitchCreateRequestOptions(value: object): boolean {
    return true;
}

export function DepositSwitchCreateRequestOptionsFromJSON(json: any): DepositSwitchCreateRequestOptions {
    return DepositSwitchCreateRequestOptionsFromJSONTyped(json, false);
}

export function DepositSwitchCreateRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositSwitchCreateRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'webhook': json['webhook'] == null ? undefined : json['webhook'],
        'transaction_item_access_tokens': json['transaction_item_access_tokens'] == null ? undefined : json['transaction_item_access_tokens'],
    };
}

export function DepositSwitchCreateRequestOptionsToJSON(value?: DepositSwitchCreateRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'webhook': value['webhook'],
        'transaction_item_access_tokens': value['transaction_item_access_tokens'],
    };
}

