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
import type { Institution } from './Institution';
import {
    InstitutionFromJSON,
    InstitutionFromJSONTyped,
    InstitutionToJSON,
} from './Institution';

/**
 * InstitutionsGetResponse defines the response schema for `/institutions/get`
 * @export
 * @interface InstitutionsGetResponse
 */
export interface InstitutionsGetResponse {
    [key: string]: any | any;
    /**
     * A list of Plaid institutions
     * @type {Array<Institution>}
     * @memberof InstitutionsGetResponse
     */
    institutions: Array<Institution>;
    /**
     * The total number of institutions available via this endpoint
     * @type {number}
     * @memberof InstitutionsGetResponse
     */
    total: number;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof InstitutionsGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the InstitutionsGetResponse interface.
 */
export function instanceOfInstitutionsGetResponse(value: object): boolean {
    if (!('institutions' in value)) return false;
    if (!('total' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function InstitutionsGetResponseFromJSON(json: any): InstitutionsGetResponse {
    return InstitutionsGetResponseFromJSONTyped(json, false);
}

export function InstitutionsGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstitutionsGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'institutions': ((json['institutions'] as Array<any>).map(InstitutionFromJSON)),
        'total': json['total'],
        'request_id': json['request_id'],
    };
}

export function InstitutionsGetResponseToJSON(value?: InstitutionsGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'institutions': ((value['institutions'] as Array<any>).map(InstitutionToJSON)),
        'total': value['total'],
        'request_id': value['request_id'],
    };
}

