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
 * Configuration parameters for the Investments Auth Product
 * @export
 * @interface LinkTokenInvestmentsAuth
 */
export interface LinkTokenInvestmentsAuth {
    /**
     * If `true`, show institutions that use the manual entry fallback flow.
     * @type {boolean}
     * @memberof LinkTokenInvestmentsAuth
     */
    manual_entry_enabled?: boolean;
    /**
     * If `true`, show institutions that use the masked number match fallback flow.
     * @type {boolean}
     * @memberof LinkTokenInvestmentsAuth
     */
    masked_number_match_enabled?: boolean;
}

/**
 * Check if a given object implements the LinkTokenInvestmentsAuth interface.
 */
export function instanceOfLinkTokenInvestmentsAuth(value: object): boolean {
    return true;
}

export function LinkTokenInvestmentsAuthFromJSON(json: any): LinkTokenInvestmentsAuth {
    return LinkTokenInvestmentsAuthFromJSONTyped(json, false);
}

export function LinkTokenInvestmentsAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenInvestmentsAuth {
    if (json == null) {
        return json;
    }
    return {
        
        'manual_entry_enabled': json['manual_entry_enabled'] == null ? undefined : json['manual_entry_enabled'],
        'masked_number_match_enabled': json['masked_number_match_enabled'] == null ? undefined : json['masked_number_match_enabled'],
    };
}

export function LinkTokenInvestmentsAuthToJSON(value?: LinkTokenInvestmentsAuth | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'manual_entry_enabled': value['manual_entry_enabled'],
        'masked_number_match_enabled': value['masked_number_match_enabled'],
    };
}
