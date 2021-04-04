/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SendInvitationsInput = {|
  emails: string,
  clientMutationId?: ?string,
|};
export type InviteTeamMembersModalMutationVariables = {|
  input: SendInvitationsInput
|};
export type InviteTeamMembersModalMutationResponse = {|
  +sendInvitations: ?{|
    +teamMembers: ?$ReadOnlyArray<?{|
      +id: string,
      +user: ?{|
        +email: ?string
      |},
    |}>
  |}
|};
export type InviteTeamMembersModalMutation = {|
  variables: InviteTeamMembersModalMutationVariables,
  response: InviteTeamMembersModalMutationResponse,
|};
*/


/*
mutation InviteTeamMembersModalMutation(
  $input: SendInvitationsInput!
) {
  sendInvitations(input: $input) {
    teamMembers {
      id
      user {
        email
        id
      }
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InviteTeamMembersModalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SendInvitationsPayload",
        "kind": "LinkedField",
        "name": "sendInvitations",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TeamMember",
            "kind": "LinkedField",
            "name": "teamMembers",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InviteTeamMembersModalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SendInvitationsPayload",
        "kind": "LinkedField",
        "name": "sendInvitations",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TeamMember",
            "kind": "LinkedField",
            "name": "teamMembers",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "672d66b287dc968adb081c1dab866f68",
    "id": null,
    "metadata": {},
    "name": "InviteTeamMembersModalMutation",
    "operationKind": "mutation",
    "text": "mutation InviteTeamMembersModalMutation(\n  $input: SendInvitationsInput!\n) {\n  sendInvitations(input: $input) {\n    teamMembers {\n      id\n      user {\n        email\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8a3ecb47f195b4026f859adcbe57a84';

module.exports = node;
