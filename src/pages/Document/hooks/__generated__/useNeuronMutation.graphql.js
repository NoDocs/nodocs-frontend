/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SwitchAssetInput = {|
  neuronId: string,
  file?: ?any,
  clientMutationId?: ?string,
|};
export type useNeuronMutationVariables = {|
  input: SwitchAssetInput
|};
export type useNeuronMutationResponse = {|
  +switchAsset: ?{|
    +neuron: ?{|
      +id: string,
      +file: ?{|
        +url: ?string
      |},
    |}
  |}
|};
export type useNeuronMutation = {|
  variables: useNeuronMutationVariables,
  response: useNeuronMutationResponse,
|};
*/


/*
mutation useNeuronMutation(
  $input: SwitchAssetInput!
) {
  switchAsset(input: $input) {
    neuron {
      id
      file {
        url
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
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useNeuronMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SwitchAssetPayload",
        "kind": "LinkedField",
        "name": "switchAsset",
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "File",
                "kind": "LinkedField",
                "name": "file",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useNeuronMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SwitchAssetPayload",
        "kind": "LinkedField",
        "name": "switchAsset",
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "File",
                "kind": "LinkedField",
                "name": "file",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "44e2844d24350a8d500416079049713e",
    "id": null,
    "metadata": {},
    "name": "useNeuronMutation",
    "operationKind": "mutation",
    "text": "mutation useNeuronMutation(\n  $input: SwitchAssetInput!\n) {\n  switchAsset(input: $input) {\n    neuron {\n      id\n      file {\n        url\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17486daac73dd0564f356ec246453452';

module.exports = node;
