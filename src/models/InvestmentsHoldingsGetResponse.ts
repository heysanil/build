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
import type { AccountBase } from './AccountBase';
import {
    AccountBaseFromJSON,
    AccountBaseFromJSONTyped,
    AccountBaseToJSON,
} from './AccountBase';
import type { Holding } from './Holding';
import {
    HoldingFromJSON,
    HoldingFromJSONTyped,
    HoldingToJSON,
} from './Holding';
import type { Item } from './Item';
import {
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
} from './Item';
import type { Security } from './Security';
import {
    SecurityFromJSON,
    SecurityFromJSONTyped,
    SecurityToJSON,
} from './Security';

/**
 * InvestmentsHoldingsGetResponse defines the response schema for `/investments/holdings/get`
 * @export
 * @interface InvestmentsHoldingsGetResponse
 */
export interface InvestmentsHoldingsGetResponse {
    [key: string]: any | any;
    /**
     * The accounts associated with the Item
     * @type {Array<AccountBase>}
     * @memberof InvestmentsHoldingsGetResponse
     */
    accounts: Array<AccountBase>;
    /**
     * The holdings belonging to investment accounts associated with the Item. Details of the securities in the holdings are provided in the `securities` field. 
     * @type {Array<Holding>}
     * @memberof InvestmentsHoldingsGetResponse
     */
    holdings: Array<Holding>;
    /**
     * Objects describing the securities held in the accounts associated with the Item. 
     * @type {Array<Security>}
     * @memberof InvestmentsHoldingsGetResponse
     */
    securities: Array<Security>;
    /**
     * 
     * @type {Item}
     * @memberof InvestmentsHoldingsGetResponse
     */
    item: Item;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof InvestmentsHoldingsGetResponse
     */
    request_id: string;
    /**
     * When true, this field indicates that the Item's portfolio was manually created with the Investments Fallback flow.
     * @type {boolean}
     * @memberof InvestmentsHoldingsGetResponse
     */
    is_investments_fallback_item?: boolean;
}

/**
 * Check if a given object implements the InvestmentsHoldingsGetResponse interface.
 */
export function instanceOfInvestmentsHoldingsGetResponse(value: object): boolean {
    if (!('accounts' in value)) return false;
    if (!('holdings' in value)) return false;
    if (!('securities' in value)) return false;
    if (!('item' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function InvestmentsHoldingsGetResponseFromJSON(json: any): InvestmentsHoldingsGetResponse {
    return InvestmentsHoldingsGetResponseFromJSONTyped(json, false);
}

export function InvestmentsHoldingsGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvestmentsHoldingsGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'accounts': ((json['accounts'] as Array<any>).map(AccountBaseFromJSON)),
        'holdings': ((json['holdings'] as Array<any>).map(HoldingFromJSON)),
        'securities': ((json['securities'] as Array<any>).map(SecurityFromJSON)),
        'item': ItemFromJSON(json['item']),
        'request_id': json['request_id'],
        'is_investments_fallback_item': json['is_investments_fallback_item'] == null ? undefined : json['is_investments_fallback_item'],
    };
}

export function InvestmentsHoldingsGetResponseToJSON(value?: InvestmentsHoldingsGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'accounts': ((value['accounts'] as Array<any>).map(AccountBaseToJSON)),
        'holdings': ((value['holdings'] as Array<any>).map(HoldingToJSON)),
        'securities': ((value['securities'] as Array<any>).map(SecurityToJSON)),
        'item': ItemToJSON(value['item']),
        'request_id': value['request_id'],
        'is_investments_fallback_item': value['is_investments_fallback_item'],
    };
}
