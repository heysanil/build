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
 * An institution object. If the Item was created via Same-Day or Instant micro-deposit verification, will be `null`.
 * @export
 * @interface LinkSessionSuccessMetadataInstitution
 */
export interface LinkSessionSuccessMetadataInstitution {
    /**
     * The full institution name, such as `'Wells Fargo'`
     * @type {string}
     * @memberof LinkSessionSuccessMetadataInstitution
     */
    name?: string;
    /**
     * The Plaid institution identifier
     * @type {string}
     * @memberof LinkSessionSuccessMetadataInstitution
     */
    institution_id?: string;
}

/**
 * Check if a given object implements the LinkSessionSuccessMetadataInstitution interface.
 */
export function instanceOfLinkSessionSuccessMetadataInstitution(value: object): boolean {
    return true;
}

export function LinkSessionSuccessMetadataInstitutionFromJSON(json: any): LinkSessionSuccessMetadataInstitution {
    return LinkSessionSuccessMetadataInstitutionFromJSONTyped(json, false);
}

export function LinkSessionSuccessMetadataInstitutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkSessionSuccessMetadataInstitution {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'institution_id': json['institution_id'] == null ? undefined : json['institution_id'],
    };
}

export function LinkSessionSuccessMetadataInstitutionToJSON(value?: LinkSessionSuccessMetadataInstitution | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'institution_id': value['institution_id'],
    };
}

