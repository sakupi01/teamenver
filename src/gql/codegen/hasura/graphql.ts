/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** collection of agreements. It's co-created when a user joined a team. */
export type Agreements = {
  __typename?: 'agreements';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  is_agreed: Scalars['Boolean']['output'];
  /** An object relationship */
  team_board: Team_Boards;
  team_board_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "agreements" */
export type Agreements_Aggregate = {
  __typename?: 'agreements_aggregate';
  aggregate?: Maybe<Agreements_Aggregate_Fields>;
  nodes: Array<Agreements>;
};

export type Agreements_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Agreements_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Agreements_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Agreements_Aggregate_Bool_Exp_Count>;
};

export type Agreements_Aggregate_Bool_Exp_Bool_And = {
  arguments: Agreements_Select_Column_Agreements_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Agreements_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agreements_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Agreements_Select_Column_Agreements_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Agreements_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Agreements_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agreements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Agreements_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "agreements" */
export type Agreements_Aggregate_Fields = {
  __typename?: 'agreements_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Agreements_Max_Fields>;
  min?: Maybe<Agreements_Min_Fields>;
};


/** aggregate fields of "agreements" */
export type Agreements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agreements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "agreements" */
export type Agreements_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agreements_Max_Order_By>;
  min?: InputMaybe<Agreements_Min_Order_By>;
};

/** input type for inserting array relation for remote table "agreements" */
export type Agreements_Arr_Rel_Insert_Input = {
  data: Array<Agreements_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Agreements_On_Conflict>;
};

/** Boolean expression to filter rows from the table "agreements". All fields are combined with a logical 'AND'. */
export type Agreements_Bool_Exp = {
  _and?: InputMaybe<Array<Agreements_Bool_Exp>>;
  _not?: InputMaybe<Agreements_Bool_Exp>;
  _or?: InputMaybe<Array<Agreements_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_agreed?: InputMaybe<Boolean_Comparison_Exp>;
  team_board?: InputMaybe<Team_Boards_Bool_Exp>;
  team_board_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "agreements" */
export enum Agreements_Constraint {
  /** unique or primary key constraint on columns "id" */
  AgreementsPkey = 'agreements_pkey',
  /** unique or primary key constraint on columns "team_board_id", "user_id" */
  AgreementsUserIdTeamBoardIdKey = 'agreements_user_id_team_board_id_key'
}

/** input type for inserting data into table "agreements" */
export type Agreements_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_agreed?: InputMaybe<Scalars['Boolean']['input']>;
  team_board?: InputMaybe<Team_Boards_Obj_Rel_Insert_Input>;
  team_board_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Agreements_Max_Fields = {
  __typename?: 'agreements_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  team_board_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "agreements" */
export type Agreements_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_board_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Agreements_Min_Fields = {
  __typename?: 'agreements_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  team_board_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "agreements" */
export type Agreements_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_board_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "agreements" */
export type Agreements_Mutation_Response = {
  __typename?: 'agreements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Agreements>;
};

/** on_conflict condition type for table "agreements" */
export type Agreements_On_Conflict = {
  constraint: Agreements_Constraint;
  update_columns?: Array<Agreements_Update_Column>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};

/** Ordering options when selecting data from "agreements". */
export type Agreements_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_agreed?: InputMaybe<Order_By>;
  team_board?: InputMaybe<Team_Boards_Order_By>;
  team_board_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: agreements */
export type Agreements_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "agreements" */
export enum Agreements_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsAgreed = 'is_agreed',
  /** column name */
  TeamBoardId = 'team_board_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "agreements_aggregate_bool_exp_bool_and_arguments_columns" columns of table "agreements" */
export enum Agreements_Select_Column_Agreements_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAgreed = 'is_agreed'
}

/** select "agreements_aggregate_bool_exp_bool_or_arguments_columns" columns of table "agreements" */
export enum Agreements_Select_Column_Agreements_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAgreed = 'is_agreed'
}

/** input type for updating data in table "agreements" */
export type Agreements_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_agreed?: InputMaybe<Scalars['Boolean']['input']>;
  team_board_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "agreements" */
export type Agreements_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agreements_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agreements_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_agreed?: InputMaybe<Scalars['Boolean']['input']>;
  team_board_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "agreements" */
export enum Agreements_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsAgreed = 'is_agreed',
  /** column name */
  TeamBoardId = 'team_board_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Agreements_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Agreements_Set_Input>;
  /** filter the rows which have to be updated */
  where: Agreements_Bool_Exp;
};

export type Auth0_Profile = {
  __typename?: 'auth0_profile';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** collection of each board detail */
export type Board_Details = {
  __typename?: 'board_details';
  /** An object relationship */
  board: Boards;
  board_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  css_library?: Maybe<Scalars['String']['output']>;
  formatter?: Maybe<Scalars['String']['output']>;
  framework?: Maybe<Scalars['String']['output']>;
  hygen?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isGit?: Maybe<Scalars['String']['output']>;
  lint_staged_husky?: Maybe<Scalars['String']['output']>;
  linter?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Scalars['String']['output']>;
  ui_library?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  volta?: Maybe<Scalars['String']['output']>;
  vscode?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "board_details" */
export type Board_Details_Aggregate = {
  __typename?: 'board_details_aggregate';
  aggregate?: Maybe<Board_Details_Aggregate_Fields>;
  nodes: Array<Board_Details>;
};

/** aggregate fields of "board_details" */
export type Board_Details_Aggregate_Fields = {
  __typename?: 'board_details_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Board_Details_Max_Fields>;
  min?: Maybe<Board_Details_Min_Fields>;
};


/** aggregate fields of "board_details" */
export type Board_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Board_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "board_details". All fields are combined with a logical 'AND'. */
export type Board_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Board_Details_Bool_Exp>>;
  _not?: InputMaybe<Board_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Board_Details_Bool_Exp>>;
  board?: InputMaybe<Boards_Bool_Exp>;
  board_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  css_library?: InputMaybe<String_Comparison_Exp>;
  formatter?: InputMaybe<String_Comparison_Exp>;
  framework?: InputMaybe<String_Comparison_Exp>;
  hygen?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isGit?: InputMaybe<String_Comparison_Exp>;
  lint_staged_husky?: InputMaybe<String_Comparison_Exp>;
  linter?: InputMaybe<String_Comparison_Exp>;
  manager?: InputMaybe<String_Comparison_Exp>;
  ui_library?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  volta?: InputMaybe<String_Comparison_Exp>;
  vscode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "board_details" */
export enum Board_Details_Constraint {
  /** unique or primary key constraint on columns "board_id" */
  BoardDetailsBoardIdKey = 'board_details_board_id_key',
  /** unique or primary key constraint on columns "id" */
  BoardDetailsPkey = 'board_details_pkey'
}

/** input type for inserting data into table "board_details" */
export type Board_Details_Insert_Input = {
  board?: InputMaybe<Boards_Obj_Rel_Insert_Input>;
  board_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  css_library?: InputMaybe<Scalars['String']['input']>;
  formatter?: InputMaybe<Scalars['String']['input']>;
  framework?: InputMaybe<Scalars['String']['input']>;
  hygen?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isGit?: InputMaybe<Scalars['String']['input']>;
  lint_staged_husky?: InputMaybe<Scalars['String']['input']>;
  linter?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  ui_library?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  volta?: InputMaybe<Scalars['String']['input']>;
  vscode?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Board_Details_Max_Fields = {
  __typename?: 'board_details_max_fields';
  board_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  css_library?: Maybe<Scalars['String']['output']>;
  formatter?: Maybe<Scalars['String']['output']>;
  framework?: Maybe<Scalars['String']['output']>;
  hygen?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  isGit?: Maybe<Scalars['String']['output']>;
  lint_staged_husky?: Maybe<Scalars['String']['output']>;
  linter?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Scalars['String']['output']>;
  ui_library?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  volta?: Maybe<Scalars['String']['output']>;
  vscode?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Board_Details_Min_Fields = {
  __typename?: 'board_details_min_fields';
  board_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  css_library?: Maybe<Scalars['String']['output']>;
  formatter?: Maybe<Scalars['String']['output']>;
  framework?: Maybe<Scalars['String']['output']>;
  hygen?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  isGit?: Maybe<Scalars['String']['output']>;
  lint_staged_husky?: Maybe<Scalars['String']['output']>;
  linter?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Scalars['String']['output']>;
  ui_library?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  volta?: Maybe<Scalars['String']['output']>;
  vscode?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "board_details" */
export type Board_Details_Mutation_Response = {
  __typename?: 'board_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Board_Details>;
};

/** input type for inserting object relation for remote table "board_details" */
export type Board_Details_Obj_Rel_Insert_Input = {
  data: Board_Details_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Board_Details_On_Conflict>;
};

/** on_conflict condition type for table "board_details" */
export type Board_Details_On_Conflict = {
  constraint: Board_Details_Constraint;
  update_columns?: Array<Board_Details_Update_Column>;
  where?: InputMaybe<Board_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "board_details". */
export type Board_Details_Order_By = {
  board?: InputMaybe<Boards_Order_By>;
  board_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  css_library?: InputMaybe<Order_By>;
  formatter?: InputMaybe<Order_By>;
  framework?: InputMaybe<Order_By>;
  hygen?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isGit?: InputMaybe<Order_By>;
  lint_staged_husky?: InputMaybe<Order_By>;
  linter?: InputMaybe<Order_By>;
  manager?: InputMaybe<Order_By>;
  ui_library?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  volta?: InputMaybe<Order_By>;
  vscode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: board_details */
export type Board_Details_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "board_details" */
export enum Board_Details_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CssLibrary = 'css_library',
  /** column name */
  Formatter = 'formatter',
  /** column name */
  Framework = 'framework',
  /** column name */
  Hygen = 'hygen',
  /** column name */
  Id = 'id',
  /** column name */
  IsGit = 'isGit',
  /** column name */
  LintStagedHusky = 'lint_staged_husky',
  /** column name */
  Linter = 'linter',
  /** column name */
  Manager = 'manager',
  /** column name */
  UiLibrary = 'ui_library',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volta = 'volta',
  /** column name */
  Vscode = 'vscode'
}

/** input type for updating data in table "board_details" */
export type Board_Details_Set_Input = {
  board_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  css_library?: InputMaybe<Scalars['String']['input']>;
  formatter?: InputMaybe<Scalars['String']['input']>;
  framework?: InputMaybe<Scalars['String']['input']>;
  hygen?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isGit?: InputMaybe<Scalars['String']['input']>;
  lint_staged_husky?: InputMaybe<Scalars['String']['input']>;
  linter?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  ui_library?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  volta?: InputMaybe<Scalars['String']['input']>;
  vscode?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "board_details" */
export type Board_Details_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Board_Details_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Board_Details_Stream_Cursor_Value_Input = {
  board_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  css_library?: InputMaybe<Scalars['String']['input']>;
  formatter?: InputMaybe<Scalars['String']['input']>;
  framework?: InputMaybe<Scalars['String']['input']>;
  hygen?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isGit?: InputMaybe<Scalars['String']['input']>;
  lint_staged_husky?: InputMaybe<Scalars['String']['input']>;
  linter?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  ui_library?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  volta?: InputMaybe<Scalars['String']['input']>;
  vscode?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "board_details" */
export enum Board_Details_Update_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CssLibrary = 'css_library',
  /** column name */
  Formatter = 'formatter',
  /** column name */
  Framework = 'framework',
  /** column name */
  Hygen = 'hygen',
  /** column name */
  Id = 'id',
  /** column name */
  IsGit = 'isGit',
  /** column name */
  LintStagedHusky = 'lint_staged_husky',
  /** column name */
  Linter = 'linter',
  /** column name */
  Manager = 'manager',
  /** column name */
  UiLibrary = 'ui_library',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volta = 'volta',
  /** column name */
  Vscode = 'vscode'
}

export type Board_Details_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Board_Details_Set_Input>;
  /** filter the rows which have to be updated */
  where: Board_Details_Bool_Exp;
};

/** collection of board */
export type Boards = {
  __typename?: 'boards';
  /** An object relationship */
  board_detail?: Maybe<Board_Details>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  is_public: Scalars['Boolean']['output'];
  /** An object relationship */
  team: Teams;
  team_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
};


/** collection of board */
export type BoardsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** collection of board */
export type BoardsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** aggregated selection of "boards" */
export type Boards_Aggregate = {
  __typename?: 'boards_aggregate';
  aggregate?: Maybe<Boards_Aggregate_Fields>;
  nodes: Array<Boards>;
};

export type Boards_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Boards_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Boards_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Boards_Aggregate_Bool_Exp_Count>;
};

export type Boards_Aggregate_Bool_Exp_Bool_And = {
  arguments: Boards_Select_Column_Boards_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Boards_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Boards_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Boards_Select_Column_Boards_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Boards_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Boards_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Boards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Boards_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "boards" */
export type Boards_Aggregate_Fields = {
  __typename?: 'boards_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Boards_Max_Fields>;
  min?: Maybe<Boards_Min_Fields>;
};


/** aggregate fields of "boards" */
export type Boards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "boards" */
export type Boards_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Boards_Max_Order_By>;
  min?: InputMaybe<Boards_Min_Order_By>;
};

/** input type for inserting array relation for remote table "boards" */
export type Boards_Arr_Rel_Insert_Input = {
  data: Array<Boards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};

/** Boolean expression to filter rows from the table "boards". All fields are combined with a logical 'AND'. */
export type Boards_Bool_Exp = {
  _and?: InputMaybe<Array<Boards_Bool_Exp>>;
  _not?: InputMaybe<Boards_Bool_Exp>;
  _or?: InputMaybe<Array<Boards_Bool_Exp>>;
  board_detail?: InputMaybe<Board_Details_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_public?: InputMaybe<Boolean_Comparison_Exp>;
  team?: InputMaybe<Teams_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "boards" */
export enum Boards_Constraint {
  /** unique or primary key constraint on columns "id" */
  BoardsPkey = 'boards_pkey',
  /** unique or primary key constraint on columns "user_id", "team_id" */
  BoardsTeamIdUserIdKey = 'boards_team_id_user_id_key'
}

/** input type for inserting data into table "boards" */
export type Boards_Insert_Input = {
  board_detail?: InputMaybe<Board_Details_Obj_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  team?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Boards_Max_Fields = {
  __typename?: 'boards_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "boards" */
export type Boards_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Boards_Min_Fields = {
  __typename?: 'boards_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "boards" */
export type Boards_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "boards" */
export type Boards_Mutation_Response = {
  __typename?: 'boards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Boards>;
};

/** input type for inserting object relation for remote table "boards" */
export type Boards_Obj_Rel_Insert_Input = {
  data: Boards_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};

/** on_conflict condition type for table "boards" */
export type Boards_On_Conflict = {
  constraint: Boards_Constraint;
  update_columns?: Array<Boards_Update_Column>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

/** Ordering options when selecting data from "boards". */
export type Boards_Order_By = {
  board_detail?: InputMaybe<Board_Details_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_public?: InputMaybe<Order_By>;
  team?: InputMaybe<Teams_Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: boards */
export type Boards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "boards" */
export enum Boards_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "boards_aggregate_bool_exp_bool_and_arguments_columns" columns of table "boards" */
export enum Boards_Select_Column_Boards_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPublic = 'is_public'
}

/** select "boards_aggregate_bool_exp_bool_or_arguments_columns" columns of table "boards" */
export enum Boards_Select_Column_Boards_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPublic = 'is_public'
}

/** input type for updating data in table "boards" */
export type Boards_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "boards" */
export type Boards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Boards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Boards_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_public?: InputMaybe<Scalars['Boolean']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "boards" */
export enum Boards_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Boards_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Boards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Boards_Bool_Exp;
};

/** collection of comment */
export type Comments = {
  __typename?: 'comments';
  /** An object relationship */
  board: Boards;
  board_id: Scalars['uuid']['output'];
  content: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
};


/** collection of comment */
export type CommentsLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** collection of comment */
export type CommentsLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

export type Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comments_Aggregate_Bool_Exp_Count>;
};

export type Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  board?: InputMaybe<Boards_Bool_Exp>;
  board_id?: InputMaybe<Uuid_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = 'comments_pkey'
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  board?: InputMaybe<Boards_Obj_Rel_Insert_Input>;
  board_id?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  likes?: InputMaybe<Likes_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  board_id?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  board_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  board_id?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  board_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  board?: InputMaybe<Boards_Order_By>;
  board_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  board_id?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "comments" */
export type Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comments_Stream_Cursor_Value_Input = {
  board_id?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Comments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comments_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** collection of likes for comment */
export type Likes = {
  __typename?: 'likes';
  /** An object relationship */
  comment: Comments;
  comment_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "likes" */
export type Likes_Aggregate = {
  __typename?: 'likes_aggregate';
  aggregate?: Maybe<Likes_Aggregate_Fields>;
  nodes: Array<Likes>;
};

export type Likes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Likes_Aggregate_Bool_Exp_Count>;
};

export type Likes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Likes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "likes" */
export type Likes_Aggregate_Fields = {
  __typename?: 'likes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Likes_Max_Fields>;
  min?: Maybe<Likes_Min_Fields>;
};


/** aggregate fields of "likes" */
export type Likes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "likes" */
export type Likes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Likes_Max_Order_By>;
  min?: InputMaybe<Likes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "likes" */
export type Likes_Arr_Rel_Insert_Input = {
  data: Array<Likes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Likes_Bool_Exp>>;
  _not?: InputMaybe<Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Likes_Bool_Exp>>;
  comment?: InputMaybe<Comments_Bool_Exp>;
  comment_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "likes" */
export enum Likes_Constraint {
  /** unique or primary key constraint on columns "comment_id", "user_id" */
  LikesPkey = 'likes_pkey',
  /** unique or primary key constraint on columns "comment_id", "user_id" */
  LikesUserIdCommentIdKey = 'likes_user_id_comment_id_key'
}

/** input type for inserting data into table "likes" */
export type Likes_Insert_Input = {
  comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Likes_Max_Fields = {
  __typename?: 'likes_max_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "likes" */
export type Likes_Max_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Likes_Min_Fields = {
  __typename?: 'likes_min_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "likes" */
export type Likes_Min_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "likes" */
export type Likes_Mutation_Response = {
  __typename?: 'likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Likes>;
};

/** on_conflict condition type for table "likes" */
export type Likes_On_Conflict = {
  constraint: Likes_Constraint;
  update_columns?: Array<Likes_Update_Column>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "likes". */
export type Likes_Order_By = {
  comment?: InputMaybe<Comments_Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: likes */
export type Likes_Pk_Columns_Input = {
  comment_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
};

/** select columns of table "likes" */
export enum Likes_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "likes" */
export type Likes_Set_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "likes" */
export type Likes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Likes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Likes_Stream_Cursor_Value_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "likes" */
export enum Likes_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Likes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Likes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Likes_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "agreements" */
  delete_agreements?: Maybe<Agreements_Mutation_Response>;
  /** delete single row from the table: "agreements" */
  delete_agreements_by_pk?: Maybe<Agreements>;
  /** delete data from the table: "board_details" */
  delete_board_details?: Maybe<Board_Details_Mutation_Response>;
  /** delete single row from the table: "board_details" */
  delete_board_details_by_pk?: Maybe<Board_Details>;
  /** delete data from the table: "boards" */
  delete_boards?: Maybe<Boards_Mutation_Response>;
  /** delete single row from the table: "boards" */
  delete_boards_by_pk?: Maybe<Boards>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "likes" */
  delete_likes?: Maybe<Likes_Mutation_Response>;
  /** delete single row from the table: "likes" */
  delete_likes_by_pk?: Maybe<Likes>;
  /** delete data from the table: "project_details" */
  delete_project_details?: Maybe<Project_Details_Mutation_Response>;
  /** delete single row from the table: "project_details" */
  delete_project_details_by_pk?: Maybe<Project_Details>;
  /** delete data from the table: "team_board_details" */
  delete_team_board_details?: Maybe<Team_Board_Details_Mutation_Response>;
  /** delete single row from the table: "team_board_details" */
  delete_team_board_details_by_pk?: Maybe<Team_Board_Details>;
  /** delete data from the table: "team_boards" */
  delete_team_boards?: Maybe<Team_Boards_Mutation_Response>;
  /** delete single row from the table: "team_boards" */
  delete_team_boards_by_pk?: Maybe<Team_Boards>;
  /** delete data from the table: "team_member" */
  delete_team_member?: Maybe<Team_Member_Mutation_Response>;
  /** delete single row from the table: "team_member" */
  delete_team_member_by_pk?: Maybe<Team_Member>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "user_online" */
  delete_user_online?: Maybe<User_Online_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "agreements" */
  insert_agreements?: Maybe<Agreements_Mutation_Response>;
  /** insert a single row into the table: "agreements" */
  insert_agreements_one?: Maybe<Agreements>;
  /** insert data into the table: "board_details" */
  insert_board_details?: Maybe<Board_Details_Mutation_Response>;
  /** insert a single row into the table: "board_details" */
  insert_board_details_one?: Maybe<Board_Details>;
  /** insert data into the table: "boards" */
  insert_boards?: Maybe<Boards_Mutation_Response>;
  /** insert a single row into the table: "boards" */
  insert_boards_one?: Maybe<Boards>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "likes" */
  insert_likes?: Maybe<Likes_Mutation_Response>;
  /** insert a single row into the table: "likes" */
  insert_likes_one?: Maybe<Likes>;
  /** insert data into the table: "project_details" */
  insert_project_details?: Maybe<Project_Details_Mutation_Response>;
  /** insert a single row into the table: "project_details" */
  insert_project_details_one?: Maybe<Project_Details>;
  /** insert data into the table: "team_board_details" */
  insert_team_board_details?: Maybe<Team_Board_Details_Mutation_Response>;
  /** insert a single row into the table: "team_board_details" */
  insert_team_board_details_one?: Maybe<Team_Board_Details>;
  /** insert data into the table: "team_boards" */
  insert_team_boards?: Maybe<Team_Boards_Mutation_Response>;
  /** insert a single row into the table: "team_boards" */
  insert_team_boards_one?: Maybe<Team_Boards>;
  /** insert data into the table: "team_member" */
  insert_team_member?: Maybe<Team_Member_Mutation_Response>;
  /** insert a single row into the table: "team_member" */
  insert_team_member_one?: Maybe<Team_Member>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "user_online" */
  insert_user_online?: Maybe<User_Online_Mutation_Response>;
  /** insert a single row into the table: "user_online" */
  insert_user_online_one?: Maybe<User_Online>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "agreements" */
  update_agreements?: Maybe<Agreements_Mutation_Response>;
  /** update single row of the table: "agreements" */
  update_agreements_by_pk?: Maybe<Agreements>;
  /** update multiples rows of table: "agreements" */
  update_agreements_many?: Maybe<Array<Maybe<Agreements_Mutation_Response>>>;
  /** update data of the table: "board_details" */
  update_board_details?: Maybe<Board_Details_Mutation_Response>;
  /** update single row of the table: "board_details" */
  update_board_details_by_pk?: Maybe<Board_Details>;
  /** update multiples rows of table: "board_details" */
  update_board_details_many?: Maybe<Array<Maybe<Board_Details_Mutation_Response>>>;
  /** update data of the table: "boards" */
  update_boards?: Maybe<Boards_Mutation_Response>;
  /** update single row of the table: "boards" */
  update_boards_by_pk?: Maybe<Boards>;
  /** update multiples rows of table: "boards" */
  update_boards_many?: Maybe<Array<Maybe<Boards_Mutation_Response>>>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "likes" */
  update_likes?: Maybe<Likes_Mutation_Response>;
  /** update single row of the table: "likes" */
  update_likes_by_pk?: Maybe<Likes>;
  /** update multiples rows of table: "likes" */
  update_likes_many?: Maybe<Array<Maybe<Likes_Mutation_Response>>>;
  /** update data of the table: "project_details" */
  update_project_details?: Maybe<Project_Details_Mutation_Response>;
  /** update single row of the table: "project_details" */
  update_project_details_by_pk?: Maybe<Project_Details>;
  /** update multiples rows of table: "project_details" */
  update_project_details_many?: Maybe<Array<Maybe<Project_Details_Mutation_Response>>>;
  /** update data of the table: "team_board_details" */
  update_team_board_details?: Maybe<Team_Board_Details_Mutation_Response>;
  /** update single row of the table: "team_board_details" */
  update_team_board_details_by_pk?: Maybe<Team_Board_Details>;
  /** update multiples rows of table: "team_board_details" */
  update_team_board_details_many?: Maybe<Array<Maybe<Team_Board_Details_Mutation_Response>>>;
  /** update data of the table: "team_boards" */
  update_team_boards?: Maybe<Team_Boards_Mutation_Response>;
  /** update single row of the table: "team_boards" */
  update_team_boards_by_pk?: Maybe<Team_Boards>;
  /** update multiples rows of table: "team_boards" */
  update_team_boards_many?: Maybe<Array<Maybe<Team_Boards_Mutation_Response>>>;
  /** update data of the table: "team_member" */
  update_team_member?: Maybe<Team_Member_Mutation_Response>;
  /** update single row of the table: "team_member" */
  update_team_member_by_pk?: Maybe<Team_Member>;
  /** update multiples rows of table: "team_member" */
  update_team_member_many?: Maybe<Array<Maybe<Team_Member_Mutation_Response>>>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
  /** update multiples rows of table: "teams" */
  update_teams_many?: Maybe<Array<Maybe<Teams_Mutation_Response>>>;
  /** update data of the table: "user_online" */
  update_user_online?: Maybe<User_Online_Mutation_Response>;
  /** update multiples rows of table: "user_online" */
  update_user_online_many?: Maybe<Array<Maybe<User_Online_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AgreementsArgs = {
  where: Agreements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Agreements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Board_DetailsArgs = {
  where: Board_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Board_Details_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_BoardsArgs = {
  where: Boards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Boards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LikesArgs = {
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Likes_By_PkArgs = {
  comment_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Project_DetailsArgs = {
  where: Project_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Details_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Team_Board_DetailsArgs = {
  where: Team_Board_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_Board_Details_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Team_BoardsArgs = {
  where: Team_Boards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_Boards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Team_MemberArgs = {
  where: Team_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_Member_By_PkArgs = {
  team_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_OnlineArgs = {
  where: User_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AgreementsArgs = {
  objects: Array<Agreements_Insert_Input>;
  on_conflict?: InputMaybe<Agreements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Agreements_OneArgs = {
  object: Agreements_Insert_Input;
  on_conflict?: InputMaybe<Agreements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Board_DetailsArgs = {
  objects: Array<Board_Details_Insert_Input>;
  on_conflict?: InputMaybe<Board_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Board_Details_OneArgs = {
  object: Board_Details_Insert_Input;
  on_conflict?: InputMaybe<Board_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BoardsArgs = {
  objects: Array<Boards_Insert_Input>;
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boards_OneArgs = {
  object: Boards_Insert_Input;
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LikesArgs = {
  objects: Array<Likes_Insert_Input>;
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Likes_OneArgs = {
  object: Likes_Insert_Input;
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_DetailsArgs = {
  objects: Array<Project_Details_Insert_Input>;
  on_conflict?: InputMaybe<Project_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Details_OneArgs = {
  object: Project_Details_Insert_Input;
  on_conflict?: InputMaybe<Project_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Board_DetailsArgs = {
  objects: Array<Team_Board_Details_Insert_Input>;
  on_conflict?: InputMaybe<Team_Board_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Board_Details_OneArgs = {
  object: Team_Board_Details_Insert_Input;
  on_conflict?: InputMaybe<Team_Board_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_BoardsArgs = {
  objects: Array<Team_Boards_Insert_Input>;
  on_conflict?: InputMaybe<Team_Boards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Boards_OneArgs = {
  object: Team_Boards_Insert_Input;
  on_conflict?: InputMaybe<Team_Boards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_MemberArgs = {
  objects: Array<Team_Member_Insert_Input>;
  on_conflict?: InputMaybe<Team_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Member_OneArgs = {
  object: Team_Member_Insert_Input;
  on_conflict?: InputMaybe<Team_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_OneArgs = {
  object: Teams_Insert_Input;
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OnlineArgs = {
  objects: Array<User_Online_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Online_OneArgs = {
  object: User_Online_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AgreementsArgs = {
  _set?: InputMaybe<Agreements_Set_Input>;
  where: Agreements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Agreements_By_PkArgs = {
  _set?: InputMaybe<Agreements_Set_Input>;
  pk_columns: Agreements_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Agreements_ManyArgs = {
  updates: Array<Agreements_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Board_DetailsArgs = {
  _set?: InputMaybe<Board_Details_Set_Input>;
  where: Board_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Board_Details_By_PkArgs = {
  _set?: InputMaybe<Board_Details_Set_Input>;
  pk_columns: Board_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Board_Details_ManyArgs = {
  updates: Array<Board_Details_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BoardsArgs = {
  _set?: InputMaybe<Boards_Set_Input>;
  where: Boards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Boards_By_PkArgs = {
  _set?: InputMaybe<Boards_Set_Input>;
  pk_columns: Boards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Boards_ManyArgs = {
  updates: Array<Boards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_ManyArgs = {
  updates: Array<Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LikesArgs = {
  _set?: InputMaybe<Likes_Set_Input>;
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Likes_By_PkArgs = {
  _set?: InputMaybe<Likes_Set_Input>;
  pk_columns: Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Likes_ManyArgs = {
  updates: Array<Likes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Project_DetailsArgs = {
  _set?: InputMaybe<Project_Details_Set_Input>;
  where: Project_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Details_By_PkArgs = {
  _set?: InputMaybe<Project_Details_Set_Input>;
  pk_columns: Project_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Details_ManyArgs = {
  updates: Array<Project_Details_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Board_DetailsArgs = {
  _set?: InputMaybe<Team_Board_Details_Set_Input>;
  where: Team_Board_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Board_Details_By_PkArgs = {
  _set?: InputMaybe<Team_Board_Details_Set_Input>;
  pk_columns: Team_Board_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Board_Details_ManyArgs = {
  updates: Array<Team_Board_Details_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Team_BoardsArgs = {
  _set?: InputMaybe<Team_Boards_Set_Input>;
  where: Team_Boards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Boards_By_PkArgs = {
  _set?: InputMaybe<Team_Boards_Set_Input>;
  pk_columns: Team_Boards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Boards_ManyArgs = {
  updates: Array<Team_Boards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Team_MemberArgs = {
  _set?: InputMaybe<Team_Member_Set_Input>;
  where: Team_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Member_By_PkArgs = {
  _set?: InputMaybe<Team_Member_Set_Input>;
  pk_columns: Team_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Member_ManyArgs = {
  updates: Array<Team_Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
  _set?: InputMaybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_By_PkArgs = {
  _set?: InputMaybe<Teams_Set_Input>;
  pk_columns: Teams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_ManyArgs = {
  updates: Array<Teams_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_OnlineArgs = {
  _set?: InputMaybe<User_Online_Set_Input>;
  where: User_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Online_ManyArgs = {
  updates: Array<User_Online_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** collection of project details of each team */
export type Project_Details = {
  __typename?: 'project_details';
  api_url?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  design_url?: Maybe<Scalars['String']['output']>;
  else?: Maybe<Scalars['String']['output']>;
  functional_requirements?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  nonfunctional_requirements?: Maybe<Scalars['String']['output']>;
  project_abstract?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  team: Teams;
  team_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "project_details" */
export type Project_Details_Aggregate = {
  __typename?: 'project_details_aggregate';
  aggregate?: Maybe<Project_Details_Aggregate_Fields>;
  nodes: Array<Project_Details>;
};

/** aggregate fields of "project_details" */
export type Project_Details_Aggregate_Fields = {
  __typename?: 'project_details_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Project_Details_Max_Fields>;
  min?: Maybe<Project_Details_Min_Fields>;
};


/** aggregate fields of "project_details" */
export type Project_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "project_details". All fields are combined with a logical 'AND'. */
export type Project_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Details_Bool_Exp>>;
  _not?: InputMaybe<Project_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Details_Bool_Exp>>;
  api_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  design_url?: InputMaybe<String_Comparison_Exp>;
  else?: InputMaybe<String_Comparison_Exp>;
  functional_requirements?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nonfunctional_requirements?: InputMaybe<String_Comparison_Exp>;
  project_abstract?: InputMaybe<String_Comparison_Exp>;
  team?: InputMaybe<Teams_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_details" */
export enum Project_Details_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectDetailsPkey = 'project_details_pkey',
  /** unique or primary key constraint on columns "team_id" */
  ProjectDetailsTeamIdKey = 'project_details_team_id_key'
}

/** input type for inserting data into table "project_details" */
export type Project_Details_Insert_Input = {
  api_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  design_url?: InputMaybe<Scalars['String']['input']>;
  else?: InputMaybe<Scalars['String']['input']>;
  functional_requirements?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nonfunctional_requirements?: InputMaybe<Scalars['String']['input']>;
  project_abstract?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Project_Details_Max_Fields = {
  __typename?: 'project_details_max_fields';
  api_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  design_url?: Maybe<Scalars['String']['output']>;
  else?: Maybe<Scalars['String']['output']>;
  functional_requirements?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nonfunctional_requirements?: Maybe<Scalars['String']['output']>;
  project_abstract?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Project_Details_Min_Fields = {
  __typename?: 'project_details_min_fields';
  api_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  design_url?: Maybe<Scalars['String']['output']>;
  else?: Maybe<Scalars['String']['output']>;
  functional_requirements?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nonfunctional_requirements?: Maybe<Scalars['String']['output']>;
  project_abstract?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "project_details" */
export type Project_Details_Mutation_Response = {
  __typename?: 'project_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Details>;
};

/** input type for inserting object relation for remote table "project_details" */
export type Project_Details_Obj_Rel_Insert_Input = {
  data: Project_Details_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_Details_On_Conflict>;
};

/** on_conflict condition type for table "project_details" */
export type Project_Details_On_Conflict = {
  constraint: Project_Details_Constraint;
  update_columns?: Array<Project_Details_Update_Column>;
  where?: InputMaybe<Project_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "project_details". */
export type Project_Details_Order_By = {
  api_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  design_url?: InputMaybe<Order_By>;
  else?: InputMaybe<Order_By>;
  functional_requirements?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nonfunctional_requirements?: InputMaybe<Order_By>;
  project_abstract?: InputMaybe<Order_By>;
  team?: InputMaybe<Teams_Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_details */
export type Project_Details_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "project_details" */
export enum Project_Details_Select_Column {
  /** column name */
  ApiUrl = 'api_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DesignUrl = 'design_url',
  /** column name */
  Else = 'else',
  /** column name */
  FunctionalRequirements = 'functional_requirements',
  /** column name */
  Id = 'id',
  /** column name */
  NonfunctionalRequirements = 'nonfunctional_requirements',
  /** column name */
  ProjectAbstract = 'project_abstract',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "project_details" */
export type Project_Details_Set_Input = {
  api_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  design_url?: InputMaybe<Scalars['String']['input']>;
  else?: InputMaybe<Scalars['String']['input']>;
  functional_requirements?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nonfunctional_requirements?: InputMaybe<Scalars['String']['input']>;
  project_abstract?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "project_details" */
export type Project_Details_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Details_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Details_Stream_Cursor_Value_Input = {
  api_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  design_url?: InputMaybe<Scalars['String']['input']>;
  else?: InputMaybe<Scalars['String']['input']>;
  functional_requirements?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nonfunctional_requirements?: InputMaybe<Scalars['String']['input']>;
  project_abstract?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "project_details" */
export enum Project_Details_Update_Column {
  /** column name */
  ApiUrl = 'api_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DesignUrl = 'design_url',
  /** column name */
  Else = 'else',
  /** column name */
  FunctionalRequirements = 'functional_requirements',
  /** column name */
  Id = 'id',
  /** column name */
  NonfunctionalRequirements = 'nonfunctional_requirements',
  /** column name */
  ProjectAbstract = 'project_abstract',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Project_Details_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Details_Set_Input>;
  /** filter the rows which have to be updated */
  where: Project_Details_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  agreements: Array<Agreements>;
  /** An aggregate relationship */
  agreements_aggregate: Agreements_Aggregate;
  /** fetch data from the table: "agreements" using primary key columns */
  agreements_by_pk?: Maybe<Agreements>;
  auth0?: Maybe<Auth0_Profile>;
  /** fetch data from the table: "board_details" */
  board_details: Array<Board_Details>;
  /** fetch aggregated fields from the table: "board_details" */
  board_details_aggregate: Board_Details_Aggregate;
  /** fetch data from the table: "board_details" using primary key columns */
  board_details_by_pk?: Maybe<Board_Details>;
  /** An array relationship */
  boards: Array<Boards>;
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "project_details" */
  project_details: Array<Project_Details>;
  /** fetch aggregated fields from the table: "project_details" */
  project_details_aggregate: Project_Details_Aggregate;
  /** fetch data from the table: "project_details" using primary key columns */
  project_details_by_pk?: Maybe<Project_Details>;
  /** fetch data from the table: "team_board_details" */
  team_board_details: Array<Team_Board_Details>;
  /** fetch aggregated fields from the table: "team_board_details" */
  team_board_details_aggregate: Team_Board_Details_Aggregate;
  /** fetch data from the table: "team_board_details" using primary key columns */
  team_board_details_by_pk?: Maybe<Team_Board_Details>;
  /** fetch data from the table: "team_boards" */
  team_boards: Array<Team_Boards>;
  /** fetch aggregated fields from the table: "team_boards" */
  team_boards_aggregate: Team_Boards_Aggregate;
  /** fetch data from the table: "team_boards" using primary key columns */
  team_boards_by_pk?: Maybe<Team_Boards>;
  /** fetch data from the table: "team_member" */
  team_member: Array<Team_Member>;
  /** fetch aggregated fields from the table: "team_member" */
  team_member_aggregate: Team_Member_Aggregate;
  /** fetch data from the table: "team_member" using primary key columns */
  team_member_by_pk?: Maybe<Team_Member>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAgreementsArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


export type Query_RootAgreements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


export type Query_RootAgreements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBoard_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Board_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Board_Details_Order_By>>;
  where?: InputMaybe<Board_Details_Bool_Exp>;
};


export type Query_RootBoard_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Board_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Board_Details_Order_By>>;
  where?: InputMaybe<Board_Details_Bool_Exp>;
};


export type Query_RootBoard_Details_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Query_RootBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Query_RootBoards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_By_PkArgs = {
  comment_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
};


export type Query_RootProject_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Project_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Details_Order_By>>;
  where?: InputMaybe<Project_Details_Bool_Exp>;
};


export type Query_RootProject_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Details_Order_By>>;
  where?: InputMaybe<Project_Details_Bool_Exp>;
};


export type Query_RootProject_Details_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTeam_Board_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Team_Board_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Board_Details_Order_By>>;
  where?: InputMaybe<Team_Board_Details_Bool_Exp>;
};


export type Query_RootTeam_Board_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Board_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Board_Details_Order_By>>;
  where?: InputMaybe<Team_Board_Details_Bool_Exp>;
};


export type Query_RootTeam_Board_Details_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTeam_BoardsArgs = {
  distinct_on?: InputMaybe<Array<Team_Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Boards_Order_By>>;
  where?: InputMaybe<Team_Boards_Bool_Exp>;
};


export type Query_RootTeam_Boards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Boards_Order_By>>;
  where?: InputMaybe<Team_Boards_Bool_Exp>;
};


export type Query_RootTeam_Boards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTeam_MemberArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


export type Query_RootTeam_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


export type Query_RootTeam_Member_By_PkArgs = {
  team_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
};


export type Query_RootTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_OnlineArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Query_RootUser_Online_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  agreements: Array<Agreements>;
  /** An aggregate relationship */
  agreements_aggregate: Agreements_Aggregate;
  /** fetch data from the table: "agreements" using primary key columns */
  agreements_by_pk?: Maybe<Agreements>;
  /** fetch data from the table in a streaming manner: "agreements" */
  agreements_stream: Array<Agreements>;
  /** fetch data from the table: "board_details" */
  board_details: Array<Board_Details>;
  /** fetch aggregated fields from the table: "board_details" */
  board_details_aggregate: Board_Details_Aggregate;
  /** fetch data from the table: "board_details" using primary key columns */
  board_details_by_pk?: Maybe<Board_Details>;
  /** fetch data from the table in a streaming manner: "board_details" */
  board_details_stream: Array<Board_Details>;
  /** An array relationship */
  boards: Array<Boards>;
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** fetch data from the table in a streaming manner: "boards" */
  boards_stream: Array<Boards>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  comments_stream: Array<Comments>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table in a streaming manner: "likes" */
  likes_stream: Array<Likes>;
  /** fetch data from the table: "project_details" */
  project_details: Array<Project_Details>;
  /** fetch aggregated fields from the table: "project_details" */
  project_details_aggregate: Project_Details_Aggregate;
  /** fetch data from the table: "project_details" using primary key columns */
  project_details_by_pk?: Maybe<Project_Details>;
  /** fetch data from the table in a streaming manner: "project_details" */
  project_details_stream: Array<Project_Details>;
  /** fetch data from the table: "team_board_details" */
  team_board_details: Array<Team_Board_Details>;
  /** fetch aggregated fields from the table: "team_board_details" */
  team_board_details_aggregate: Team_Board_Details_Aggregate;
  /** fetch data from the table: "team_board_details" using primary key columns */
  team_board_details_by_pk?: Maybe<Team_Board_Details>;
  /** fetch data from the table in a streaming manner: "team_board_details" */
  team_board_details_stream: Array<Team_Board_Details>;
  /** fetch data from the table: "team_boards" */
  team_boards: Array<Team_Boards>;
  /** fetch aggregated fields from the table: "team_boards" */
  team_boards_aggregate: Team_Boards_Aggregate;
  /** fetch data from the table: "team_boards" using primary key columns */
  team_boards_by_pk?: Maybe<Team_Boards>;
  /** fetch data from the table in a streaming manner: "team_boards" */
  team_boards_stream: Array<Team_Boards>;
  /** fetch data from the table: "team_member" */
  team_member: Array<Team_Member>;
  /** fetch aggregated fields from the table: "team_member" */
  team_member_aggregate: Team_Member_Aggregate;
  /** fetch data from the table: "team_member" using primary key columns */
  team_member_by_pk?: Maybe<Team_Member>;
  /** fetch data from the table in a streaming manner: "team_member" */
  team_member_stream: Array<Team_Member>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table in a streaming manner: "teams" */
  teams_stream: Array<Teams>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** fetch data from the table in a streaming manner: "user_online" */
  user_online_stream: Array<User_Online>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAgreementsArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


export type Subscription_RootAgreements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


export type Subscription_RootAgreements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAgreements_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Agreements_Stream_Cursor_Input>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


export type Subscription_RootBoard_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Board_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Board_Details_Order_By>>;
  where?: InputMaybe<Board_Details_Bool_Exp>;
};


export type Subscription_RootBoard_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Board_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Board_Details_Order_By>>;
  where?: InputMaybe<Board_Details_Bool_Exp>;
};


export type Subscription_RootBoard_Details_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBoard_Details_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Board_Details_Stream_Cursor_Input>>;
  where?: InputMaybe<Board_Details_Bool_Exp>;
};


export type Subscription_RootBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Subscription_RootBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Subscription_RootBoards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBoards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Boards_Stream_Cursor_Input>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootComments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_By_PkArgs = {
  comment_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
};


export type Subscription_RootLikes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Likes_Stream_Cursor_Input>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootProject_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Project_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Details_Order_By>>;
  where?: InputMaybe<Project_Details_Bool_Exp>;
};


export type Subscription_RootProject_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Details_Order_By>>;
  where?: InputMaybe<Project_Details_Bool_Exp>;
};


export type Subscription_RootProject_Details_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProject_Details_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Details_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Details_Bool_Exp>;
};


export type Subscription_RootTeam_Board_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Team_Board_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Board_Details_Order_By>>;
  where?: InputMaybe<Team_Board_Details_Bool_Exp>;
};


export type Subscription_RootTeam_Board_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Board_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Board_Details_Order_By>>;
  where?: InputMaybe<Team_Board_Details_Bool_Exp>;
};


export type Subscription_RootTeam_Board_Details_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTeam_Board_Details_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Team_Board_Details_Stream_Cursor_Input>>;
  where?: InputMaybe<Team_Board_Details_Bool_Exp>;
};


export type Subscription_RootTeam_BoardsArgs = {
  distinct_on?: InputMaybe<Array<Team_Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Boards_Order_By>>;
  where?: InputMaybe<Team_Boards_Bool_Exp>;
};


export type Subscription_RootTeam_Boards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Boards_Order_By>>;
  where?: InputMaybe<Team_Boards_Bool_Exp>;
};


export type Subscription_RootTeam_Boards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTeam_Boards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Team_Boards_Stream_Cursor_Input>>;
  where?: InputMaybe<Team_Boards_Bool_Exp>;
};


export type Subscription_RootTeam_MemberArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


export type Subscription_RootTeam_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


export type Subscription_RootTeam_Member_By_PkArgs = {
  team_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
};


export type Subscription_RootTeam_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Team_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


export type Subscription_RootTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTeams_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Teams_Stream_Cursor_Input>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootUser_OnlineArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Subscription_RootUser_Online_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Subscription_RootUser_Online_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Online_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** collection of details of each team board */
export type Team_Board_Details = {
  __typename?: 'team_board_details';
  created_at: Scalars['timestamptz']['output'];
  css_library?: Maybe<Scalars['String']['output']>;
  formatter?: Maybe<Scalars['String']['output']>;
  framework?: Maybe<Scalars['String']['output']>;
  hygen?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isGit?: Maybe<Scalars['String']['output']>;
  lint_staged_husky?: Maybe<Scalars['String']['output']>;
  linter?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  team_board: Team_Boards;
  team_board_id: Scalars['uuid']['output'];
  ui_library?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  volta?: Maybe<Scalars['String']['output']>;
  vscode?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "team_board_details" */
export type Team_Board_Details_Aggregate = {
  __typename?: 'team_board_details_aggregate';
  aggregate?: Maybe<Team_Board_Details_Aggregate_Fields>;
  nodes: Array<Team_Board_Details>;
};

/** aggregate fields of "team_board_details" */
export type Team_Board_Details_Aggregate_Fields = {
  __typename?: 'team_board_details_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Team_Board_Details_Max_Fields>;
  min?: Maybe<Team_Board_Details_Min_Fields>;
};


/** aggregate fields of "team_board_details" */
export type Team_Board_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Board_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "team_board_details". All fields are combined with a logical 'AND'. */
export type Team_Board_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Board_Details_Bool_Exp>>;
  _not?: InputMaybe<Team_Board_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Board_Details_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  css_library?: InputMaybe<String_Comparison_Exp>;
  formatter?: InputMaybe<String_Comparison_Exp>;
  framework?: InputMaybe<String_Comparison_Exp>;
  hygen?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isGit?: InputMaybe<String_Comparison_Exp>;
  lint_staged_husky?: InputMaybe<String_Comparison_Exp>;
  linter?: InputMaybe<String_Comparison_Exp>;
  manager?: InputMaybe<String_Comparison_Exp>;
  team_board?: InputMaybe<Team_Boards_Bool_Exp>;
  team_board_id?: InputMaybe<Uuid_Comparison_Exp>;
  ui_library?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  volta?: InputMaybe<String_Comparison_Exp>;
  vscode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_board_details" */
export enum Team_Board_Details_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeamBoardDetailsPkey = 'team_board_details_pkey',
  /** unique or primary key constraint on columns "team_board_id" */
  TeamBoardDetailsTeamBoardIdKey = 'team_board_details_team_board_id_key'
}

/** input type for inserting data into table "team_board_details" */
export type Team_Board_Details_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  css_library?: InputMaybe<Scalars['String']['input']>;
  formatter?: InputMaybe<Scalars['String']['input']>;
  framework?: InputMaybe<Scalars['String']['input']>;
  hygen?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isGit?: InputMaybe<Scalars['String']['input']>;
  lint_staged_husky?: InputMaybe<Scalars['String']['input']>;
  linter?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  team_board?: InputMaybe<Team_Boards_Obj_Rel_Insert_Input>;
  team_board_id?: InputMaybe<Scalars['uuid']['input']>;
  ui_library?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  volta?: InputMaybe<Scalars['String']['input']>;
  vscode?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Team_Board_Details_Max_Fields = {
  __typename?: 'team_board_details_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  css_library?: Maybe<Scalars['String']['output']>;
  formatter?: Maybe<Scalars['String']['output']>;
  framework?: Maybe<Scalars['String']['output']>;
  hygen?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  isGit?: Maybe<Scalars['String']['output']>;
  lint_staged_husky?: Maybe<Scalars['String']['output']>;
  linter?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Scalars['String']['output']>;
  team_board_id?: Maybe<Scalars['uuid']['output']>;
  ui_library?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  volta?: Maybe<Scalars['String']['output']>;
  vscode?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Team_Board_Details_Min_Fields = {
  __typename?: 'team_board_details_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  css_library?: Maybe<Scalars['String']['output']>;
  formatter?: Maybe<Scalars['String']['output']>;
  framework?: Maybe<Scalars['String']['output']>;
  hygen?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  isGit?: Maybe<Scalars['String']['output']>;
  lint_staged_husky?: Maybe<Scalars['String']['output']>;
  linter?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Scalars['String']['output']>;
  team_board_id?: Maybe<Scalars['uuid']['output']>;
  ui_library?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  volta?: Maybe<Scalars['String']['output']>;
  vscode?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "team_board_details" */
export type Team_Board_Details_Mutation_Response = {
  __typename?: 'team_board_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Team_Board_Details>;
};

/** input type for inserting object relation for remote table "team_board_details" */
export type Team_Board_Details_Obj_Rel_Insert_Input = {
  data: Team_Board_Details_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_Board_Details_On_Conflict>;
};

/** on_conflict condition type for table "team_board_details" */
export type Team_Board_Details_On_Conflict = {
  constraint: Team_Board_Details_Constraint;
  update_columns?: Array<Team_Board_Details_Update_Column>;
  where?: InputMaybe<Team_Board_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "team_board_details". */
export type Team_Board_Details_Order_By = {
  created_at?: InputMaybe<Order_By>;
  css_library?: InputMaybe<Order_By>;
  formatter?: InputMaybe<Order_By>;
  framework?: InputMaybe<Order_By>;
  hygen?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isGit?: InputMaybe<Order_By>;
  lint_staged_husky?: InputMaybe<Order_By>;
  linter?: InputMaybe<Order_By>;
  manager?: InputMaybe<Order_By>;
  team_board?: InputMaybe<Team_Boards_Order_By>;
  team_board_id?: InputMaybe<Order_By>;
  ui_library?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  volta?: InputMaybe<Order_By>;
  vscode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: team_board_details */
export type Team_Board_Details_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "team_board_details" */
export enum Team_Board_Details_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CssLibrary = 'css_library',
  /** column name */
  Formatter = 'formatter',
  /** column name */
  Framework = 'framework',
  /** column name */
  Hygen = 'hygen',
  /** column name */
  Id = 'id',
  /** column name */
  IsGit = 'isGit',
  /** column name */
  LintStagedHusky = 'lint_staged_husky',
  /** column name */
  Linter = 'linter',
  /** column name */
  Manager = 'manager',
  /** column name */
  TeamBoardId = 'team_board_id',
  /** column name */
  UiLibrary = 'ui_library',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volta = 'volta',
  /** column name */
  Vscode = 'vscode'
}

/** input type for updating data in table "team_board_details" */
export type Team_Board_Details_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  css_library?: InputMaybe<Scalars['String']['input']>;
  formatter?: InputMaybe<Scalars['String']['input']>;
  framework?: InputMaybe<Scalars['String']['input']>;
  hygen?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isGit?: InputMaybe<Scalars['String']['input']>;
  lint_staged_husky?: InputMaybe<Scalars['String']['input']>;
  linter?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  team_board_id?: InputMaybe<Scalars['uuid']['input']>;
  ui_library?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  volta?: InputMaybe<Scalars['String']['input']>;
  vscode?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "team_board_details" */
export type Team_Board_Details_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Team_Board_Details_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Board_Details_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  css_library?: InputMaybe<Scalars['String']['input']>;
  formatter?: InputMaybe<Scalars['String']['input']>;
  framework?: InputMaybe<Scalars['String']['input']>;
  hygen?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isGit?: InputMaybe<Scalars['String']['input']>;
  lint_staged_husky?: InputMaybe<Scalars['String']['input']>;
  linter?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  team_board_id?: InputMaybe<Scalars['uuid']['input']>;
  ui_library?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  volta?: InputMaybe<Scalars['String']['input']>;
  vscode?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "team_board_details" */
export enum Team_Board_Details_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CssLibrary = 'css_library',
  /** column name */
  Formatter = 'formatter',
  /** column name */
  Framework = 'framework',
  /** column name */
  Hygen = 'hygen',
  /** column name */
  Id = 'id',
  /** column name */
  IsGit = 'isGit',
  /** column name */
  LintStagedHusky = 'lint_staged_husky',
  /** column name */
  Linter = 'linter',
  /** column name */
  Manager = 'manager',
  /** column name */
  TeamBoardId = 'team_board_id',
  /** column name */
  UiLibrary = 'ui_library',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volta = 'volta',
  /** column name */
  Vscode = 'vscode'
}

export type Team_Board_Details_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Team_Board_Details_Set_Input>;
  /** filter the rows which have to be updated */
  where: Team_Board_Details_Bool_Exp;
};

/** collection of board that is only one per team */
export type Team_Boards = {
  __typename?: 'team_boards';
  /** An array relationship */
  agreements: Array<Agreements>;
  /** An aggregate relationship */
  agreements_aggregate: Agreements_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  team: Teams;
  /** An object relationship */
  team_board_detail?: Maybe<Team_Board_Details>;
  team_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** collection of board that is only one per team */
export type Team_BoardsAgreementsArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


/** collection of board that is only one per team */
export type Team_BoardsAgreements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};

/** aggregated selection of "team_boards" */
export type Team_Boards_Aggregate = {
  __typename?: 'team_boards_aggregate';
  aggregate?: Maybe<Team_Boards_Aggregate_Fields>;
  nodes: Array<Team_Boards>;
};

/** aggregate fields of "team_boards" */
export type Team_Boards_Aggregate_Fields = {
  __typename?: 'team_boards_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Team_Boards_Max_Fields>;
  min?: Maybe<Team_Boards_Min_Fields>;
};


/** aggregate fields of "team_boards" */
export type Team_Boards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Boards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "team_boards". All fields are combined with a logical 'AND'. */
export type Team_Boards_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Boards_Bool_Exp>>;
  _not?: InputMaybe<Team_Boards_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Boards_Bool_Exp>>;
  agreements?: InputMaybe<Agreements_Bool_Exp>;
  agreements_aggregate?: InputMaybe<Agreements_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  team?: InputMaybe<Teams_Bool_Exp>;
  team_board_detail?: InputMaybe<Team_Board_Details_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_boards" */
export enum Team_Boards_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeamBoardsPkey = 'team_boards_pkey',
  /** unique or primary key constraint on columns "team_id" */
  TeamBoardsTeamIdKey = 'team_boards_team_id_key'
}

/** input type for inserting data into table "team_boards" */
export type Team_Boards_Insert_Input = {
  agreements?: InputMaybe<Agreements_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  team?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  team_board_detail?: InputMaybe<Team_Board_Details_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Team_Boards_Max_Fields = {
  __typename?: 'team_boards_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Team_Boards_Min_Fields = {
  __typename?: 'team_boards_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "team_boards" */
export type Team_Boards_Mutation_Response = {
  __typename?: 'team_boards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Team_Boards>;
};

/** input type for inserting object relation for remote table "team_boards" */
export type Team_Boards_Obj_Rel_Insert_Input = {
  data: Team_Boards_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_Boards_On_Conflict>;
};

/** on_conflict condition type for table "team_boards" */
export type Team_Boards_On_Conflict = {
  constraint: Team_Boards_Constraint;
  update_columns?: Array<Team_Boards_Update_Column>;
  where?: InputMaybe<Team_Boards_Bool_Exp>;
};

/** Ordering options when selecting data from "team_boards". */
export type Team_Boards_Order_By = {
  agreements_aggregate?: InputMaybe<Agreements_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team?: InputMaybe<Teams_Order_By>;
  team_board_detail?: InputMaybe<Team_Board_Details_Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: team_boards */
export type Team_Boards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "team_boards" */
export enum Team_Boards_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "team_boards" */
export type Team_Boards_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "team_boards" */
export type Team_Boards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Team_Boards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Boards_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "team_boards" */
export enum Team_Boards_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Team_Boards_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Team_Boards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Team_Boards_Bool_Exp;
};

/** join table between teams table and users table */
export type Team_Member = {
  __typename?: 'team_member';
  created_at: Scalars['timestamptz']['output'];
  team_id: Scalars['uuid']['output'];
  /** An object relationship */
  teams: Teams;
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['String']['output'];
  /** An object relationship */
  users: Users;
};

/** aggregated selection of "team_member" */
export type Team_Member_Aggregate = {
  __typename?: 'team_member_aggregate';
  aggregate?: Maybe<Team_Member_Aggregate_Fields>;
  nodes: Array<Team_Member>;
};

export type Team_Member_Aggregate_Bool_Exp = {
  count?: InputMaybe<Team_Member_Aggregate_Bool_Exp_Count>;
};

export type Team_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Team_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Team_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "team_member" */
export type Team_Member_Aggregate_Fields = {
  __typename?: 'team_member_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Team_Member_Max_Fields>;
  min?: Maybe<Team_Member_Min_Fields>;
};


/** aggregate fields of "team_member" */
export type Team_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "team_member" */
export type Team_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Member_Max_Order_By>;
  min?: InputMaybe<Team_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "team_member" */
export type Team_Member_Arr_Rel_Insert_Input = {
  data: Array<Team_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "team_member". All fields are combined with a logical 'AND'. */
export type Team_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Member_Bool_Exp>>;
  _not?: InputMaybe<Team_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Member_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  teams?: InputMaybe<Teams_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "team_member" */
export enum Team_Member_Constraint {
  /** unique or primary key constraint on columns "user_id", "team_id" */
  TeamMemberPkey = 'team_member_pkey'
}

/** input type for inserting data into table "team_member" */
export type Team_Member_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  teams?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Team_Member_Max_Fields = {
  __typename?: 'team_member_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "team_member" */
export type Team_Member_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Member_Min_Fields = {
  __typename?: 'team_member_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "team_member" */
export type Team_Member_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "team_member" */
export type Team_Member_Mutation_Response = {
  __typename?: 'team_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Team_Member>;
};

/** on_conflict condition type for table "team_member" */
export type Team_Member_On_Conflict = {
  constraint: Team_Member_Constraint;
  update_columns?: Array<Team_Member_Update_Column>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "team_member". */
export type Team_Member_Order_By = {
  created_at?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  teams?: InputMaybe<Teams_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: team_member */
export type Team_Member_Pk_Columns_Input = {
  team_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
};

/** select columns of table "team_member" */
export enum Team_Member_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "team_member" */
export type Team_Member_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "team_member" */
export type Team_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Team_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Member_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "team_member" */
export enum Team_Member_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Team_Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Team_Member_Set_Input>;
  /** filter the rows which have to be updated */
  where: Team_Member_Bool_Exp;
};

/** collection of team */
export type Teams = {
  __typename?: 'teams';
  admin_id: Scalars['String']['output'];
  /** An object relationship */
  admin_user: Users;
  /** An array relationship */
  boards: Array<Boards>;
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  project_details?: Maybe<Project_Details>;
  /** An object relationship */
  team_boards?: Maybe<Team_Boards>;
  /** An array relationship */
  team_members: Array<Team_Member>;
  /** An aggregate relationship */
  team_members_aggregate: Team_Member_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** collection of team */
export type TeamsBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


/** collection of team */
export type TeamsBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


/** collection of team */
export type TeamsTeam_MembersArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


/** collection of team */
export type TeamsTeam_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
  __typename?: 'teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

export type Teams_Aggregate_Bool_Exp = {
  count?: InputMaybe<Teams_Aggregate_Bool_Exp_Count>;
};

export type Teams_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Teams_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Teams_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
  __typename?: 'teams_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
};


/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Teams_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Teams_Max_Order_By>;
  min?: InputMaybe<Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
  data: Array<Teams_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: InputMaybe<Array<Teams_Bool_Exp>>;
  _not?: InputMaybe<Teams_Bool_Exp>;
  _or?: InputMaybe<Array<Teams_Bool_Exp>>;
  admin_id?: InputMaybe<String_Comparison_Exp>;
  admin_user?: InputMaybe<Users_Bool_Exp>;
  boards?: InputMaybe<Boards_Bool_Exp>;
  boards_aggregate?: InputMaybe<Boards_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_details?: InputMaybe<Project_Details_Bool_Exp>;
  team_boards?: InputMaybe<Team_Boards_Bool_Exp>;
  team_members?: InputMaybe<Team_Member_Bool_Exp>;
  team_members_aggregate?: InputMaybe<Team_Member_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeamsPkey = 'teams_pkey'
}

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  admin_id?: InputMaybe<Scalars['String']['input']>;
  admin_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  boards?: InputMaybe<Boards_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_details?: InputMaybe<Project_Details_Obj_Rel_Insert_Input>;
  team_boards?: InputMaybe<Team_Boards_Obj_Rel_Insert_Input>;
  team_members?: InputMaybe<Team_Member_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'teams_max_fields';
  admin_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  admin_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  admin_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  admin_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
  __typename?: 'teams_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};

/** on_conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns?: Array<Teams_Update_Column>;
  where?: InputMaybe<Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "teams". */
export type Teams_Order_By = {
  admin_id?: InputMaybe<Order_By>;
  admin_user?: InputMaybe<Users_Order_By>;
  boards_aggregate?: InputMaybe<Boards_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_details?: InputMaybe<Project_Details_Order_By>;
  team_boards?: InputMaybe<Team_Boards_Order_By>;
  team_members_aggregate?: InputMaybe<Team_Member_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: teams */
export type Teams_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  AdminId = 'admin_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  admin_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "teams" */
export type Teams_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Teams_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Teams_Stream_Cursor_Value_Input = {
  admin_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  AdminId = 'admin_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Teams_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Teams_Set_Input>;
  /** filter the rows which have to be updated */
  where: Teams_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_online" */
export type User_Online = {
  __typename?: 'user_online';
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "user_online" */
export type User_Online_Aggregate = {
  __typename?: 'user_online_aggregate';
  aggregate?: Maybe<User_Online_Aggregate_Fields>;
  nodes: Array<User_Online>;
};

/** aggregate fields of "user_online" */
export type User_Online_Aggregate_Fields = {
  __typename?: 'user_online_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Online_Max_Fields>;
  min?: Maybe<User_Online_Min_Fields>;
};


/** aggregate fields of "user_online" */
export type User_Online_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Online_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_online". All fields are combined with a logical 'AND'. */
export type User_Online_Bool_Exp = {
  _and?: InputMaybe<Array<User_Online_Bool_Exp>>;
  _not?: InputMaybe<User_Online_Bool_Exp>;
  _or?: InputMaybe<Array<User_Online_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "user_online" */
export type User_Online_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Online_Max_Fields = {
  __typename?: 'user_online_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Online_Min_Fields = {
  __typename?: 'user_online_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_online" */
export type User_Online_Mutation_Response = {
  __typename?: 'user_online_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Online>;
};

/** Ordering options when selecting data from "user_online". */
export type User_Online_Order_By = {
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "user_online" */
export enum User_Online_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user_online" */
export type User_Online_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_online" */
export type User_Online_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Online_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Online_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User_Online_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Online_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Online_Bool_Exp;
};

/** collection of user */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  agreements: Array<Agreements>;
  /** An aggregate relationship */
  agreements_aggregate: Agreements_Aggregate;
  /** An array relationship */
  boards: Array<Boards>;
  /** An aggregate relationship */
  boards_aggregate: Boards_Aggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  github_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image_url: Scalars['String']['output'];
  is_online: Scalars['Boolean']['output'];
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** An array relationship */
  members: Array<Team_Member>;
  /** An aggregate relationship */
  members_aggregate: Team_Member_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregate relationship */
  teams_aggregate: Teams_Aggregate;
  twitter_url?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** collection of user */
export type UsersAgreementsArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


/** collection of user */
export type UsersAgreements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


/** collection of user */
export type UsersBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


/** collection of user */
export type UsersBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


/** collection of user */
export type UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** collection of user */
export type UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** collection of user */
export type UsersLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** collection of user */
export type UsersLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** collection of user */
export type UsersMembersArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


/** collection of user */
export type UsersMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Member_Order_By>>;
  where?: InputMaybe<Team_Member_Bool_Exp>;
};


/** collection of user */
export type UsersTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


/** collection of user */
export type UsersTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  agreements?: InputMaybe<Agreements_Bool_Exp>;
  agreements_aggregate?: InputMaybe<Agreements_Aggregate_Bool_Exp>;
  boards?: InputMaybe<Boards_Bool_Exp>;
  boards_aggregate?: InputMaybe<Boards_Aggregate_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  github_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_online?: InputMaybe<Boolean_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Bool_Exp>;
  members?: InputMaybe<Team_Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Team_Member_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  teams?: InputMaybe<Teams_Bool_Exp>;
  teams_aggregate?: InputMaybe<Teams_Aggregate_Bool_Exp>;
  twitter_url?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  agreements?: InputMaybe<Agreements_Arr_Rel_Insert_Input>;
  boards?: InputMaybe<Boards_Arr_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_online?: InputMaybe<Scalars['Boolean']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  likes?: InputMaybe<Likes_Arr_Rel_Insert_Input>;
  members?: InputMaybe<Team_Member_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  teams?: InputMaybe<Teams_Arr_Rel_Insert_Input>;
  twitter_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  github_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  twitter_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  github_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  twitter_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  agreements_aggregate?: InputMaybe<Agreements_Aggregate_Order_By>;
  boards_aggregate?: InputMaybe<Boards_Aggregate_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  github_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_online?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  members_aggregate?: InputMaybe<Team_Member_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  teams_aggregate?: InputMaybe<Teams_Aggregate_Order_By>;
  twitter_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsOnline = 'is_online',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  TwitterUrl = 'twitter_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_online?: InputMaybe<Scalars['Boolean']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  twitter_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  github_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_online?: InputMaybe<Scalars['Boolean']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  twitter_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsOnline = 'is_online',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  TwitterUrl = 'twitter_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type CreateTeamMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateTeamMutation = { __typename?: 'mutation_root', insert_teams?: { __typename?: 'teams_mutation_response', returning: Array<{ __typename?: 'teams', admin_id: string, name: string, id: string }> } | null };

export type CreateBoardMutationVariables = Exact<{
  is_public: Scalars['Boolean']['input'];
  team_id: Scalars['uuid']['input'];
}>;


export type CreateBoardMutation = { __typename?: 'mutation_root', insert_boards?: { __typename?: 'boards_mutation_response', returning: Array<{ __typename?: 'boards', id: string, created_at: string, is_public: boolean, user_id: string, team_id: string }> } | null };

export type CreateDetailsMutationVariables = Exact<{
  board_id: Scalars['uuid']['input'];
}>;


export type CreateDetailsMutation = { __typename?: 'mutation_root', insert_board_details?: { __typename?: 'board_details_mutation_response', returning: Array<{ __typename?: 'board_details', id: string, board_id: string }> } | null };

export type UpdateDetailsMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  changes?: InputMaybe<Board_Details_Set_Input>;
}>;


export type UpdateDetailsMutation = { __typename?: 'mutation_root', update_board_details?: { __typename?: 'board_details_mutation_response', affected_rows: number } | null };

export type UpdateTeamBoardDetailsMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  changes?: InputMaybe<Team_Board_Details_Set_Input>;
}>;


export type UpdateTeamBoardDetailsMutation = { __typename?: 'mutation_root', update_team_board_details?: { __typename?: 'team_board_details_mutation_response', affected_rows: number } | null };

export type InsertMessageMutationVariables = Exact<{
  board_id: Scalars['uuid']['input'];
  content: Scalars['String']['input'];
}>;


export type InsertMessageMutation = { __typename?: 'mutation_root', insert_comments_one?: { __typename?: 'comments', id: string, content: string, updated_at: string, user: { __typename?: 'users', id: string, name: string } } | null };

export type SetLastSeenTimestampMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type SetLastSeenTimestampMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: string, updated_at: string, last_seen?: string | null } | null };

export type InsertTeamMemberMutationVariables = Exact<{
  team_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
}>;


export type InsertTeamMemberMutation = { __typename?: 'mutation_root', insert_team_member_one?: { __typename?: 'team_member', team_id: string, user_id: string, teams: { __typename?: 'teams', team_boards?: { __typename?: 'team_boards', id: string, team_board_detail?: { __typename?: 'team_board_details', id: string } | null } | null } } | null };

export type CreateTeamBoardMutationVariables = Exact<{
  team_id: Scalars['uuid']['input'];
}>;


export type CreateTeamBoardMutation = { __typename?: 'mutation_root', insert_team_boards_one?: { __typename?: 'team_boards', id: string } | null };

export type CreateTeamBoardDetailsMutationVariables = Exact<{
  team_board_id: Scalars['uuid']['input'];
}>;


export type CreateTeamBoardDetailsMutation = { __typename?: 'mutation_root', insert_team_board_details_one?: { __typename?: 'team_board_details', id: string } | null };

export type InsertLikeMutationVariables = Exact<{
  comment_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
}>;


export type InsertLikeMutation = { __typename?: 'mutation_root', insert_likes_one?: { __typename?: 'likes', created_at: string } | null };

export type DeleteLikeMutationVariables = Exact<{
  comment_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
}>;


export type DeleteLikeMutation = { __typename?: 'mutation_root', delete_likes?: { __typename?: 'likes_mutation_response', affected_rows: number } | null };

export type UpdateBoardVisibilityMutationVariables = Exact<{
  board_id: Scalars['uuid']['input'];
  is_public: Scalars['Boolean']['input'];
}>;


export type UpdateBoardVisibilityMutation = { __typename?: 'mutation_root', update_boards_by_pk?: { __typename?: 'boards', updated_at: string } | null };

export type InsertAgreementMutationVariables = Exact<{
  team_board_id: Scalars['uuid']['input'];
}>;


export type InsertAgreementMutation = { __typename?: 'mutation_root', insert_agreements_one?: { __typename?: 'agreements', id: string, is_agreed: boolean } | null };

export type UpdateAgreementMutationVariables = Exact<{
  team_board_id: Scalars['uuid']['input'];
  is_agreed: Scalars['Boolean']['input'];
}>;


export type UpdateAgreementMutation = { __typename?: 'mutation_root', update_agreements?: { __typename?: 'agreements_mutation_response', affected_rows: number } | null };

export type InsertProjectOverviewMutationVariables = Exact<{
  team_id: Scalars['uuid']['input'];
}>;


export type InsertProjectOverviewMutation = { __typename?: 'mutation_root', insert_project_details_one?: { __typename?: 'project_details', id: string } | null };

export type UpdateProjectOverviewMutationVariables = Exact<{
  team_id: Scalars['uuid']['input'];
  content: Scalars['String']['input'];
}>;


export type UpdateProjectOverviewMutation = { __typename?: 'mutation_root', update_project_details?: { __typename?: 'project_details_mutation_response', affected_rows: number } | null };

export type GetBoardLibrariesQueryVariables = Exact<{
  board_id: Scalars['uuid']['input'];
}>;


export type GetBoardLibrariesQuery = { __typename?: 'query_root', boards_by_pk?: { __typename?: 'boards', is_public: boolean, board_detail?: { __typename?: 'board_details', id: string, framework?: string | null, css_library?: string | null, ui_library?: string | null, linter?: string | null, formatter?: string | null, created_at: string, updated_at: string, lint_staged_husky?: string | null, hygen?: string | null, manager?: string | null, vscode?: string | null, volta?: string | null, isGit?: string | null } | null } | null };

export type GetLastMessagesQueryVariables = Exact<{
  user_id: Scalars['String']['input'];
  board_id?: InputMaybe<Scalars['uuid']['input']>;
  from_ts?: InputMaybe<Scalars['timestamptz']['input']>;
}>;


export type GetLastMessagesQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', id: string, content: string, board_id: string, updated_at: string, user: { __typename?: 'users', name: string, id: string }, likes: Array<{ __typename?: 'likes', updated_at: string }>, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetTeamInfoQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
}>;


export type GetTeamInfoQuery = { __typename?: 'query_root', teams_by_pk?: { __typename?: 'teams', team_boards?: { __typename?: 'team_boards', id: string, team_board_detail?: { __typename?: 'team_board_details', id: string, framework?: string | null, css_library?: string | null, ui_library?: string | null, linter?: string | null, formatter?: string | null, created_at: string, updated_at: string, lint_staged_husky?: string | null, hygen?: string | null, manager?: string | null, vscode?: string | null, volta?: string | null, isGit?: string | null } | null } | null, boards: Array<{ __typename?: 'boards', id: string, user: { __typename?: 'users', id: string, name: string } }> } | null };

export type GetMyBoardInTeamQueryVariables = Exact<{
  team_id: Scalars['uuid']['input'];
  user_id: Scalars['String']['input'];
}>;


export type GetMyBoardInTeamQuery = { __typename?: 'query_root', boards: Array<{ __typename?: 'boards', id: string, is_public: boolean }> };

export type GetJoinedTeamsQueryVariables = Exact<{
  user_id: Scalars['String']['input'];
}>;


export type GetJoinedTeamsQuery = { __typename?: 'query_root', teams: Array<{ __typename?: 'teams', id: string, name: string, team_members: Array<{ __typename?: 'team_member', user_id: string }>, admin_user: { __typename?: 'users', id: string, name: string }, boards: Array<{ __typename?: 'boards', id: string, board_detail?: { __typename?: 'board_details', id: string } | null }>, team_boards?: { __typename?: 'team_boards', id: string, team_board_detail?: { __typename?: 'team_board_details', id: string } | null } | null }> };

export type GetUserInfoQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserInfoQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, email: string, github_url?: string | null, is_online: boolean, image_url: string, name: string, twitter_url?: string | null } | null };

export type GetTeamMemberQueryVariables = Exact<{
  team_id: Scalars['uuid']['input'];
}>;


export type GetTeamMemberQuery = { __typename?: 'query_root', team_member: Array<{ __typename?: 'team_member', users: { __typename?: 'users', id: string, name: string, email: string, image_url: string, github_url?: string | null, twitter_url?: string | null }, teams: { __typename?: 'teams', name: string } }> };

export type GetTeamBoardDetailQueryVariables = Exact<{
  team_id: Scalars['uuid']['input'];
}>;


export type GetTeamBoardDetailQuery = { __typename?: 'query_root', teams_by_pk?: { __typename?: 'teams', admin_id: string, team_boards?: { __typename?: 'team_boards', team_board_detail?: { __typename?: 'team_board_details', id: string, framework?: string | null, css_library?: string | null, ui_library?: string | null, linter?: string | null, formatter?: string | null, created_at: string, updated_at: string, lint_staged_husky?: string | null, hygen?: string | null, manager?: string | null, vscode?: string | null, volta?: string | null, isGit?: string | null } | null } | null } | null };

export type GetAgreementsQueryVariables = Exact<{
  team_board_id: Scalars['uuid']['input'];
}>;


export type GetAgreementsQuery = { __typename?: 'query_root', agreements: Array<{ __typename?: 'agreements', is_agreed: boolean, user: { __typename?: 'users', name: string, id: string } }> };

export type GetProjectOverviewQueryVariables = Exact<{
  team_id: Scalars['uuid']['input'];
}>;


export type GetProjectOverviewQuery = { __typename?: 'query_root', project_details: Array<{ __typename?: 'project_details', team_id: string, project_abstract?: string | null }> };

export type SubscribeMessageSubscriptionVariables = Exact<{
  board_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type SubscribeMessageSubscription = { __typename?: 'subscription_root', comments: Array<{ __typename?: 'comments', id: string, content: string, board_id: string, updated_at: string, user: { __typename?: 'users', id: string, email: string } }> };


export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const CreateBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"is_public"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_boards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_public"},"value":{"kind":"Variable","name":{"kind":"Name","value":"is_public"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"team_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"is_public"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateBoardMutation, CreateBoardMutationVariables>;
export const CreateDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_board_details"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"board_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"board_id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateDetailsMutation, CreateDetailsMutationVariables>;
export const UpdateDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"changes"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"board_details_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_board_details"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"changes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateDetailsMutation, UpdateDetailsMutationVariables>;
export const UpdateTeamBoardDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTeamBoardDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"changes"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"team_board_details_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_team_board_details"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"changes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateTeamBoardDetailsMutation, UpdateTeamBoardDetailsMutationVariables>;
export const InsertMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_comments_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"board_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<InsertMessageMutation, InsertMessageMutationVariables>;
export const SetLastSeenTimestampDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetLastSeenTimestamp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"last_seen"},"value":{"kind":"StringValue","value":"now()","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_seen"}}]}}]}}]} as unknown as DocumentNode<SetLastSeenTimestampMutation, SetLastSeenTimestampMutationVariables>;
export const InsertTeamMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertTeamMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_team_member_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team_boards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team_board_detail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InsertTeamMemberMutation, InsertTeamMemberMutationVariables>;
export const CreateTeamBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeamBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_team_boards_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTeamBoardMutation, CreateTeamBoardMutationVariables>;
export const CreateTeamBoardDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeamBoardDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_board_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_team_board_details_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_board_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_board_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTeamBoardDetailsMutation, CreateTeamBoardDetailsMutationVariables>;
export const InsertLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_likes_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"comment_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<InsertLikeMutation, InsertLikeMutationVariables>;
export const DeleteLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"comment_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteLikeMutation, DeleteLikeMutationVariables>;
export const UpdateBoardVisibilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBoardVisibility"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"is_public"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_boards_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_public"},"value":{"kind":"Variable","name":{"kind":"Name","value":"is_public"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateBoardVisibilityMutation, UpdateBoardVisibilityMutationVariables>;
export const InsertAgreementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertAgreement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_board_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_agreements_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_board_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_board_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_agreed"}}]}}]}}]} as unknown as DocumentNode<InsertAgreementMutation, InsertAgreementMutationVariables>;
export const UpdateAgreementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAgreement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_board_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"is_agreed"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_agreements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_board_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_board_id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_agreed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"is_agreed"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateAgreementMutation, UpdateAgreementMutationVariables>;
export const InsertProjectOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertProjectOverview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_project_details_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertProjectOverviewMutation, InsertProjectOverviewMutationVariables>;
export const UpdateProjectOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjectOverview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_project_details"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"project_abstract"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateProjectOverviewMutation, UpdateProjectOverviewMutationVariables>;
export const GetBoardLibrariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBoardLibraries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boards_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"board_detail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"framework"}},{"kind":"Field","name":{"kind":"Name","value":"css_library"}},{"kind":"Field","name":{"kind":"Name","value":"ui_library"}},{"kind":"Field","name":{"kind":"Name","value":"linter"}},{"kind":"Field","name":{"kind":"Name","value":"formatter"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"lint_staged_husky"}},{"kind":"Field","name":{"kind":"Name","value":"hygen"}},{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"vscode"}},{"kind":"Field","name":{"kind":"Name","value":"volta"}},{"kind":"Field","name":{"kind":"Name","value":"isGit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"is_public"}}]}}]}}]} as unknown as DocumentNode<GetBoardLibrariesQuery, GetBoardLibrariesQueryVariables>;
export const GetLastMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from_ts"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from_ts"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"board_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"board_id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"columns"},"value":{"kind":"EnumValue","value":"comment_id"}}]}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLastMessagesQuery, GetLastMessagesQueryVariables>;
export const GetTeamInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team_boards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team_board_detail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"framework"}},{"kind":"Field","name":{"kind":"Name","value":"css_library"}},{"kind":"Field","name":{"kind":"Name","value":"ui_library"}},{"kind":"Field","name":{"kind":"Name","value":"linter"}},{"kind":"Field","name":{"kind":"Name","value":"formatter"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"lint_staged_husky"}},{"kind":"Field","name":{"kind":"Name","value":"hygen"}},{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"vscode"}},{"kind":"Field","name":{"kind":"Name","value":"volta"}},{"kind":"Field","name":{"kind":"Name","value":"isGit"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"boards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_public"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_not"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamInfoQuery, GetTeamInfoQueryVariables>;
export const GetMyBoardInTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyBoardInTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_public"}}]}}]}}]} as unknown as DocumentNode<GetMyBoardInTeamQuery, GetMyBoardInTeamQueryVariables>;
export const GetJoinedTeamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJoinedTeams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_members"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"team_members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"admin_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"boards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"board_detail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_boards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team_board_detail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetJoinedTeamsQuery, GetJoinedTeamsQueryVariables>;
export const GetUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"github_url"}},{"kind":"Field","name":{"kind":"Name","value":"is_online"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_url"}}]}}]}}]} as unknown as DocumentNode<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetTeamMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team_member"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"github_url"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamMemberQuery, GetTeamMemberQueryVariables>;
export const GetTeamBoardDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamBoardDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team_boards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team_board_detail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"framework"}},{"kind":"Field","name":{"kind":"Name","value":"css_library"}},{"kind":"Field","name":{"kind":"Name","value":"ui_library"}},{"kind":"Field","name":{"kind":"Name","value":"linter"}},{"kind":"Field","name":{"kind":"Name","value":"formatter"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"lint_staged_husky"}},{"kind":"Field","name":{"kind":"Name","value":"hygen"}},{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"vscode"}},{"kind":"Field","name":{"kind":"Name","value":"volta"}},{"kind":"Field","name":{"kind":"Name","value":"isGit"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"admin_id"}}]}}]}}]} as unknown as DocumentNode<GetTeamBoardDetailQuery, GetTeamBoardDetailQueryVariables>;
export const GetAgreementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgreements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_board_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_board_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_board_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"is_agreed"}}]}}]}}]} as unknown as DocumentNode<GetAgreementsQuery, GetAgreementsQueryVariables>;
export const GetProjectOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectOverview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project_details"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team_id"}},{"kind":"Field","name":{"kind":"Name","value":"project_abstract"}}]}}]}}]} as unknown as DocumentNode<GetProjectOverviewQuery, GetProjectOverviewQueryVariables>;
export const SubscribeMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscribeMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"board_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"board_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"board_id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<SubscribeMessageSubscription, SubscribeMessageSubscriptionVariables>;