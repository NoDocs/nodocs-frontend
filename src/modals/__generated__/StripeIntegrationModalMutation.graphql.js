/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ActivateIntegrationInput = {|
  type: string,
  key: string,
  clientMutationId?: ?string,
|};
export type StripeIntegrationModalMutationVariables = {|
  input: ActivateIntegrationInput
|};
export type StripeIntegrationModalMutationResponse = {|
  +activateIntegration: ?{|
    +integration: ?{|
      +id: string,
      +type: ?string,
      +key: ?string,
    |}
  |}
|};
export type StripeIntegrationModalMutation = {|
  variables: StripeIntegrationModalMutationVariables,
  response: StripeIntegrationModalMutationResponse,
|};
*/


/*
mutation StripeIntegrationModalMutation(
  $input: ActivateIntegrationInput!
) {
  activateIntegration(input: $input) {
    integration {
      id
      type
      key
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
    "concreteType": "ActivateIntegrationPayload",
    "kind": "LinkedField",
    "name": "activateIntegration",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Integration",
        "kind": "LinkedField",
        "name": "integration",
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
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "key",
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
    "name": "StripeIntegrationModalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StripeIntegrationModalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5360190dd394728a3524fcad43c11e44",
    "id": null,
    "metadata": {},
    "name": "StripeIntegrationModalMutation",
    "operationKind": "mutation",
    "text": "mutation StripeIntegrationModalMutation(\n  $input: ActivateIntegrationInput!\n) {\n  activateIntegration(input: $input) {\n    integration {\n      id\n      type\n      key\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ed26b212e296f7901646f2036acb71f0';

module.exports = node;
