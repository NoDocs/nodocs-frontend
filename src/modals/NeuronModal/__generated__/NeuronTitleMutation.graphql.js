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
      +id: string,
      +name: ?string,
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
      id
      name
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
            "name": "name",
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
    "name": "NeuronTitleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NeuronTitleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5edd6b54bfe20acfdbc72ff9d7bb81e0",
    "id": null,
    "metadata": {},
    "name": "NeuronTitleMutation",
    "operationKind": "mutation",
    "text": "mutation NeuronTitleMutation(\n  $input: UpdateNeuronInput!\n) {\n  updateNeuron(input: $input) {\n    neuron {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f404959119a9d32117a9bd3400270b5f';

module.exports = node;
