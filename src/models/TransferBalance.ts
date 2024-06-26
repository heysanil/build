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
import type { TransferBalanceType } from './TransferBalanceType';
import {
    TransferBalanceTypeFromJSON,
    TransferBalanceTypeFromJSONTyped,
    TransferBalanceTypeToJSON,
} from './TransferBalanceType';

/**
 * Information about the balance held with Plaid.
 * @export
 * @interface TransferBalance
 */
export interface TransferBalance {
    [key: string]: any | any;
    /**
     * The amount of this balance available for use (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferBalance
     */
    available: string;
    /**
     * The available balance, plus amount of pending funds that in processing (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferBalance
     */
    current?: string;
    /**
     * 
     * @type {TransferBalanceType}
     * @memberof TransferBalance
     */
    type: TransferBalanceType;
}

/**
 * Check if a given object implements the TransferBalance interface.
 */
export function instanceOfTransferBalance(value: object): boolean {
    if (!('available' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function TransferBalanceFromJSON(json: any): TransferBalance {
    return TransferBalanceFromJSONTyped(json, false);
}

export function TransferBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferBalance {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'available': json['available'],
        'current': json['current'] == null ? undefined : json['current'],
        'type': TransferBalanceTypeFromJSON(json['type']),
    };
}

export function TransferBalanceToJSON(value?: TransferBalance | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'available': value['available'],
        'current': value['current'],
        'type': TransferBalanceTypeToJSON(value['type']),
    };
}

