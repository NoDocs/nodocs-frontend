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
      +id: string
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "name": "useNeuronMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useNeuronMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cfb9abbe5584097bc9da79b1b517c3cb",
    "id": null,
    "metadata": {},
    "name": "useNeuronMutation",
    "operationKind": "mutation",
    "text": "mutation useNeuronMutation(\n  $input: SwitchAssetInput!\n) {\n  switchAsset(input: $input) {\n    neuron {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b5145a966b24676f31716dbfb0d5de90';

module.exports = node;
