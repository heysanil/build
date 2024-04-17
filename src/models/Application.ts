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
 * Metadata about the application
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * This field will map to the application ID that is returned from /item/application/list, or provided to the institution in an oauth redirect.
     * @type {string}
     * @memberof Application
     */
    application_id: string;
    /**
     * The name of the application
     * @type {string}
     * @memberof Application
     */
    name: string;
    /**
     * A human-readable name of the application for display purposes
     * @type {string}
     * @memberof Application
     */
    display_name: string | null;
    /**
     * The date this application was granted production access at Plaid in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD) format in UTC.
     * @type {Date}
     * @memberof Application
     */
    join_date: Date;
    /**
     * A URL that links to the application logo image.
     * @type {string}
     * @memberof Application
     */
    logo_url: string | null;
    /**
     * The URL for the application's website
     * @type {string}
     * @memberof Application
     */
    application_url: string | null;
    /**
     * A string provided by the connected app stating why they use their respective enabled products.
     * @type {string}
     * @memberof Application
     */
    reason_for_access: string | null;
    /**
     * A string representing client’s broad use case as assessed by Plaid.
     * @type {string}
     * @memberof Application
     */
    use_case: string | null;
    /**
     * A string representing the name of client’s legal entity.
     * @type {string}
     * @memberof Application
     */
    company_legal_name: string | null;
    /**
     * A string representing the city of the client’s headquarters.
     * @type {string}
     * @memberof Application
     */
    city: string | null;
    /**
     * A string representing the region of the client’s headquarters.
     * @type {string}
     * @memberof Application
     */
    region: string | null;
    /**
     * A string representing the postal code of the client’s headquarters.
     * @type {string}
     * @memberof Application
     */
    postal_code: string | null;
    /**
     * A string representing the country code of the client’s headquarters.
     * @type {string}
     * @memberof Application
     */
    country_code: string | null;
}

/**
 * Check if a given object implements the Application interface.
 */
export function instanceOfApplication(value: object): boolean {
    if (!('application_id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('display_name' in value)) return false;
    if (!('join_date' in value)) return false;
    if (!('logo_url' in value)) return false;
    if (!('application_url' in value)) return false;
    if (!('reason_for_access' in value)) return false;
    if (!('use_case' in value)) return false;
    if (!('company_legal_name' in value)) return false;
    if (!('city' in value)) return false;
    if (!('region' in value)) return false;
    if (!('postal_code' in value)) return false;
    if (!('country_code' in value)) return false;
    return true;
}

export function ApplicationFromJSON(json: any): Application {
    return ApplicationFromJSONTyped(json, false);
}

export function ApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Application {
    if (json == null) {
        return json;
    }
    return {
        
        'application_id': json['application_id'],
        'name': json['name'],
        'display_name': json['display_name'],
        'join_date': (new Date(json['join_date'])),
        'logo_url': json['logo_url'],
        'application_url': json['application_url'],
        'reason_for_access': json['reason_for_access'],
        'use_case': json['use_case'],
        'company_legal_name': json['company_legal_name'],
        'city': json['city'],
        'region': json['region'],
        'postal_code': json['postal_code'],
        'country_code': json['country_code'],
    };
}

export function ApplicationToJSON(value?: Application | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'application_id': value['application_id'],
        'name': value['name'],
        'display_name': value['display_name'],
        'join_date': ((value['join_date']).toISOString().substring(0,10)),
        'logo_url': value['logo_url'],
        'application_url': value['application_url'],
        'reason_for_access': value['reason_for_access'],
        'use_case': value['use_case'],
        'company_legal_name': value['company_legal_name'],
        'city': value['city'],
        'region': value['region'],
        'postal_code': value['postal_code'],
        'country_code': value['country_code'],
    };
}

