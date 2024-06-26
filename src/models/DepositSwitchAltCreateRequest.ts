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
import type { DepositSwitchCreateRequestOptions } from './DepositSwitchCreateRequestOptions';
import {
    DepositSwitchCreateRequestOptionsFromJSON,
    DepositSwitchCreateRequestOptionsFromJSONTyped,
    DepositSwitchCreateRequestOptionsToJSON,
} from './DepositSwitchCreateRequestOptions';
import type { DepositSwitchTargetAccount } from './DepositSwitchTargetAccount';
import {
    DepositSwitchTargetAccountFromJSON,
    DepositSwitchTargetAccountFromJSONTyped,
    DepositSwitchTargetAccountToJSON,
} from './DepositSwitchTargetAccount';
import type { DepositSwitchTargetUser } from './DepositSwitchTargetUser';
import {
    DepositSwitchTargetUserFromJSON,
    DepositSwitchTargetUserFromJSONTyped,
    DepositSwitchTargetUserToJSON,
} from './DepositSwitchTargetUser';

/**
 * DepositSwitchAltCreateRequest defines the request schema for `/deposit_switch/alt/create`
 * @export
 * @interface DepositSwitchAltCreateRequest
 */
export interface DepositSwitchAltCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof DepositSwitchAltCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof DepositSwitchAltCreateRequest
     */
    secret?: string;
    /**
     * 
     * @type {DepositSwitchTargetAccount}
     * @memberof DepositSwitchAltCreateRequest
     */
    target_account: DepositSwitchTargetAccount;
    /**
     * 
     * @type {DepositSwitchTargetUser}
     * @memberof DepositSwitchAltCreateRequest
     */
    target_user: DepositSwitchTargetUser;
    /**
     * 
     * @type {DepositSwitchCreateRequestOptions}
     * @memberof DepositSwitchAltCreateRequest
     */
    options?: DepositSwitchCreateRequestOptions;
    /**
     * ISO-3166-1 alpha-2 country code standard.
     * @type {string}
     * @memberof DepositSwitchAltCreateRequest
     */
    country_code?: DepositSwitchAltCreateRequestCountryCodeEnum;
}


/**
 * @export
 */
export const DepositSwitchAltCreateRequestCountryCodeEnum = {
    Us: 'US',
    Ca: 'CA'
} as const;
export type DepositSwitchAltCreateRequestCountryCodeEnum = typeof DepositSwitchAltCreateRequestCountryCodeEnum[keyof typeof DepositSwitchAltCreateRequestCountryCodeEnum];


/**
 * Check if a given object implements the DepositSwitchAltCreateRequest interface.
 */
export function instanceOfDepositSwitchAltCreateRequest(value: object): boolean {
    if (!('target_account' in value)) return false;
    if (!('target_user' in value)) return false;
    return true;
}

export function DepositSwitchAltCreateRequestFromJSON(json: any): DepositSwitchAltCreateRequest {
    return DepositSwitchAltCreateRequestFromJSONTyped(json, false);
}

export function DepositSwitchAltCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositSwitchAltCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'target_account': DepositSwitchTargetAccountFromJSON(json['target_account']),
        'target_user': DepositSwitchTargetUserFromJSON(json['target_user']),
        'options': json['options'] == null ? undefined : DepositSwitchCreateRequestOptionsFromJSON(json['options']),
        'country_code': json['country_code'] == null ? undefined : json['country_code'],
    };
}

export function DepositSwitchAltCreateRequestToJSON(value?: DepositSwitchAltCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'target_account': DepositSwitchTargetAccountToJSON(value['target_account']),
        'target_user': DepositSwitchTargetUserToJSON(value['target_user']),
        'options': DepositSwitchCreateRequestOptionsToJSON(value['options']),
        'country_code': value['country_code'],
    };
}

