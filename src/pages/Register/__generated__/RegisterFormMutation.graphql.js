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
      +currentCompany: ?{|
        +id: string
      |},
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
      currentCompany {
        id
      }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
          (v1/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "currentCompany",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
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
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterFormMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bf5615267e11027f3f2a67289414c630",
    "id": null,
    "metadata": {},
    "name": "RegisterFormMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterFormMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    clientMutationId\n    user {\n      id\n      fullName\n      token\n      email\n      currentCompany {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'adc4aa2fe6f40ed2ac11a7dd2cdc23b7';

module.exports = node;
