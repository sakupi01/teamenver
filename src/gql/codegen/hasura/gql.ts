/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateTeam($name: String!) {\n  insert_teams(objects: {name: $name}) {\n    returning {\n      admin_id\n      name\n      id\n    }\n  }\n}\n\nmutation CreateBoard($is_public: Boolean!, $team_id: uuid!) {\n  insert_boards(objects: {is_public: $is_public, team_id: $team_id}) {\n    returning {\n      id\n      created_at\n      is_public\n      user_id\n      team_id\n    }\n  }\n}\n\nmutation CreateDetails($board_id: uuid!) {\n  insert_board_details(objects: {board_id: $board_id}) {\n    returning {\n      id\n      board_id\n    }\n  }\n}\n\nmutation UpdateDetails($id: uuid!, $changes: board_details_set_input) {\n  update_board_details(where: {id: {_eq: $id}}, _set: $changes) {\n    returning {\n      id\n    }\n  }\n}\n\nmutation InsertMessage($board_id: uuid!, $content: String!) {\n  insert_comments_one(object: {board_id: $board_id, content: $content}) {\n    id\n    content\n    updated_at\n    user {\n      id\n      name\n    }\n  }\n}\n\nmutation SetLastSeenTimestamp($userId: String!) {\n  update_users_by_pk(pk_columns: {id: $userId}, _set: {last_seen: \"now()\"}) {\n    id\n    updated_at\n    last_seen\n  }\n}": types.CreateTeamDocument,
    "query GetBoardLibraries {\n  board_details {\n    id\n    framework\n    css_library\n    ui_library\n  }\n}\n\nquery GetLastMessages($board_id: uuid, $from_ts: timestamptz) {\n  comments(\n    order_by: {updated_at: asc}\n    where: {updated_at: {_gte: $from_ts}, board_id: {_eq: $board_id}}\n  ) {\n    id\n    content\n    user {\n      name\n      id\n    }\n    board_id\n    updated_at\n  }\n}": types.GetBoardLibrariesDocument,
    "subscription SubscribeMessage($board_id: uuid) {\n  comments(\n    limit: 1\n    order_by: {updated_at: desc}\n    where: {board_id: {_eq: $board_id}}\n  ) {\n    id\n    content\n    user {\n      id\n      email\n    }\n    board_id\n    updated_at\n  }\n}": types.SubscribeMessageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateTeam($name: String!) {\n  insert_teams(objects: {name: $name}) {\n    returning {\n      admin_id\n      name\n      id\n    }\n  }\n}\n\nmutation CreateBoard($is_public: Boolean!, $team_id: uuid!) {\n  insert_boards(objects: {is_public: $is_public, team_id: $team_id}) {\n    returning {\n      id\n      created_at\n      is_public\n      user_id\n      team_id\n    }\n  }\n}\n\nmutation CreateDetails($board_id: uuid!) {\n  insert_board_details(objects: {board_id: $board_id}) {\n    returning {\n      id\n      board_id\n    }\n  }\n}\n\nmutation UpdateDetails($id: uuid!, $changes: board_details_set_input) {\n  update_board_details(where: {id: {_eq: $id}}, _set: $changes) {\n    returning {\n      id\n    }\n  }\n}\n\nmutation InsertMessage($board_id: uuid!, $content: String!) {\n  insert_comments_one(object: {board_id: $board_id, content: $content}) {\n    id\n    content\n    updated_at\n    user {\n      id\n      name\n    }\n  }\n}\n\nmutation SetLastSeenTimestamp($userId: String!) {\n  update_users_by_pk(pk_columns: {id: $userId}, _set: {last_seen: \"now()\"}) {\n    id\n    updated_at\n    last_seen\n  }\n}"): (typeof documents)["mutation CreateTeam($name: String!) {\n  insert_teams(objects: {name: $name}) {\n    returning {\n      admin_id\n      name\n      id\n    }\n  }\n}\n\nmutation CreateBoard($is_public: Boolean!, $team_id: uuid!) {\n  insert_boards(objects: {is_public: $is_public, team_id: $team_id}) {\n    returning {\n      id\n      created_at\n      is_public\n      user_id\n      team_id\n    }\n  }\n}\n\nmutation CreateDetails($board_id: uuid!) {\n  insert_board_details(objects: {board_id: $board_id}) {\n    returning {\n      id\n      board_id\n    }\n  }\n}\n\nmutation UpdateDetails($id: uuid!, $changes: board_details_set_input) {\n  update_board_details(where: {id: {_eq: $id}}, _set: $changes) {\n    returning {\n      id\n    }\n  }\n}\n\nmutation InsertMessage($board_id: uuid!, $content: String!) {\n  insert_comments_one(object: {board_id: $board_id, content: $content}) {\n    id\n    content\n    updated_at\n    user {\n      id\n      name\n    }\n  }\n}\n\nmutation SetLastSeenTimestamp($userId: String!) {\n  update_users_by_pk(pk_columns: {id: $userId}, _set: {last_seen: \"now()\"}) {\n    id\n    updated_at\n    last_seen\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetBoardLibraries {\n  board_details {\n    id\n    framework\n    css_library\n    ui_library\n  }\n}\n\nquery GetLastMessages($board_id: uuid, $from_ts: timestamptz) {\n  comments(\n    order_by: {updated_at: asc}\n    where: {updated_at: {_gte: $from_ts}, board_id: {_eq: $board_id}}\n  ) {\n    id\n    content\n    user {\n      name\n      id\n    }\n    board_id\n    updated_at\n  }\n}"): (typeof documents)["query GetBoardLibraries {\n  board_details {\n    id\n    framework\n    css_library\n    ui_library\n  }\n}\n\nquery GetLastMessages($board_id: uuid, $from_ts: timestamptz) {\n  comments(\n    order_by: {updated_at: asc}\n    where: {updated_at: {_gte: $from_ts}, board_id: {_eq: $board_id}}\n  ) {\n    id\n    content\n    user {\n      name\n      id\n    }\n    board_id\n    updated_at\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription SubscribeMessage($board_id: uuid) {\n  comments(\n    limit: 1\n    order_by: {updated_at: desc}\n    where: {board_id: {_eq: $board_id}}\n  ) {\n    id\n    content\n    user {\n      id\n      email\n    }\n    board_id\n    updated_at\n  }\n}"): (typeof documents)["subscription SubscribeMessage($board_id: uuid) {\n  comments(\n    limit: 1\n    order_by: {updated_at: desc}\n    where: {board_id: {_eq: $board_id}}\n  ) {\n    id\n    content\n    user {\n      id\n      email\n    }\n    board_id\n    updated_at\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;