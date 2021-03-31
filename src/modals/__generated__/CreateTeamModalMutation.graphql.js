/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTeamInput = {|
  name: string,
  industry: string,
  clientMutationId?: ?string,
|};
export type CreateTeamModalMutationVariables = {|
  input: CreateTeamInput
|};
export type CreateTeamModalMutationResponse = {|
  +createTeam: ?{|
    +team: ?{|
      +id: string
    |}
  |}
|};
export type CreateTeamModalMutation = {|
  variables: CreateTeamModalMutationVariables,
  response: CreateTeamModalMutationResponse,
|};
*/


/*
mutation CreateTeamModalMutation(
  $input: CreateTeamInput!
) {
  createTeam(input: $input) {
    team {
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateTeamPayload",
    "kind": "LinkedField",
    "name": "createTeam",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Team",
        "kind": "LinkedField",
        "name": "team",
        "plural": false,
        "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateTeamModalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTeamModalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6f5b3edc3282e792bf86ed0648c893a5",
    "id": null,
    "metadata": {},
    "name": "CreateTeamModalMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTeamModalMutation(\n  $input: CreateTeamInput!\n) {\n  createTeam(input: $input) {\n    team {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '500892803dabf65d5a6230bc6af6b6fa';

module.exports = node;
