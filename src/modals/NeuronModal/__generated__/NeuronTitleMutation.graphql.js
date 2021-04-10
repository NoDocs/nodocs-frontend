/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateNeuronInput = {|
  neuronId: string,
  name: string,
  clientMutationId?: ?string,
|};
export type NeuronTitleMutationVariables = {|
  input: UpdateNeuronInput
|};
export type NeuronTitleMutationResponse = {|
  +updateNeuron: ?{|
    +neuron: ?{|
      +name: ?string
    |}
  |}
|};
export type NeuronTitleMutation = {|
  variables: NeuronTitleMutationVariables,
  response: NeuronTitleMutationResponse,
|};
*/


/*
mutation NeuronTitleMutation(
  $input: UpdateNeuronInput!
) {
  updateNeuron(input: $input) {
    neuron {
      name
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NeuronTitleMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateNeuronPayload",
        "kind": "LinkedField",
        "name": "updateNeuron",
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
              (v2/*: any*/)
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
    "name": "NeuronTitleMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateNeuronPayload",
        "kind": "LinkedField",
        "name": "updateNeuron",
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
    ]
  },
  "params": {
    "cacheID": "aa5bf262bd2d47fc693a064784d00233",
    "id": null,
    "metadata": {},
    "name": "NeuronTitleMutation",
    "operationKind": "mutation",
    "text": "mutation NeuronTitleMutation(\n  $input: UpdateNeuronInput!\n) {\n  updateNeuron(input: $input) {\n    neuron {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a28819ea8ee395cd82136a12b5ab491c';

module.exports = node;
