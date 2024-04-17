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
 * SandboxProcessorTokenCreateResponse defines the response schema for `/sandbox/processor_token/create`
 * @export
 * @interface SandboxProcessorTokenCreateResponse
 */
export interface SandboxProcessorTokenCreateResponse {
    [key: string]: any | any;
    /**
     * A processor token that can be used to call the `/processor/` endpoints.
     * @type {string}
     * @memberof SandboxProcessorTokenCreateResponse
     */
    processor_token: string;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof SandboxProcessorTokenCreateResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the SandboxProcessorTokenCreateResponse interface.
 */
export function instanceOfSandboxProcessorTokenCreateResponse(value: object): boolean {
    if (!('processor_token' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function SandboxProcessorTokenCreateResponseFromJSON(json: any): SandboxProcessorTokenCreateResponse {
    return SandboxProcessorTokenCreateResponseFromJSONTyped(json, false);
}

export function SandboxProcessorTokenCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxProcessorTokenCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'processor_token': json['processor_token'],
        'request_id': json['request_id'],
    };
}

export function SandboxProcessorTokenCreateResponseToJSON(value?: SandboxProcessorTokenCreateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'processor_token': value['processor_token'],
        'request_id': value['request_id'],
    };
}

