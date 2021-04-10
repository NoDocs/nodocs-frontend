/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NeuronTitleQueryVariables = {|
  neuronId: string
|};
export type NeuronTitleQueryResponse = {|
  +neuron: ?{|
    +id: string,
    +name: ?string,
  |}
|};
export type NeuronTitleQuery = {|
  variables: NeuronTitleQueryVariables,
  response: NeuronTitleQueryResponse,
|};
*/


/*
query NeuronTitleQuery(
  $neuronId: String!
) {
  neuron(neuronId: $neuronId) {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "neuronId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "neuronId",
        "variableName": "neuronId"
      }
    ],
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NeuronTitleQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NeuronTitleQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cfd11a7ea441c34454e5e101956cd0b4",
    "id": null,
    "metadata": {},
    "name": "NeuronTitleQuery",
    "operationKind": "query",
    "text": "query NeuronTitleQuery(\n  $neuronId: String!\n) {\n  neuron(neuronId: $neuronId) {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '91398c01f76c0c7a8132c13c789a8b8a';

module.exports = node;
