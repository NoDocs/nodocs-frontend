/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useDocumentQueryVariables = {|
  documentId: string
|};
export type useDocumentQueryResponse = {|
  +document: ?{|
    +id: string,
    +sections: ?$ReadOnlyArray<?{|
      +id: string,
      +pages: ?$ReadOnlyArray<?{|
        +id: string,
        +title: ?string,
        +pageId: ?string,
        +content: ?string,
      |}>,
    |}>,
  |},
  +me: ?{|
    +color: ?string,
    +fullName: ?string,
  |},
|};
export type useDocumentQuery = {|
  variables: useDocumentQueryVariables,
  response: useDocumentQueryResponse,
|};
*/


/*
query useDocumentQuery(
  $documentId: String!
) {
  document(documentId: $documentId) {
    id
    sections {
      id
      pages {
        id
        title
        pageId
        content
      }
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
    "name": "documentId"
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
      "name": "documentId",
      "variableName": "documentId"
    }
  ],
  "concreteType": "Document",
  "kind": "LinkedField",
  "name": "document",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Section",
      "kind": "LinkedField",
      "name": "sections",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "pages",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "pageId",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "content",
              "storageKey": null
            }
          ],
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
    "name": "useDocumentQuery",
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
    "name": "useDocumentQuery",
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
    "cacheID": "b2f9623f4a290ebfe98cfdfadfaec101",
    "id": null,
    "metadata": {},
    "name": "useDocumentQuery",
    "operationKind": "query",
    "text": "query useDocumentQuery(\n  $documentId: String!\n) {\n  document(documentId: $documentId) {\n    id\n    sections {\n      id\n      pages {\n        id\n        title\n        pageId\n        content\n      }\n    }\n  }\n  me {\n    color\n    fullName\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fb78862c3b282e693725027f88998c27';

module.exports = node;
