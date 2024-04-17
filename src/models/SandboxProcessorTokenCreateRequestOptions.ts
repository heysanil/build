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
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
 * @export
 * @interface SandboxProcessorTokenCreateRequestOptions
 */
export interface SandboxProcessorTokenCreateRequestOptions {
    /**
     * Test username to use for the creation of the Sandbox Item. Default value is `user_good`.
     * @type {string}
     * @memberof SandboxProcessorTokenCreateRequestOptions
     */
    override_username?: string;
    /**
     * Test password to use for the creation of the Sandbox Item. Default value is `pass_good`.
     * @type {string}
     * @memberof SandboxProcessorTokenCreateRequestOptions
     */
    override_password?: string;
}

/**
 * Check if a given object implements the SandboxProcessorTokenCreateRequestOptions interface.
 */
export function instanceOfSandboxProcessorTokenCreateRequestOptions(value: object): boolean {
    return true;
}

export function SandboxProcessorTokenCreateRequestOptionsFromJSON(json: any): SandboxProcessorTokenCreateRequestOptions {
    return SandboxProcessorTokenCreateRequestOptionsFromJSONTyped(json, false);
}

export function SandboxProcessorTokenCreateRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxProcessorTokenCreateRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'override_username': json['override_username'] == null ? undefined : json['override_username'],
        'override_password': json['override_password'] == null ? undefined : json['override_password'],
    };
}

export function SandboxProcessorTokenCreateRequestOptionsToJSON(value?: SandboxProcessorTokenCreateRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'override_username': value['override_username'],
        'override_password': value['override_password'],
    };
}
