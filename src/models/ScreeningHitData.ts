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
import type { GenericScreeningHitLocationItems } from './GenericScreeningHitLocationItems';
import {
    GenericScreeningHitLocationItemsFromJSON,
    GenericScreeningHitLocationItemsFromJSONTyped,
    GenericScreeningHitLocationItemsToJSON,
} from './GenericScreeningHitLocationItems';
import type { ScreeningHitDateOfBirthItem } from './ScreeningHitDateOfBirthItem';
import {
    ScreeningHitDateOfBirthItemFromJSON,
    ScreeningHitDateOfBirthItemFromJSONTyped,
    ScreeningHitDateOfBirthItemToJSON,
} from './ScreeningHitDateOfBirthItem';
import type { ScreeningHitDocumentsItems } from './ScreeningHitDocumentsItems';
import {
    ScreeningHitDocumentsItemsFromJSON,
    ScreeningHitDocumentsItemsFromJSONTyped,
    ScreeningHitDocumentsItemsToJSON,
} from './ScreeningHitDocumentsItems';
import type { ScreeningHitNamesItems } from './ScreeningHitNamesItems';
import {
    ScreeningHitNamesItemsFromJSON,
    ScreeningHitNamesItemsFromJSONTyped,
    ScreeningHitNamesItemsToJSON,
} from './ScreeningHitNamesItems';

/**
 * Information associated with the watchlist hit
 * @export
 * @interface ScreeningHitData
 */
export interface ScreeningHitData {
    [key: string]: any | any;
    /**
     * Dates of birth associated with the watchlist hit
     * @type {Array<ScreeningHitDateOfBirthItem>}
     * @memberof ScreeningHitData
     */
    dates_of_birth?: Array<ScreeningHitDateOfBirthItem>;
    /**
     * Documents associated with the watchlist hit
     * @type {Array<ScreeningHitDocumentsItems>}
     * @memberof ScreeningHitData
     */
    documents?: Array<ScreeningHitDocumentsItems>;
    /**
     * Locations associated with the watchlist hit
     * @type {Array<GenericScreeningHitLocationItems>}
     * @memberof ScreeningHitData
     */
    locations?: Array<GenericScreeningHitLocationItems>;
    /**
     * Names associated with the watchlist hit
     * @type {Array<ScreeningHitNamesItems>}
     * @memberof ScreeningHitData
     */
    names?: Array<ScreeningHitNamesItems>;
}

/**
 * Check if a given object implements the ScreeningHitData interface.
 */
export function instanceOfScreeningHitData(value: object): boolean {
    return true;
}

export function ScreeningHitDataFromJSON(json: any): ScreeningHitData {
    return ScreeningHitDataFromJSONTyped(json, false);
}

export function ScreeningHitDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreeningHitData {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'dates_of_birth': json['dates_of_birth'] == null ? undefined : ((json['dates_of_birth'] as Array<any>).map(ScreeningHitDateOfBirthItemFromJSON)),
        'documents': json['documents'] == null ? undefined : ((json['documents'] as Array<any>).map(ScreeningHitDocumentsItemsFromJSON)),
        'locations': json['locations'] == null ? undefined : ((json['locations'] as Array<any>).map(GenericScreeningHitLocationItemsFromJSON)),
        'names': json['names'] == null ? undefined : ((json['names'] as Array<any>).map(ScreeningHitNamesItemsFromJSON)),
    };
}

export function ScreeningHitDataToJSON(value?: ScreeningHitData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'dates_of_birth': value['dates_of_birth'] == null ? undefined : ((value['dates_of_birth'] as Array<any>).map(ScreeningHitDateOfBirthItemToJSON)),
        'documents': value['documents'] == null ? undefined : ((value['documents'] as Array<any>).map(ScreeningHitDocumentsItemsToJSON)),
        'locations': value['locations'] == null ? undefined : ((value['locations'] as Array<any>).map(GenericScreeningHitLocationItemsToJSON)),
        'names': value['names'] == null ? undefined : ((value['names'] as Array<any>).map(ScreeningHitNamesItemsToJSON)),
    };
}

