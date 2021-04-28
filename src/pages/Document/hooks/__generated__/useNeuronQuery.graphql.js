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
    "cacheID": "02e120210bbd3cfe71d488d989a56514",
    "id": null,
    "metadata": {},
    "name": "useNeuronQuery",
    "operationKind": "query",
    "text": "query useNeuronQuery(\n  $neuronId: String!\n) {\n  neuron(neuronId: $neuronId) {\n    id\n    type\n    content\n    neuronId\n    name\n    file {\n      id\n      url\n    }\n  }\n  me {\n    color\n    fullName\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7d2cfdf888ee55ea7e9b6fd2c361dc48';

module.exports = node;
