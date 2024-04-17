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
import type { CounterpartyType } from './CounterpartyType';
import {
    CounterpartyTypeFromJSON,
    CounterpartyTypeFromJSONTyped,
    CounterpartyTypeToJSON,
} from './CounterpartyType';

/**
 * The counterparty, such as the merchant or financial institution, is extracted by Plaid from the raw description.
 * @export
 * @interface Counterparty
 */
export interface Counterparty {
    [key: string]: any | any;
    /**
     * The name of the counterparty, such as the merchant or the financial institution, as extracted by Plaid from the raw description.
     * @type {string}
     * @memberof Counterparty
     */
    name: string;
    /**
     * A unique, stable, Plaid-generated ID that maps to the counterparty.
     * @type {string}
     * @memberof Counterparty
     */
    entity_id?: string;
    /**
     * 
     * @type {CounterpartyType}
     * @memberof Counterparty
     */
    type: CounterpartyType;
    /**
     * The website associated with the counterparty.
     * @type {string}
     * @memberof Counterparty
     */
    website: string | null;
    /**
     * The URL of a logo associated with the counterparty, if available. The logo will always be 100×100 pixel PNG file.
     * @type {string}
     * @memberof Counterparty
     */
    logo_url: string | null;
    /**
     * A description of how confident we are that the provided counterparty is involved in the transaction.
     * 
     * `VERY_HIGH`: We recognize this counterparty and we are more than 98% confident that it is involved in this transaction.
     * `HIGH`: We recognize this counterparty and we are more than 90% confident that it is involved in this transaction.
     * `MEDIUM`: We are moderately confident that this counterparty was involved in this transaction, but some details may differ from our records.
     * `LOW`: We didn’t find a matching counterparty in our records, so we are returning a cleansed name parsed out of the request description.
     * `UNKNOWN`: We don’t know the confidence level for this counterparty.
     * @type {string}
     * @memberof Counterparty
     */
    confidence_level?: string;
    /**
     * The phone number associated with the counterparty in E. 164 format. If there is a location match (i.e. a street address is returned in the location object), the phone number will be location specific.
     * @type {string}
     * @memberof Counterparty
     */
    phone_number: string | null;
}

/**
 * Check if a given object implements the Counterparty interface.
 */
export function instanceOfCounterparty(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('type' in value)) return false;
    if (!('website' in value)) return false;
    if (!('logo_url' in value)) return false;
    if (!('phone_number' in value)) return false;
    return true;
}

export function CounterpartyFromJSON(json: any): Counterparty {
    return CounterpartyFromJSONTyped(json, false);
}

export function CounterpartyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Counterparty {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'name': json['name'],
        'entity_id': json['entity_id'] == null ? undefined : json['entity_id'],
        'type': CounterpartyTypeFromJSON(json['type']),
        'website': json['website'],
        'logo_url': json['logo_url'],
        'confidence_level': json['confidence_level'] == null ? undefined : json['confidence_level'],
        'phone_number': json['phone_number'],
    };
}

export function CounterpartyToJSON(value?: Counterparty | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'name': value['name'],
        'entity_id': value['entity_id'],
        'type': CounterpartyTypeToJSON(value['type']),
        'website': value['website'],
        'logo_url': value['logo_url'],
        'confidence_level': value['confidence_level'],
        'phone_number': value['phone_number'],
    };
}
