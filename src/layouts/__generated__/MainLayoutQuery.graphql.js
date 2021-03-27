/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MainLayoutQueryVariables = {||};
export type MainLayoutQueryResponse = {|
  +me: ?{|
    +id: string,
    +fullName: ?string,
    +email: ?string,
  |}
|};
export type MainLayoutQuery = {|
  variables: MainLayoutQueryVariables,
  response: MainLayoutQueryResponse,
|};
*/


/*
query MainLayoutQuery {
  me {
    id
    fullName
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
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
        "name": "fullName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainLayoutQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainLayoutQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "340ac138896b87bb7b2ea1ec4c0a19a7",
    "id": null,
    "metadata": {},
    "name": "MainLayoutQuery",
    "operationKind": "query",
    "text": "query MainLayoutQuery {\n  me {\n    id\n    fullName\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0d31c0a9565d9d087461e093278f6ed5';

module.exports = node;
