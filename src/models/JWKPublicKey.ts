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
 * A JSON Web Key (JWK) that can be used in conjunction with [JWT libraries](https://jwt.io/#libraries-io) to verify Plaid webhooks
 * @export
 * @interface JWKPublicKey
 */
export interface JWKPublicKey {
    [key: string]: any | any;
    /**
     * The alg member identifies the cryptographic algorithm family used with the key.
     * @type {string}
     * @memberof JWKPublicKey
     */
    alg: string;
    /**
     * The crv member identifies the cryptographic curve used with the key.
     * @type {string}
     * @memberof JWKPublicKey
     */
    crv: string;
    /**
     * The kid (Key ID) member can be used to match a specific key. This can be used, for instance, to choose among a set of keys within the JWK during key rollover.
     * @type {string}
     * @memberof JWKPublicKey
     */
    kid: string;
    /**
     * The kty (key type) parameter identifies the cryptographic algorithm family used with the key, such as RSA or EC.
     * @type {string}
     * @memberof JWKPublicKey
     */
    kty: string;
    /**
     * The use (public key use) parameter identifies the intended use of the public key.
     * @type {string}
     * @memberof JWKPublicKey
     */
    use: string;
    /**
     * The x member contains the x coordinate for the elliptic curve point, provided as a base64url-encoded string of the coordinate's big endian representation.
     * @type {string}
     * @memberof JWKPublicKey
     */
    x: string;
    /**
     * The y member contains the y coordinate for the elliptic curve point, provided as a base64url-encoded string of the coordinate's big endian representation.
     * @type {string}
     * @memberof JWKPublicKey
     */
    y: string;
    /**
     * The timestamp when the key was created, in Unix time.
     * @type {number}
     * @memberof JWKPublicKey
     */
    created_at: number;
    /**
     * The timestamp when the key expired, in Unix time.
     * @type {number}
     * @memberof JWKPublicKey
     */
    expired_at: number | null;
}

/**
 * Check if a given object implements the JWKPublicKey interface.
 */
export function instanceOfJWKPublicKey(value: object): boolean {
    if (!('alg' in value)) return false;
    if (!('crv' in value)) return false;
    if (!('kid' in value)) return false;
    if (!('kty' in value)) return false;
    if (!('use' in value)) return false;
    if (!('x' in value)) return false;
    if (!('y' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('expired_at' in value)) return false;
    return true;
}

export function JWKPublicKeyFromJSON(json: any): JWKPublicKey {
    return JWKPublicKeyFromJSONTyped(json, false);
}

export function JWKPublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): JWKPublicKey {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'alg': json['alg'],
        'crv': json['crv'],
        'kid': json['kid'],
        'kty': json['kty'],
        'use': json['use'],
        'x': json['x'],
        'y': json['y'],
        'created_at': json['created_at'],
        'expired_at': json['expired_at'],
    };
}

export function JWKPublicKeyToJSON(value?: JWKPublicKey | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'alg': value['alg'],
        'crv': value['crv'],
        'kid': value['kid'],
        'kty': value['kty'],
        'use': value['use'],
        'x': value['x'],
        'y': value['y'],
        'created_at': value['created_at'],
        'expired_at': value['expired_at'],
    };
}

