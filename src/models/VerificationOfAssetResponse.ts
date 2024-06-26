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
import type { Assets } from './Assets';
import {
    AssetsFromJSON,
    AssetsFromJSONTyped,
    AssetsToJSON,
} from './Assets';

/**
 * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
 * @export
 * @interface VerificationOfAssetResponse
 */
export interface VerificationOfAssetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {Assets}
     * @memberof VerificationOfAssetResponse
     */
    ASSETS: Assets;
}

/**
 * Check if a given object implements the VerificationOfAssetResponse interface.
 */
export function instanceOfVerificationOfAssetResponse(value: object): boolean {
    if (!('ASSETS' in value)) return false;
    return true;
}

export function VerificationOfAssetResponseFromJSON(json: any): VerificationOfAssetResponse {
    return VerificationOfAssetResponseFromJSONTyped(json, false);
}

export function VerificationOfAssetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationOfAssetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'ASSETS': AssetsFromJSON(json['ASSETS']),
    };
}

export function VerificationOfAssetResponseToJSON(value?: VerificationOfAssetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'ASSETS': AssetsToJSON(value['ASSETS']),
    };
}

