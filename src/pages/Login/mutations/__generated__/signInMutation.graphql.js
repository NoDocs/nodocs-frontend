/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInInput = {|
  email: string,
  password: string,
  clientMutationId?: ?string,
|};
export type signInMutationVariables = {|
  input: SignInInput
|};
export type signInMutationResponse = {|
  +signIn: ?{|
    +clientMutationId: ?string,
    +user: ?{|
      +id: string,
      +fullName: ?string,
      +token: ?string,
      +email: ?string,
    |},
  |}
|};
export type signInMutation = {|
  variables: signInMutationVariables,
  response: signInMutationResponse,
|};
*/


/*
mutation signInMutation(
  $input: SignInInput!
) {
  signIn(input: $input) {
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
    "concreteType": "SignInPayload",
    "kind": "LinkedField",
    "name": "signIn",
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
    "name": "signInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0c9f33f6f5510083aa6f7a43f0d6ab8d",
    "id": null,
    "metadata": {},
    "name": "signInMutation",
    "operationKind": "mutation",
    "text": "mutation signInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    clientMutationId\n    user {\n      id\n      fullName\n      token\n      email\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '198736c931382786b2283e7e4201175a';

module.exports = node;
