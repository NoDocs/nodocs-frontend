/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateAssetInput = {|
  pageId: string,
  file?: ?any,
  clientMutationId?: ?string,
|};
export type createAssetMutationVariables = {|
  input: CreateAssetInput
|};
export type createAssetMutationResponse = {|
  +createAsset: ?{|
    +clientMutationId: ?string,
    +neuron: ?{|
      +id: string,
      +neuronId: ?string,
    |},
  |}
|};
export type createAssetMutation = {|
  variables: createAssetMutationVariables,
  response: createAssetMutationResponse,
|};
*/


/*
mutation createAssetMutation(
  $input: CreateAssetInput!
) {
  createAsset(input: $input) {
    clientMutationId
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
    "concreteType": "CreateAssetPayload",
    "kind": "LinkedField",
    "name": "createAsset",
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
    "name": "createAssetMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createAssetMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "38376d49e21551d0632c6c2dc145e5b8",
    "id": null,
    "metadata": {},
    "name": "createAssetMutation",
    "operationKind": "mutation",
    "text": "mutation createAssetMutation(\n  $input: CreateAssetInput!\n) {\n  createAsset(input: $input) {\n    clientMutationId\n    neuron {\n      id\n      neuronId\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '290fc30b80fdc3ba5e85a0efc050f499';

module.exports = node;
