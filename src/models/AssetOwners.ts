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
import type { AssetOwner } from './AssetOwner';
import {
    AssetOwnerFromJSON,
    AssetOwnerFromJSONTyped,
    AssetOwnerToJSON,
} from './AssetOwner';

/**
 * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
 * @export
 * @interface AssetOwners
 */
export interface AssetOwners {
    [key: string]: any | any;
    /**
     * Multiple Occurances of Account Owners Full Name up to 4.
     * @type {Array<AssetOwner>}
     * @memberof AssetOwners
     */
    ASSET_OWNER: Array<AssetOwner>;
}

/**
 * Check if a given object implements the AssetOwners interface.
 */
export function instanceOfAssetOwners(value: object): boolean {
    if (!('ASSET_OWNER' in value)) return false;
    return true;
}

export function AssetOwnersFromJSON(json: any): AssetOwners {
    return AssetOwnersFromJSONTyped(json, false);
}

export function AssetOwnersFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetOwners {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'ASSET_OWNER': ((json['ASSET_OWNER'] as Array<any>).map(AssetOwnerFromJSON)),
    };
}

export function AssetOwnersToJSON(value?: AssetOwners | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'ASSET_OWNER': ((value['ASSET_OWNER'] as Array<any>).map(AssetOwnerToJSON)),
    };
}
