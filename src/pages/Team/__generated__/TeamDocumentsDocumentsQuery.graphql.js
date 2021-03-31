/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamDocumentsDocumentsQueryVariables = {|
  teamId: string
|};
export type TeamDocumentsDocumentsQueryResponse = {|
  +documents: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +createdAt: ?string,
    +owner: ?{|
      +id: string,
      +avatar: ?string,
      +color: ?string,
      +fullName: ?string,
    |},
  |}>
|};
export type TeamDocumentsDocumentsQuery = {|
  variables: TeamDocumentsDocumentsQueryVariables,
  response: TeamDocumentsDocumentsQueryResponse,
|};
*/


/*
query TeamDocumentsDocumentsQuery(
  $teamId: String!
) {
  documents(teamId: $teamId) {
    id
    name
    createdAt(format: "MMM D")
    owner {
      id
      avatar
      color
      fullName
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "teamId",
        "variableName": "teamId"
      }
    ],
    "concreteType": "Document",
    "kind": "LinkedField",
    "name": "documents",
    "plural": true,
    "selections": [
      (v1/*: any*/),
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
          (v1/*: any*/),
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
    "name": "TeamDocumentsDocumentsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TeamDocumentsDocumentsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e583a70db83c7c6dea21f1e79298be71",
    "id": null,
    "metadata": {},
    "name": "TeamDocumentsDocumentsQuery",
    "operationKind": "query",
    "text": "query TeamDocumentsDocumentsQuery(\n  $teamId: String!\n) {\n  documents(teamId: $teamId) {\n    id\n    name\n    createdAt(format: \"MMM D\")\n    owner {\n      id\n      avatar\n      color\n      fullName\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f465f4cfd9331b35cb1e73c351dc2b8a';

module.exports = node;
