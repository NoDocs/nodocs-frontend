/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useNeuronQueryVariables = {|
  neuronId: string
|};
export type useNeuronQueryResponse = {|
  +neuron: ?{|
    +id: string,
    +content: ?string,
    +neuronId: ?string,
    +name: ?string,
  |},
  +me: ?{|
    +color: ?string,
    +fullName: ?string,
  |},
|};
export type useNeuronQuery = {|
  variables: useNeuronQueryVariables,
  response: useNeuronQueryResponse,
|};
*/


/*
query useNeuronQuery(
  $neuronId: String!
) {
  neuron(neuronId: $neuronId) {
    id
    content
    neuronId
    name
  }
  me {
    color
    fullName
    id
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
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
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "neuronId",
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useNeuronQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useNeuronQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d0334d8e69cd881449ba51330122c6a5",
    "id": null,
    "metadata": {},
    "name": "useNeuronQuery",
    "operationKind": "query",
    "text": "query useNeuronQuery(\n  $neuronId: String!\n) {\n  neuron(neuronId: $neuronId) {\n    id\n    content\n    neuronId\n    name\n  }\n  me {\n    color\n    fullName\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '044f063612caab233726866f82a93951';

module.exports = node;
