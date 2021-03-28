/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpInput = {|
  email: string,
  fullName: string,
  password: string,
  clientMutationId?: ?string,
|};
export type RegisterFormMutationVariables = {|
  input: SignUpInput
|};
export type RegisterFormMutationResponse = {|
  +signUp: ?{|
    +clientMutationId: ?string,
    +user: ?{|
      +id: string,
      +fullName: ?string,
      +token: ?string,
      +email: ?string,
    |},
  |}
|};
export type RegisterFormMutation = {|
  variables: RegisterFormMutationVariables,
  response: RegisterFormMutationResponse,
|};
*/


/*
mutation RegisterFormMutation(
  $input: SignUpInput!
) {
  signUp(input: $input) {
    clientMutationId
    user {
      id
      fullName
      token
      email
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SignUpPayload",
    "kind": "LinkedField",
    "name": "signUp",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fullName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "token",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "58bf2985683f0a5f2a9c01e0465b003e",
    "id": null,
    "metadata": {},
    "name": "RegisterFormMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterFormMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    clientMutationId\n    user {\n      id\n      fullName\n      token\n      email\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '51241165848735e8dde5c8bdd7f16420';

module.exports = node;
