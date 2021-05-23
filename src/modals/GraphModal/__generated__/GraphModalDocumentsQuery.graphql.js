/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GraphModalDocumentsQueryVariables = {|
  teamId: string
|};
export type GraphModalDocumentsQueryResponse = {|
  +documents: ?{|
    +__id: string,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +createdAt: ?string,
        +owner: ?{|
          +id: string,
          +avatar: ?string,
          +color: ?string,
          +fullName: ?string,
        |},
      |}
    |}>,
  |}
|};
export type GraphModalDocumentsQuery = {|
  variables: GraphModalDocumentsQueryVariables,
  response: GraphModalDocumentsQueryResponse,
|};
*/


/*
query GraphModalDocumentsQuery(
  $teamId: String!
) {
  documents(first: 2147483647, teamId: $teamId) {
    edges {
      node {
        id
        name
        createdAt(format: "MMM D")
        owner {
          id
          avatar
          color
          fullName
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "teamId"
  }
],
v1 = {
  "kind": "Variable",
  "name": "teamId",
  "variableName": "teamId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DocumentEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Document",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "MMM D"
              }
            ],
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": "createdAt(format:\"MMM D\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatar",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "color",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__id",
        "storageKey": null
      }
    ]
  }
],
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  },
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GraphModalDocumentsQuery",
    "selections": [
      {
        "alias": "documents",
        "args": [
          (v1/*: any*/)
        ],
        "concreteType": "DocumentConnection",
        "kind": "LinkedField",
        "name": "__Team_documents_connection",
        "plural": false,
        "selections": (v3/*: any*/),
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
    "name": "GraphModalDocumentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "DocumentConnection",
        "kind": "LinkedField",
        "name": "documents",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "filters": [
          "teamId"
        ],
        "handle": "connection",
        "key": "Team_documents",
        "kind": "LinkedHandle",
        "name": "documents"
      }
    ]
  },
  "params": {
    "cacheID": "73fc7b0e70fba57d595bf8ad93527e36",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "documents"
          ]
        }
      ]
    },
    "name": "GraphModalDocumentsQuery",
    "operationKind": "query",
    "text": "query GraphModalDocumentsQuery(\n  $teamId: String!\n) {\n  documents(first: 2147483647, teamId: $teamId) {\n    edges {\n      node {\n        id\n        name\n        createdAt(format: \"MMM D\")\n        owner {\n          id\n          avatar\n          color\n          fullName\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '56e2ef60ae9293f77e34e8e5a6a25363';

module.exports = node;
