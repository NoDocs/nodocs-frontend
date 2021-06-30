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
    +type: ?string,
    +content: ?string,
    +live: ?boolean,
    +neuronId: ?string,
    +name: ?string,
    +file: ?{|
      +id: string,
      +url: ?string,
    |},
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
    type
    content
    live
    neuronId
    name
    file {
      id
      url
    }
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
      "name": "type",
      "storageKey": null
    },
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
      "name": "live",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "File",
      "kind": "LinkedField",
      "name": "file",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
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
    "cacheID": "e4a93a9c55913df4e7cd4eed4470c648",
    "id": null,
    "metadata": {},
    "name": "useNeuronQuery",
    "operationKind": "query",
    "text": "query useNeuronQuery(\n  $neuronId: String!\n) {\n  neuron(neuronId: $neuronId) {\n    id\n    type\n    content\n    live\n    neuronId\n    name\n    file {\n      id\n      url\n    }\n  }\n  me {\n    color\n    fullName\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '184a31baa030e0b0edeab99f6b26ce3d';

module.exports = node;
