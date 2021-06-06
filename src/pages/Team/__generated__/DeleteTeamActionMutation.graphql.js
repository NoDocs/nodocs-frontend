/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTeamInput = {|
  teamId: string,
  clientMutationId?: ?string,
|};
export type DeleteTeamActionMutationVariables = {|
  input: DeleteTeamInput
|};
export type DeleteTeamActionMutationResponse = {|
  +deleteTeam: ?{|
    +switchedTeam: ?{|
      +id: string
    |},
    +deletedTeam: ?{|
      +id: string
    |},
  |}
|};
export type DeleteTeamActionMutation = {|
  variables: DeleteTeamActionMutationVariables,
  response: DeleteTeamActionMutationResponse,
|};
*/


/*
mutation DeleteTeamActionMutation(
  $input: DeleteTeamInput!
) {
  deleteTeam(input: $input) {
    switchedTeam {
      id
    }
    deletedTeam {
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
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteTeamPayload",
    "kind": "LinkedField",
    "name": "deleteTeam",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Team",
        "kind": "LinkedField",
        "name": "switchedTeam",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Team",
        "kind": "LinkedField",
        "name": "deletedTeam",
        "plural": false,
        "selections": (v1/*: any*/),
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
    "name": "DeleteTeamActionMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTeamActionMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5f1557b5b83887cc4de9b9e994a89af8",
    "id": null,
    "metadata": {},
    "name": "DeleteTeamActionMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTeamActionMutation(\n  $input: DeleteTeamInput!\n) {\n  deleteTeam(input: $input) {\n    switchedTeam {\n      id\n    }\n    deletedTeam {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c631ab341db009f612e6c813360d5abf';

module.exports = node;
