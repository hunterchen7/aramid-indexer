import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "delegation" */
export type Delegation = {
  __typename?: 'delegation';
  account: Scalars['String'];
  asa: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  env: Scalars['String'];
  id: Scalars['Int'];
  json: Scalars['String'];
  round: Scalars['bigint'];
  token: Scalars['Int'];
  tx: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "delegation" */
export type Delegation_Aggregate = {
  __typename?: 'delegation_aggregate';
  aggregate?: Maybe<Delegation_Aggregate_Fields>;
  nodes: Array<Delegation>;
};

/** aggregate fields of "delegation" */
export type Delegation_Aggregate_Fields = {
  __typename?: 'delegation_aggregate_fields';
  avg?: Maybe<Delegation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Delegation_Max_Fields>;
  min?: Maybe<Delegation_Min_Fields>;
  stddev?: Maybe<Delegation_Stddev_Fields>;
  stddev_pop?: Maybe<Delegation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Delegation_Stddev_Samp_Fields>;
  sum?: Maybe<Delegation_Sum_Fields>;
  var_pop?: Maybe<Delegation_Var_Pop_Fields>;
  var_samp?: Maybe<Delegation_Var_Samp_Fields>;
  variance?: Maybe<Delegation_Variance_Fields>;
};


/** aggregate fields of "delegation" */
export type Delegation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delegation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Delegation_Avg_Fields = {
  __typename?: 'delegation_avg_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "delegation". All fields are combined with a logical 'AND'. */
export type Delegation_Bool_Exp = {
  _and?: InputMaybe<Array<Delegation_Bool_Exp>>;
  _not?: InputMaybe<Delegation_Bool_Exp>;
  _or?: InputMaybe<Array<Delegation_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  asa?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  env?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  json?: InputMaybe<String_Comparison_Exp>;
  round?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<Int_Comparison_Exp>;
  tx?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "delegation" */
export enum Delegation_Constraint {
  /** unique or primary key constraint */
  DelegationPkey = 'delegation_pkey',
  /** unique or primary key constraint */
  DelegationTxKey = 'delegation_tx_key'
}

/** input type for incrementing numeric columns in table "delegation" */
export type Delegation_Inc_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "delegation" */
export type Delegation_Insert_Input = {
  account?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Delegation_Max_Fields = {
  __typename?: 'delegation_max_fields';
  account?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Delegation_Min_Fields = {
  __typename?: 'delegation_min_fields';
  account?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "delegation" */
export type Delegation_Mutation_Response = {
  __typename?: 'delegation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Delegation>;
};

/** on_conflict condition type for table "delegation" */
export type Delegation_On_Conflict = {
  constraint: Delegation_Constraint;
  update_columns?: Array<Delegation_Update_Column>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};

/** Ordering options when selecting data from "delegation". */
export type Delegation_Order_By = {
  account?: InputMaybe<Order_By>;
  asa?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  json?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  tx?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: delegation */
export type Delegation_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "delegation" */
export enum Delegation_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "delegation" */
export type Delegation_Set_Input = {
  account?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Delegation_Stddev_Fields = {
  __typename?: 'delegation_stddev_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Delegation_Stddev_Pop_Fields = {
  __typename?: 'delegation_stddev_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Delegation_Stddev_Samp_Fields = {
  __typename?: 'delegation_stddev_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Delegation_Sum_Fields = {
  __typename?: 'delegation_sum_fields';
  asa?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
};

/** update columns of table "delegation" */
export enum Delegation_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Delegation_Var_Pop_Fields = {
  __typename?: 'delegation_var_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Delegation_Var_Samp_Fields = {
  __typename?: 'delegation_var_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Delegation_Variance_Fields = {
  __typename?: 'delegation_variance_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "etg" */
export type Etg = {
  __typename?: 'etg';
  account: Scalars['String'];
  asa: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  env: Scalars['String'];
  id: Scalars['Int'];
  json: Scalars['String'];
  round: Scalars['bigint'];
  token: Scalars['Int'];
  tx: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "etg" */
export type Etg_Aggregate = {
  __typename?: 'etg_aggregate';
  aggregate?: Maybe<Etg_Aggregate_Fields>;
  nodes: Array<Etg>;
};

/** aggregate fields of "etg" */
export type Etg_Aggregate_Fields = {
  __typename?: 'etg_aggregate_fields';
  avg?: Maybe<Etg_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Etg_Max_Fields>;
  min?: Maybe<Etg_Min_Fields>;
  stddev?: Maybe<Etg_Stddev_Fields>;
  stddev_pop?: Maybe<Etg_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Etg_Stddev_Samp_Fields>;
  sum?: Maybe<Etg_Sum_Fields>;
  var_pop?: Maybe<Etg_Var_Pop_Fields>;
  var_samp?: Maybe<Etg_Var_Samp_Fields>;
  variance?: Maybe<Etg_Variance_Fields>;
};


/** aggregate fields of "etg" */
export type Etg_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Etg_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Etg_Avg_Fields = {
  __typename?: 'etg_avg_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "etg". All fields are combined with a logical 'AND'. */
export type Etg_Bool_Exp = {
  _and?: InputMaybe<Array<Etg_Bool_Exp>>;
  _not?: InputMaybe<Etg_Bool_Exp>;
  _or?: InputMaybe<Array<Etg_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  asa?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  env?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  json?: InputMaybe<String_Comparison_Exp>;
  round?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<Int_Comparison_Exp>;
  tx?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "etg" */
export enum Etg_Constraint {
  /** unique or primary key constraint */
  EtgPkey = 'etg_pkey',
  /** unique or primary key constraint */
  EtgTxKey = 'etg_tx_key'
}

/** input type for incrementing numeric columns in table "etg" */
export type Etg_Inc_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "etg" */
export type Etg_Insert_Input = {
  account?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Etg_Max_Fields = {
  __typename?: 'etg_max_fields';
  account?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Etg_Min_Fields = {
  __typename?: 'etg_min_fields';
  account?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "etg" */
export type Etg_Mutation_Response = {
  __typename?: 'etg_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Etg>;
};

/** on_conflict condition type for table "etg" */
export type Etg_On_Conflict = {
  constraint: Etg_Constraint;
  update_columns?: Array<Etg_Update_Column>;
  where?: InputMaybe<Etg_Bool_Exp>;
};

/** Ordering options when selecting data from "etg". */
export type Etg_Order_By = {
  account?: InputMaybe<Order_By>;
  asa?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  json?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  tx?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: etg */
export type Etg_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "etg" */
export enum Etg_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "etg" */
export type Etg_Set_Input = {
  account?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Etg_Stddev_Fields = {
  __typename?: 'etg_stddev_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Etg_Stddev_Pop_Fields = {
  __typename?: 'etg_stddev_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Etg_Stddev_Samp_Fields = {
  __typename?: 'etg_stddev_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Etg_Sum_Fields = {
  __typename?: 'etg_sum_fields';
  asa?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
};

/** update columns of table "etg" */
export enum Etg_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Etg_Var_Pop_Fields = {
  __typename?: 'etg_var_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Etg_Var_Samp_Fields = {
  __typename?: 'etg_var_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Etg_Variance_Fields = {
  __typename?: 'etg_variance_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "indexer" */
export type Indexer = {
  __typename?: 'indexer';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  instance: Scalars['String'];
  round: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "indexer" */
export type Indexer_Aggregate = {
  __typename?: 'indexer_aggregate';
  aggregate?: Maybe<Indexer_Aggregate_Fields>;
  nodes: Array<Indexer>;
};

/** aggregate fields of "indexer" */
export type Indexer_Aggregate_Fields = {
  __typename?: 'indexer_aggregate_fields';
  avg?: Maybe<Indexer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Indexer_Max_Fields>;
  min?: Maybe<Indexer_Min_Fields>;
  stddev?: Maybe<Indexer_Stddev_Fields>;
  stddev_pop?: Maybe<Indexer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Indexer_Stddev_Samp_Fields>;
  sum?: Maybe<Indexer_Sum_Fields>;
  var_pop?: Maybe<Indexer_Var_Pop_Fields>;
  var_samp?: Maybe<Indexer_Var_Samp_Fields>;
  variance?: Maybe<Indexer_Variance_Fields>;
};


/** aggregate fields of "indexer" */
export type Indexer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Indexer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Indexer_Avg_Fields = {
  __typename?: 'indexer_avg_fields';
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "indexer". All fields are combined with a logical 'AND'. */
export type Indexer_Bool_Exp = {
  _and?: InputMaybe<Array<Indexer_Bool_Exp>>;
  _not?: InputMaybe<Indexer_Bool_Exp>;
  _or?: InputMaybe<Array<Indexer_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  instance?: InputMaybe<String_Comparison_Exp>;
  round?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "indexer" */
export enum Indexer_Constraint {
  /** unique or primary key constraint */
  IndexerInstanceKey = 'indexer_instance_key',
  /** unique or primary key constraint */
  IndexerPkey = 'indexer_pkey'
}

/** input type for incrementing numeric columns in table "indexer" */
export type Indexer_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "indexer" */
export type Indexer_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Indexer_Max_Fields = {
  __typename?: 'indexer_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  instance?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Indexer_Min_Fields = {
  __typename?: 'indexer_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  instance?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "indexer" */
export type Indexer_Mutation_Response = {
  __typename?: 'indexer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Indexer>;
};

/** on_conflict condition type for table "indexer" */
export type Indexer_On_Conflict = {
  constraint: Indexer_Constraint;
  update_columns?: Array<Indexer_Update_Column>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};

/** Ordering options when selecting data from "indexer". */
export type Indexer_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: indexer */
export type Indexer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "indexer" */
export enum Indexer_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Instance = 'instance',
  /** column name */
  Round = 'round',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "indexer" */
export type Indexer_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Indexer_Stddev_Fields = {
  __typename?: 'indexer_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Indexer_Stddev_Pop_Fields = {
  __typename?: 'indexer_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Indexer_Stddev_Samp_Fields = {
  __typename?: 'indexer_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Indexer_Sum_Fields = {
  __typename?: 'indexer_sum_fields';
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
};

/** update columns of table "indexer" */
export enum Indexer_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Instance = 'instance',
  /** column name */
  Round = 'round',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Indexer_Var_Pop_Fields = {
  __typename?: 'indexer_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Indexer_Var_Samp_Fields = {
  __typename?: 'indexer_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Indexer_Variance_Fields = {
  __typename?: 'indexer_variance_fields';
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "delegation" */
  delete_delegation?: Maybe<Delegation_Mutation_Response>;
  /** delete single row from the table: "delegation" */
  delete_delegation_by_pk?: Maybe<Delegation>;
  /** delete data from the table: "etg" */
  delete_etg?: Maybe<Etg_Mutation_Response>;
  /** delete single row from the table: "etg" */
  delete_etg_by_pk?: Maybe<Etg>;
  /** delete data from the table: "indexer" */
  delete_indexer?: Maybe<Indexer_Mutation_Response>;
  /** delete single row from the table: "indexer" */
  delete_indexer_by_pk?: Maybe<Indexer>;
  /** delete data from the table: "question" */
  delete_question?: Maybe<Question_Mutation_Response>;
  /** delete single row from the table: "question" */
  delete_question_by_pk?: Maybe<Question>;
  /** delete data from the table: "result" */
  delete_result?: Maybe<Result_Mutation_Response>;
  /** delete single row from the table: "result" */
  delete_result_by_pk?: Maybe<Result>;
  /** delete data from the table: "token" */
  delete_token?: Maybe<Token_Mutation_Response>;
  /** delete single row from the table: "token" */
  delete_token_by_pk?: Maybe<Token>;
  /** delete data from the table: "trusted_list" */
  delete_trusted_list?: Maybe<Trusted_List_Mutation_Response>;
  /** delete single row from the table: "trusted_list" */
  delete_trusted_list_by_pk?: Maybe<Trusted_List>;
  /** delete data from the table: "vote" */
  delete_vote?: Maybe<Vote_Mutation_Response>;
  /** delete single row from the table: "vote" */
  delete_vote_by_pk?: Maybe<Vote>;
  /** insert data into the table: "delegation" */
  insert_delegation?: Maybe<Delegation_Mutation_Response>;
  /** insert a single row into the table: "delegation" */
  insert_delegation_one?: Maybe<Delegation>;
  /** insert data into the table: "etg" */
  insert_etg?: Maybe<Etg_Mutation_Response>;
  /** insert a single row into the table: "etg" */
  insert_etg_one?: Maybe<Etg>;
  /** insert data into the table: "indexer" */
  insert_indexer?: Maybe<Indexer_Mutation_Response>;
  /** insert a single row into the table: "indexer" */
  insert_indexer_one?: Maybe<Indexer>;
  /** insert data into the table: "question" */
  insert_question?: Maybe<Question_Mutation_Response>;
  /** insert a single row into the table: "question" */
  insert_question_one?: Maybe<Question>;
  /** insert data into the table: "result" */
  insert_result?: Maybe<Result_Mutation_Response>;
  /** insert a single row into the table: "result" */
  insert_result_one?: Maybe<Result>;
  /** insert data into the table: "token" */
  insert_token?: Maybe<Token_Mutation_Response>;
  /** insert a single row into the table: "token" */
  insert_token_one?: Maybe<Token>;
  /** insert data into the table: "trusted_list" */
  insert_trusted_list?: Maybe<Trusted_List_Mutation_Response>;
  /** insert a single row into the table: "trusted_list" */
  insert_trusted_list_one?: Maybe<Trusted_List>;
  /** insert data into the table: "vote" */
  insert_vote?: Maybe<Vote_Mutation_Response>;
  /** insert a single row into the table: "vote" */
  insert_vote_one?: Maybe<Vote>;
  /** update data of the table: "delegation" */
  update_delegation?: Maybe<Delegation_Mutation_Response>;
  /** update single row of the table: "delegation" */
  update_delegation_by_pk?: Maybe<Delegation>;
  /** update data of the table: "etg" */
  update_etg?: Maybe<Etg_Mutation_Response>;
  /** update single row of the table: "etg" */
  update_etg_by_pk?: Maybe<Etg>;
  /** update data of the table: "indexer" */
  update_indexer?: Maybe<Indexer_Mutation_Response>;
  /** update single row of the table: "indexer" */
  update_indexer_by_pk?: Maybe<Indexer>;
  /** update data of the table: "question" */
  update_question?: Maybe<Question_Mutation_Response>;
  /** update single row of the table: "question" */
  update_question_by_pk?: Maybe<Question>;
  /** update data of the table: "result" */
  update_result?: Maybe<Result_Mutation_Response>;
  /** update single row of the table: "result" */
  update_result_by_pk?: Maybe<Result>;
  /** update data of the table: "token" */
  update_token?: Maybe<Token_Mutation_Response>;
  /** update single row of the table: "token" */
  update_token_by_pk?: Maybe<Token>;
  /** update data of the table: "trusted_list" */
  update_trusted_list?: Maybe<Trusted_List_Mutation_Response>;
  /** update single row of the table: "trusted_list" */
  update_trusted_list_by_pk?: Maybe<Trusted_List>;
  /** update data of the table: "vote" */
  update_vote?: Maybe<Vote_Mutation_Response>;
  /** update single row of the table: "vote" */
  update_vote_by_pk?: Maybe<Vote>;
};


/** mutation root */
export type Mutation_RootDelete_DelegationArgs = {
  where: Delegation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Delegation_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_EtgArgs = {
  where: Etg_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Etg_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_IndexerArgs = {
  where: Indexer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Indexer_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionArgs = {
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Question_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ResultArgs = {
  where: Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Result_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TokenArgs = {
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Trusted_ListArgs = {
  where: Trusted_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trusted_List_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_VoteArgs = {
  where: Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_DelegationArgs = {
  objects: Array<Delegation_Insert_Input>;
  on_conflict?: InputMaybe<Delegation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delegation_OneArgs = {
  object: Delegation_Insert_Input;
  on_conflict?: InputMaybe<Delegation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EtgArgs = {
  objects: Array<Etg_Insert_Input>;
  on_conflict?: InputMaybe<Etg_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Etg_OneArgs = {
  object: Etg_Insert_Input;
  on_conflict?: InputMaybe<Etg_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_IndexerArgs = {
  objects: Array<Indexer_Insert_Input>;
  on_conflict?: InputMaybe<Indexer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Indexer_OneArgs = {
  object: Indexer_Insert_Input;
  on_conflict?: InputMaybe<Indexer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionArgs = {
  objects: Array<Question_Insert_Input>;
  on_conflict?: InputMaybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_OneArgs = {
  object: Question_Insert_Input;
  on_conflict?: InputMaybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResultArgs = {
  objects: Array<Result_Insert_Input>;
  on_conflict?: InputMaybe<Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Result_OneArgs = {
  object: Result_Insert_Input;
  on_conflict?: InputMaybe<Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TokenArgs = {
  objects: Array<Token_Insert_Input>;
  on_conflict?: InputMaybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_OneArgs = {
  object: Token_Insert_Input;
  on_conflict?: InputMaybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trusted_ListArgs = {
  objects: Array<Trusted_List_Insert_Input>;
  on_conflict?: InputMaybe<Trusted_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trusted_List_OneArgs = {
  object: Trusted_List_Insert_Input;
  on_conflict?: InputMaybe<Trusted_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VoteArgs = {
  objects: Array<Vote_Insert_Input>;
  on_conflict?: InputMaybe<Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vote_OneArgs = {
  object: Vote_Insert_Input;
  on_conflict?: InputMaybe<Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_DelegationArgs = {
  _inc?: InputMaybe<Delegation_Inc_Input>;
  _set?: InputMaybe<Delegation_Set_Input>;
  where: Delegation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Delegation_By_PkArgs = {
  _inc?: InputMaybe<Delegation_Inc_Input>;
  _set?: InputMaybe<Delegation_Set_Input>;
  pk_columns: Delegation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EtgArgs = {
  _inc?: InputMaybe<Etg_Inc_Input>;
  _set?: InputMaybe<Etg_Set_Input>;
  where: Etg_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Etg_By_PkArgs = {
  _inc?: InputMaybe<Etg_Inc_Input>;
  _set?: InputMaybe<Etg_Set_Input>;
  pk_columns: Etg_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_IndexerArgs = {
  _inc?: InputMaybe<Indexer_Inc_Input>;
  _set?: InputMaybe<Indexer_Set_Input>;
  where: Indexer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Indexer_By_PkArgs = {
  _inc?: InputMaybe<Indexer_Inc_Input>;
  _set?: InputMaybe<Indexer_Set_Input>;
  pk_columns: Indexer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionArgs = {
  _inc?: InputMaybe<Question_Inc_Input>;
  _set?: InputMaybe<Question_Set_Input>;
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_By_PkArgs = {
  _inc?: InputMaybe<Question_Inc_Input>;
  _set?: InputMaybe<Question_Set_Input>;
  pk_columns: Question_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ResultArgs = {
  _inc?: InputMaybe<Result_Inc_Input>;
  _set?: InputMaybe<Result_Set_Input>;
  where: Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Result_By_PkArgs = {
  _inc?: InputMaybe<Result_Inc_Input>;
  _set?: InputMaybe<Result_Set_Input>;
  pk_columns: Result_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TokenArgs = {
  _inc?: InputMaybe<Token_Inc_Input>;
  _set?: InputMaybe<Token_Set_Input>;
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_By_PkArgs = {
  _inc?: InputMaybe<Token_Inc_Input>;
  _set?: InputMaybe<Token_Set_Input>;
  pk_columns: Token_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trusted_ListArgs = {
  _inc?: InputMaybe<Trusted_List_Inc_Input>;
  _set?: InputMaybe<Trusted_List_Set_Input>;
  where: Trusted_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trusted_List_By_PkArgs = {
  _inc?: InputMaybe<Trusted_List_Inc_Input>;
  _set?: InputMaybe<Trusted_List_Set_Input>;
  pk_columns: Trusted_List_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VoteArgs = {
  _inc?: InputMaybe<Vote_Inc_Input>;
  _set?: InputMaybe<Vote_Set_Input>;
  where: Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vote_By_PkArgs = {
  _inc?: InputMaybe<Vote_Inc_Input>;
  _set?: InputMaybe<Vote_Set_Input>;
  pk_columns: Vote_Pk_Columns_Input;
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

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "delegation" */
  delegation: Array<Delegation>;
  /** fetch aggregated fields from the table: "delegation" */
  delegation_aggregate: Delegation_Aggregate;
  /** fetch data from the table: "delegation" using primary key columns */
  delegation_by_pk?: Maybe<Delegation>;
  /** fetch data from the table: "etg" */
  etg: Array<Etg>;
  /** fetch aggregated fields from the table: "etg" */
  etg_aggregate: Etg_Aggregate;
  /** fetch data from the table: "etg" using primary key columns */
  etg_by_pk?: Maybe<Etg>;
  /** fetch data from the table: "indexer" */
  indexer: Array<Indexer>;
  /** fetch aggregated fields from the table: "indexer" */
  indexer_aggregate: Indexer_Aggregate;
  /** fetch data from the table: "indexer" using primary key columns */
  indexer_by_pk?: Maybe<Indexer>;
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: Question_Aggregate;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table: "result" */
  result: Array<Result>;
  /** fetch aggregated fields from the table: "result" */
  result_aggregate: Result_Aggregate;
  /** fetch data from the table: "result" using primary key columns */
  result_by_pk?: Maybe<Result>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "trusted_list" */
  trusted_list: Array<Trusted_List>;
  /** fetch aggregated fields from the table: "trusted_list" */
  trusted_list_aggregate: Trusted_List_Aggregate;
  /** fetch data from the table: "trusted_list" using primary key columns */
  trusted_list_by_pk?: Maybe<Trusted_List>;
  /** fetch data from the table: "vote" */
  vote: Array<Vote>;
  /** fetch aggregated fields from the table: "vote" */
  vote_aggregate: Vote_Aggregate;
  /** fetch data from the table: "vote" using primary key columns */
  vote_by_pk?: Maybe<Vote>;
};


export type Query_RootDelegationArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};


export type Query_RootDelegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};


export type Query_RootDelegation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEtgArgs = {
  distinct_on?: InputMaybe<Array<Etg_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Etg_Order_By>>;
  where?: InputMaybe<Etg_Bool_Exp>;
};


export type Query_RootEtg_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Etg_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Etg_Order_By>>;
  where?: InputMaybe<Etg_Bool_Exp>;
};


export type Query_RootEtg_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootIndexerArgs = {
  distinct_on?: InputMaybe<Array<Indexer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Indexer_Order_By>>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};


export type Query_RootIndexer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Indexer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Indexer_Order_By>>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};


export type Query_RootIndexer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootQuestionArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Query_RootQuestion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Query_RootQuestion_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootResultArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


export type Query_RootResult_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


export type Query_RootResult_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTrusted_ListArgs = {
  distinct_on?: InputMaybe<Array<Trusted_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trusted_List_Order_By>>;
  where?: InputMaybe<Trusted_List_Bool_Exp>;
};


export type Query_RootTrusted_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trusted_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trusted_List_Order_By>>;
  where?: InputMaybe<Trusted_List_Bool_Exp>;
};


export type Query_RootTrusted_List_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVoteArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


export type Query_RootVote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


export type Query_RootVote_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "question" */
export type Question = {
  __typename?: 'question';
  asa: Scalars['bigint'];
  category: Scalars['String'];
  created_at: Scalars['timestamptz'];
  encryption_address: Scalars['String'];
  ending_round: Scalars['bigint'];
  env: Scalars['String'];
  id: Scalars['Int'];
  json: Scalars['String'];
  open_from_round: Scalars['bigint'];
  open_from_time: Scalars['timestamptz'];
  questioner: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
  token: Scalars['Int'];
  tx: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

/** aggregated selection of "question" */
export type Question_Aggregate = {
  __typename?: 'question_aggregate';
  aggregate?: Maybe<Question_Aggregate_Fields>;
  nodes: Array<Question>;
};

/** aggregate fields of "question" */
export type Question_Aggregate_Fields = {
  __typename?: 'question_aggregate_fields';
  avg?: Maybe<Question_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Question_Max_Fields>;
  min?: Maybe<Question_Min_Fields>;
  stddev?: Maybe<Question_Stddev_Fields>;
  stddev_pop?: Maybe<Question_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Question_Stddev_Samp_Fields>;
  sum?: Maybe<Question_Sum_Fields>;
  var_pop?: Maybe<Question_Var_Pop_Fields>;
  var_samp?: Maybe<Question_Var_Samp_Fields>;
  variance?: Maybe<Question_Variance_Fields>;
};


/** aggregate fields of "question" */
export type Question_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Question_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Question_Avg_Fields = {
  __typename?: 'question_avg_fields';
  asa?: Maybe<Scalars['Float']>;
  ending_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  open_from_round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "question". All fields are combined with a logical 'AND'. */
export type Question_Bool_Exp = {
  _and?: InputMaybe<Array<Question_Bool_Exp>>;
  _not?: InputMaybe<Question_Bool_Exp>;
  _or?: InputMaybe<Array<Question_Bool_Exp>>;
  asa?: InputMaybe<Bigint_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encryption_address?: InputMaybe<String_Comparison_Exp>;
  ending_round?: InputMaybe<Bigint_Comparison_Exp>;
  env?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  json?: InputMaybe<String_Comparison_Exp>;
  open_from_round?: InputMaybe<Bigint_Comparison_Exp>;
  open_from_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  questioner?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Int_Comparison_Exp>;
  tx?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "question" */
export enum Question_Constraint {
  /** unique or primary key constraint */
  QuestionPkey = 'question_pkey',
  /** unique or primary key constraint */
  QuestionTxKey = 'question_tx_key'
}

/** input type for incrementing numeric columns in table "question" */
export type Question_Inc_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  ending_round?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  open_from_round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "question" */
export type Question_Insert_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  encryption_address?: InputMaybe<Scalars['String']>;
  ending_round?: InputMaybe<Scalars['bigint']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  open_from_round?: InputMaybe<Scalars['bigint']>;
  open_from_time?: InputMaybe<Scalars['timestamptz']>;
  questioner?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Question_Max_Fields = {
  __typename?: 'question_max_fields';
  asa?: Maybe<Scalars['bigint']>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  encryption_address?: Maybe<Scalars['String']>;
  ending_round?: Maybe<Scalars['bigint']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  open_from_round?: Maybe<Scalars['bigint']>;
  open_from_time?: Maybe<Scalars['timestamptz']>;
  questioner?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Question_Min_Fields = {
  __typename?: 'question_min_fields';
  asa?: Maybe<Scalars['bigint']>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  encryption_address?: Maybe<Scalars['String']>;
  ending_round?: Maybe<Scalars['bigint']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  open_from_round?: Maybe<Scalars['bigint']>;
  open_from_time?: Maybe<Scalars['timestamptz']>;
  questioner?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "question" */
export type Question_Mutation_Response = {
  __typename?: 'question_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Question>;
};

/** on_conflict condition type for table "question" */
export type Question_On_Conflict = {
  constraint: Question_Constraint;
  update_columns?: Array<Question_Update_Column>;
  where?: InputMaybe<Question_Bool_Exp>;
};

/** Ordering options when selecting data from "question". */
export type Question_Order_By = {
  asa?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  encryption_address?: InputMaybe<Order_By>;
  ending_round?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  json?: InputMaybe<Order_By>;
  open_from_round?: InputMaybe<Order_By>;
  open_from_time?: InputMaybe<Order_By>;
  questioner?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  tx?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: question */
export type Question_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "question" */
export enum Question_Select_Column {
  /** column name */
  Asa = 'asa',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EncryptionAddress = 'encryption_address',
  /** column name */
  EndingRound = 'ending_round',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  OpenFromRound = 'open_from_round',
  /** column name */
  OpenFromTime = 'open_from_time',
  /** column name */
  Questioner = 'questioner',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "question" */
export type Question_Set_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  encryption_address?: InputMaybe<Scalars['String']>;
  ending_round?: InputMaybe<Scalars['bigint']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  open_from_round?: InputMaybe<Scalars['bigint']>;
  open_from_time?: InputMaybe<Scalars['timestamptz']>;
  questioner?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Question_Stddev_Fields = {
  __typename?: 'question_stddev_fields';
  asa?: Maybe<Scalars['Float']>;
  ending_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  open_from_round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Question_Stddev_Pop_Fields = {
  __typename?: 'question_stddev_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  ending_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  open_from_round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Question_Stddev_Samp_Fields = {
  __typename?: 'question_stddev_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  ending_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  open_from_round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Question_Sum_Fields = {
  __typename?: 'question_sum_fields';
  asa?: Maybe<Scalars['bigint']>;
  ending_round?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  open_from_round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
};

/** update columns of table "question" */
export enum Question_Update_Column {
  /** column name */
  Asa = 'asa',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EncryptionAddress = 'encryption_address',
  /** column name */
  EndingRound = 'ending_round',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  OpenFromRound = 'open_from_round',
  /** column name */
  OpenFromTime = 'open_from_time',
  /** column name */
  Questioner = 'questioner',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Question_Var_Pop_Fields = {
  __typename?: 'question_var_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  ending_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  open_from_round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Question_Var_Samp_Fields = {
  __typename?: 'question_var_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  ending_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  open_from_round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Question_Variance_Fields = {
  __typename?: 'question_variance_fields';
  asa?: Maybe<Scalars['Float']>;
  ending_round?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  open_from_round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "result" */
export type Result = {
  __typename?: 'result';
  account: Scalars['String'];
  asa: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  encryption_key?: Maybe<Scalars['String']>;
  env: Scalars['String'];
  id: Scalars['Int'];
  json: Scalars['String'];
  questiontx: Scalars['String'];
  round: Scalars['bigint'];
  token: Scalars['Int'];
  tx: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "result" */
export type Result_Aggregate = {
  __typename?: 'result_aggregate';
  aggregate?: Maybe<Result_Aggregate_Fields>;
  nodes: Array<Result>;
};

/** aggregate fields of "result" */
export type Result_Aggregate_Fields = {
  __typename?: 'result_aggregate_fields';
  avg?: Maybe<Result_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Result_Max_Fields>;
  min?: Maybe<Result_Min_Fields>;
  stddev?: Maybe<Result_Stddev_Fields>;
  stddev_pop?: Maybe<Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Result_Stddev_Samp_Fields>;
  sum?: Maybe<Result_Sum_Fields>;
  var_pop?: Maybe<Result_Var_Pop_Fields>;
  var_samp?: Maybe<Result_Var_Samp_Fields>;
  variance?: Maybe<Result_Variance_Fields>;
};


/** aggregate fields of "result" */
export type Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Result_Avg_Fields = {
  __typename?: 'result_avg_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "result". All fields are combined with a logical 'AND'. */
export type Result_Bool_Exp = {
  _and?: InputMaybe<Array<Result_Bool_Exp>>;
  _not?: InputMaybe<Result_Bool_Exp>;
  _or?: InputMaybe<Array<Result_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  asa?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encryption_key?: InputMaybe<String_Comparison_Exp>;
  env?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  json?: InputMaybe<String_Comparison_Exp>;
  questiontx?: InputMaybe<String_Comparison_Exp>;
  round?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<Int_Comparison_Exp>;
  tx?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "result" */
export enum Result_Constraint {
  /** unique or primary key constraint */
  ResultPkey = 'result_pkey',
  /** unique or primary key constraint */
  ResultTxKey = 'result_tx_key'
}

/** input type for incrementing numeric columns in table "result" */
export type Result_Inc_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "result" */
export type Result_Insert_Input = {
  account?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  encryption_key?: InputMaybe<Scalars['String']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  questiontx?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Result_Max_Fields = {
  __typename?: 'result_max_fields';
  account?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  encryption_key?: Maybe<Scalars['String']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  questiontx?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Result_Min_Fields = {
  __typename?: 'result_min_fields';
  account?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  encryption_key?: Maybe<Scalars['String']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  questiontx?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "result" */
export type Result_Mutation_Response = {
  __typename?: 'result_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Result>;
};

/** on_conflict condition type for table "result" */
export type Result_On_Conflict = {
  constraint: Result_Constraint;
  update_columns?: Array<Result_Update_Column>;
  where?: InputMaybe<Result_Bool_Exp>;
};

/** Ordering options when selecting data from "result". */
export type Result_Order_By = {
  account?: InputMaybe<Order_By>;
  asa?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  encryption_key?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  json?: InputMaybe<Order_By>;
  questiontx?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  tx?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: result */
export type Result_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "result" */
export enum Result_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EncryptionKey = 'encryption_key',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Questiontx = 'questiontx',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "result" */
export type Result_Set_Input = {
  account?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  encryption_key?: InputMaybe<Scalars['String']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  questiontx?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Result_Stddev_Fields = {
  __typename?: 'result_stddev_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Result_Stddev_Pop_Fields = {
  __typename?: 'result_stddev_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Result_Stddev_Samp_Fields = {
  __typename?: 'result_stddev_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Result_Sum_Fields = {
  __typename?: 'result_sum_fields';
  asa?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
};

/** update columns of table "result" */
export enum Result_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EncryptionKey = 'encryption_key',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Questiontx = 'questiontx',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Result_Var_Pop_Fields = {
  __typename?: 'result_var_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Result_Var_Samp_Fields = {
  __typename?: 'result_var_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Result_Variance_Fields = {
  __typename?: 'result_variance_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "delegation" */
  delegation: Array<Delegation>;
  /** fetch aggregated fields from the table: "delegation" */
  delegation_aggregate: Delegation_Aggregate;
  /** fetch data from the table: "delegation" using primary key columns */
  delegation_by_pk?: Maybe<Delegation>;
  /** fetch data from the table: "etg" */
  etg: Array<Etg>;
  /** fetch aggregated fields from the table: "etg" */
  etg_aggregate: Etg_Aggregate;
  /** fetch data from the table: "etg" using primary key columns */
  etg_by_pk?: Maybe<Etg>;
  /** fetch data from the table: "indexer" */
  indexer: Array<Indexer>;
  /** fetch aggregated fields from the table: "indexer" */
  indexer_aggregate: Indexer_Aggregate;
  /** fetch data from the table: "indexer" using primary key columns */
  indexer_by_pk?: Maybe<Indexer>;
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: Question_Aggregate;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table: "result" */
  result: Array<Result>;
  /** fetch aggregated fields from the table: "result" */
  result_aggregate: Result_Aggregate;
  /** fetch data from the table: "result" using primary key columns */
  result_by_pk?: Maybe<Result>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "trusted_list" */
  trusted_list: Array<Trusted_List>;
  /** fetch aggregated fields from the table: "trusted_list" */
  trusted_list_aggregate: Trusted_List_Aggregate;
  /** fetch data from the table: "trusted_list" using primary key columns */
  trusted_list_by_pk?: Maybe<Trusted_List>;
  /** fetch data from the table: "vote" */
  vote: Array<Vote>;
  /** fetch aggregated fields from the table: "vote" */
  vote_aggregate: Vote_Aggregate;
  /** fetch data from the table: "vote" using primary key columns */
  vote_by_pk?: Maybe<Vote>;
};


export type Subscription_RootDelegationArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};


export type Subscription_RootDelegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};


export type Subscription_RootDelegation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEtgArgs = {
  distinct_on?: InputMaybe<Array<Etg_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Etg_Order_By>>;
  where?: InputMaybe<Etg_Bool_Exp>;
};


export type Subscription_RootEtg_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Etg_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Etg_Order_By>>;
  where?: InputMaybe<Etg_Bool_Exp>;
};


export type Subscription_RootEtg_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootIndexerArgs = {
  distinct_on?: InputMaybe<Array<Indexer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Indexer_Order_By>>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};


export type Subscription_RootIndexer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Indexer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Indexer_Order_By>>;
  where?: InputMaybe<Indexer_Bool_Exp>;
};


export type Subscription_RootIndexer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootQuestionArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Subscription_RootQuestion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Subscription_RootQuestion_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootResultArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


export type Subscription_RootResult_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


export type Subscription_RootResult_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTrusted_ListArgs = {
  distinct_on?: InputMaybe<Array<Trusted_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trusted_List_Order_By>>;
  where?: InputMaybe<Trusted_List_Bool_Exp>;
};


export type Subscription_RootTrusted_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trusted_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trusted_List_Order_By>>;
  where?: InputMaybe<Trusted_List_Bool_Exp>;
};


export type Subscription_RootTrusted_List_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVoteArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


export type Subscription_RootVote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


export type Subscription_RootVote_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  asa: Scalars['bigint'];
  clawback: Scalars['String'];
  created_at: Scalars['timestamptz'];
  created_at_round: Scalars['bigint'];
  creator: Scalars['String'];
  decimals: Scalars['Int'];
  env: Scalars['String'];
  freeze: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['Int'];
  manager: Scalars['String'];
  name: Scalars['String'];
  reserve: Scalars['String'];
  total: Scalars['bigint'];
  unit: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  avg?: Maybe<Token_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
  stddev?: Maybe<Token_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Sum_Fields>;
  var_pop?: Maybe<Token_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Var_Samp_Fields>;
  variance?: Maybe<Token_Variance_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Avg_Fields = {
  __typename?: 'token_avg_fields';
  asa?: Maybe<Scalars['Float']>;
  created_at_round?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>;
  _not?: InputMaybe<Token_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Bool_Exp>>;
  asa?: InputMaybe<Bigint_Comparison_Exp>;
  clawback?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at_round?: InputMaybe<Bigint_Comparison_Exp>;
  creator?: InputMaybe<String_Comparison_Exp>;
  decimals?: InputMaybe<Int_Comparison_Exp>;
  env?: InputMaybe<String_Comparison_Exp>;
  freeze?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  manager?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  reserve?: InputMaybe<String_Comparison_Exp>;
  total?: InputMaybe<Bigint_Comparison_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "token" */
export enum Token_Constraint {
  /** unique or primary key constraint */
  TokenAsaEnvKey = 'token_asa_env_key',
  /** unique or primary key constraint */
  TokenPkey = 'token_pkey'
}

/** input type for incrementing numeric columns in table "token" */
export type Token_Inc_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  created_at_round?: InputMaybe<Scalars['bigint']>;
  decimals?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "token" */
export type Token_Insert_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  clawback?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_at_round?: InputMaybe<Scalars['bigint']>;
  creator?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  env?: InputMaybe<Scalars['String']>;
  freeze?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  manager?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  reserve?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['bigint']>;
  unit?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  asa?: Maybe<Scalars['bigint']>;
  clawback?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_at_round?: Maybe<Scalars['bigint']>;
  creator?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  env?: Maybe<Scalars['String']>;
  freeze?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  manager?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['bigint']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  asa?: Maybe<Scalars['bigint']>;
  clawback?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_at_round?: Maybe<Scalars['bigint']>;
  creator?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  env?: Maybe<Scalars['String']>;
  freeze?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  manager?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['bigint']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "token" */
export type Token_Mutation_Response = {
  __typename?: 'token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token>;
};

/** on_conflict condition type for table "token" */
export type Token_On_Conflict = {
  constraint: Token_Constraint;
  update_columns?: Array<Token_Update_Column>;
  where?: InputMaybe<Token_Bool_Exp>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  asa?: InputMaybe<Order_By>;
  clawback?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_at_round?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  freeze?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manager?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  reserve?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: token */
export type Token_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Asa = 'asa',
  /** column name */
  Clawback = 'clawback',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedAtRound = 'created_at_round',
  /** column name */
  Creator = 'creator',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  Env = 'env',
  /** column name */
  Freeze = 'freeze',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Manager = 'manager',
  /** column name */
  Name = 'name',
  /** column name */
  Reserve = 'reserve',
  /** column name */
  Total = 'total',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "token" */
export type Token_Set_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  clawback?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_at_round?: InputMaybe<Scalars['bigint']>;
  creator?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  env?: InputMaybe<Scalars['String']>;
  freeze?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  manager?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  reserve?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['bigint']>;
  unit?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Token_Stddev_Fields = {
  __typename?: 'token_stddev_fields';
  asa?: Maybe<Scalars['Float']>;
  created_at_round?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Stddev_Pop_Fields = {
  __typename?: 'token_stddev_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  created_at_round?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Stddev_Samp_Fields = {
  __typename?: 'token_stddev_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  created_at_round?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Sum_Fields = {
  __typename?: 'token_sum_fields';
  asa?: Maybe<Scalars['bigint']>;
  created_at_round?: Maybe<Scalars['bigint']>;
  decimals?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['bigint']>;
};

/** update columns of table "token" */
export enum Token_Update_Column {
  /** column name */
  Asa = 'asa',
  /** column name */
  Clawback = 'clawback',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedAtRound = 'created_at_round',
  /** column name */
  Creator = 'creator',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  Env = 'env',
  /** column name */
  Freeze = 'freeze',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Manager = 'manager',
  /** column name */
  Name = 'name',
  /** column name */
  Reserve = 'reserve',
  /** column name */
  Total = 'total',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Token_Var_Pop_Fields = {
  __typename?: 'token_var_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  created_at_round?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Var_Samp_Fields = {
  __typename?: 'token_var_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  created_at_round?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Variance_Fields = {
  __typename?: 'token_variance_fields';
  asa?: Maybe<Scalars['Float']>;
  created_at_round?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "trusted_list" */
export type Trusted_List = {
  __typename?: 'trusted_list';
  account: Scalars['String'];
  asa: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  env: Scalars['String'];
  id: Scalars['Int'];
  json: Scalars['String'];
  round: Scalars['bigint'];
  token: Scalars['Int'];
  tx: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "trusted_list" */
export type Trusted_List_Aggregate = {
  __typename?: 'trusted_list_aggregate';
  aggregate?: Maybe<Trusted_List_Aggregate_Fields>;
  nodes: Array<Trusted_List>;
};

/** aggregate fields of "trusted_list" */
export type Trusted_List_Aggregate_Fields = {
  __typename?: 'trusted_list_aggregate_fields';
  avg?: Maybe<Trusted_List_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Trusted_List_Max_Fields>;
  min?: Maybe<Trusted_List_Min_Fields>;
  stddev?: Maybe<Trusted_List_Stddev_Fields>;
  stddev_pop?: Maybe<Trusted_List_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trusted_List_Stddev_Samp_Fields>;
  sum?: Maybe<Trusted_List_Sum_Fields>;
  var_pop?: Maybe<Trusted_List_Var_Pop_Fields>;
  var_samp?: Maybe<Trusted_List_Var_Samp_Fields>;
  variance?: Maybe<Trusted_List_Variance_Fields>;
};


/** aggregate fields of "trusted_list" */
export type Trusted_List_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trusted_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Trusted_List_Avg_Fields = {
  __typename?: 'trusted_list_avg_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "trusted_list". All fields are combined with a logical 'AND'. */
export type Trusted_List_Bool_Exp = {
  _and?: InputMaybe<Array<Trusted_List_Bool_Exp>>;
  _not?: InputMaybe<Trusted_List_Bool_Exp>;
  _or?: InputMaybe<Array<Trusted_List_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  asa?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  env?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  json?: InputMaybe<String_Comparison_Exp>;
  round?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<Int_Comparison_Exp>;
  tx?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "trusted_list" */
export enum Trusted_List_Constraint {
  /** unique or primary key constraint */
  TrustedListPkey = 'trusted_list_pkey',
  /** unique or primary key constraint */
  TrustedListTxKey = 'trusted_list_tx_key'
}

/** input type for incrementing numeric columns in table "trusted_list" */
export type Trusted_List_Inc_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "trusted_list" */
export type Trusted_List_Insert_Input = {
  account?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Trusted_List_Max_Fields = {
  __typename?: 'trusted_list_max_fields';
  account?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Trusted_List_Min_Fields = {
  __typename?: 'trusted_list_min_fields';
  account?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "trusted_list" */
export type Trusted_List_Mutation_Response = {
  __typename?: 'trusted_list_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trusted_List>;
};

/** on_conflict condition type for table "trusted_list" */
export type Trusted_List_On_Conflict = {
  constraint: Trusted_List_Constraint;
  update_columns?: Array<Trusted_List_Update_Column>;
  where?: InputMaybe<Trusted_List_Bool_Exp>;
};

/** Ordering options when selecting data from "trusted_list". */
export type Trusted_List_Order_By = {
  account?: InputMaybe<Order_By>;
  asa?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  json?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  tx?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trusted_list */
export type Trusted_List_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "trusted_list" */
export enum Trusted_List_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "trusted_list" */
export type Trusted_List_Set_Input = {
  account?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Trusted_List_Stddev_Fields = {
  __typename?: 'trusted_list_stddev_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Trusted_List_Stddev_Pop_Fields = {
  __typename?: 'trusted_list_stddev_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Trusted_List_Stddev_Samp_Fields = {
  __typename?: 'trusted_list_stddev_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Trusted_List_Sum_Fields = {
  __typename?: 'trusted_list_sum_fields';
  asa?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
};

/** update columns of table "trusted_list" */
export enum Trusted_List_Update_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Trusted_List_Var_Pop_Fields = {
  __typename?: 'trusted_list_var_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Trusted_List_Var_Samp_Fields = {
  __typename?: 'trusted_list_var_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Trusted_List_Variance_Fields = {
  __typename?: 'trusted_list_variance_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "vote" */
export type Vote = {
  __typename?: 'vote';
  address: Scalars['String'];
  asa: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  env: Scalars['String'];
  id: Scalars['Int'];
  json: Scalars['String'];
  questiontx?: Maybe<Scalars['String']>;
  round: Scalars['bigint'];
  token: Scalars['Int'];
  tx: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "vote" */
export type Vote_Aggregate = {
  __typename?: 'vote_aggregate';
  aggregate?: Maybe<Vote_Aggregate_Fields>;
  nodes: Array<Vote>;
};

/** aggregate fields of "vote" */
export type Vote_Aggregate_Fields = {
  __typename?: 'vote_aggregate_fields';
  avg?: Maybe<Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vote_Max_Fields>;
  min?: Maybe<Vote_Min_Fields>;
  stddev?: Maybe<Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Vote_Sum_Fields>;
  var_pop?: Maybe<Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Vote_Var_Samp_Fields>;
  variance?: Maybe<Vote_Variance_Fields>;
};


/** aggregate fields of "vote" */
export type Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vote_Avg_Fields = {
  __typename?: 'vote_avg_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vote". All fields are combined with a logical 'AND'. */
export type Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Vote_Bool_Exp>>;
  _not?: InputMaybe<Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Vote_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  asa?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  env?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  json?: InputMaybe<String_Comparison_Exp>;
  questiontx?: InputMaybe<String_Comparison_Exp>;
  round?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<Int_Comparison_Exp>;
  tx?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "vote" */
export enum Vote_Constraint {
  /** unique or primary key constraint */
  VotePkey = 'vote_pkey',
  /** unique or primary key constraint */
  VoteTxKey = 'vote_tx_key'
}

/** input type for incrementing numeric columns in table "vote" */
export type Vote_Inc_Input = {
  asa?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vote" */
export type Vote_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  questiontx?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Vote_Max_Fields = {
  __typename?: 'vote_max_fields';
  address?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  questiontx?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Vote_Min_Fields = {
  __typename?: 'vote_min_fields';
  address?: Maybe<Scalars['String']>;
  asa?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  env?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  json?: Maybe<Scalars['String']>;
  questiontx?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
  tx?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "vote" */
export type Vote_Mutation_Response = {
  __typename?: 'vote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vote>;
};

/** on_conflict condition type for table "vote" */
export type Vote_On_Conflict = {
  constraint: Vote_Constraint;
  update_columns?: Array<Vote_Update_Column>;
  where?: InputMaybe<Vote_Bool_Exp>;
};

/** Ordering options when selecting data from "vote". */
export type Vote_Order_By = {
  address?: InputMaybe<Order_By>;
  asa?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  env?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  json?: InputMaybe<Order_By>;
  questiontx?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  tx?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vote */
export type Vote_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vote" */
export enum Vote_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Questiontx = 'questiontx',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "vote" */
export type Vote_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  asa?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  env?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  json?: InputMaybe<Scalars['String']>;
  questiontx?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<Scalars['Int']>;
  tx?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Vote_Stddev_Fields = {
  __typename?: 'vote_stddev_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vote_Stddev_Pop_Fields = {
  __typename?: 'vote_stddev_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vote_Stddev_Samp_Fields = {
  __typename?: 'vote_stddev_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Vote_Sum_Fields = {
  __typename?: 'vote_sum_fields';
  asa?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['bigint']>;
  token?: Maybe<Scalars['Int']>;
};

/** update columns of table "vote" */
export enum Vote_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Asa = 'asa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Env = 'env',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Questiontx = 'questiontx',
  /** column name */
  Round = 'round',
  /** column name */
  Token = 'token',
  /** column name */
  Tx = 'tx',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Vote_Var_Pop_Fields = {
  __typename?: 'vote_var_pop_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vote_Var_Samp_Fields = {
  __typename?: 'vote_var_samp_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vote_Variance_Fields = {
  __typename?: 'vote_variance_fields';
  asa?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};
