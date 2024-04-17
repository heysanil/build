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
 * The secrets for the newly created end customer in non-Production environments.
 * @export
 * @interface PartnerEndCustomerSecrets
 */
export interface PartnerEndCustomerSecrets {
    [key: string]: any | any;
    /**
     * The end customer's secret key for the Sandbox environment.
     * @type {string}
     * @memberof PartnerEndCustomerSecrets
     */
    sandbox?: string;
    /**
     * The end customer's secret key for the Development environment.
     * @type {string}
     * @memberof PartnerEndCustomerSecrets
     */
    development?: string;
}

/**
 * Check if a given object implements the PartnerEndCustomerSecrets interface.
 */
export function instanceOfPartnerEndCustomerSecrets(value: object): boolean {
    return true;
}

export function PartnerEndCustomerSecretsFromJSON(json: any): PartnerEndCustomerSecrets {
    return PartnerEndCustomerSecretsFromJSONTyped(json, false);
}

export function PartnerEndCustomerSecretsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerEndCustomerSecrets {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'sandbox': json['sandbox'] == null ? undefined : json['sandbox'],
        'development': json['development'] == null ? undefined : json['development'],
    };
}

export function PartnerEndCustomerSecretsToJSON(value?: PartnerEndCustomerSecrets | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'sandbox': value['sandbox'],
        'development': value['development'],
    };
}

