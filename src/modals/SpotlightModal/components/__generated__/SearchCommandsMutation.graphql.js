/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateLiveComponentInput = {|
  type: string,
  query: string,
  clientMutationId?: ?string,
|};
export type SearchCommandsMutationVariables = {|
  input: CreateLiveComponentInput
|};
export type SearchCommandsMutationResponse = {|
  +createLiveComponent: ?{|
    +neuron: ?{|
      +id: string,
      +neuronId: ?string,
    |}
  |}
|};
export type SearchCommandsMutation = {|
  variables: SearchCommandsMutationVariables,
  response: SearchCommandsMutationResponse,
|};
*/


/*
mutation SearchCommandsMutation(
  $input: CreateLiveComponentInput!
) {
  createLiveComponent(input: $input) {
    neuron {
      id
      neuronId
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
    "concreteType": "CreateLiveComponentPayload",
    "kind": "LinkedField",
    "name": "createLiveComponent",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Neuron",
        "kind": "LinkedField",
        "name": "neuron",
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
            "name": "neuronId",
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
    "name": "SearchCommandsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchCommandsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0ceb916e647cdeebc14fcc2ea8435588",
    "id": null,
    "metadata": {},
    "name": "SearchCommandsMutation",
    "operationKind": "mutation",
    "text": "mutation SearchCommandsMutation(\n  $input: CreateLiveComponentInput!\n) {\n  createLiveComponent(input: $input) {\n    neuron {\n      id\n      neuronId\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '770c06b04578a16426b151ced996ddbf';

module.exports = node;
