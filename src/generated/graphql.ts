import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type Allergens = {
  __typename?: 'Allergens';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Name?: Maybe<Scalars['String']>;
  Examples?: Maybe<Scalars['String']>;
  Priority?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type AllergensConnection = {
  __typename?: 'AllergensConnection';
  values?: Maybe<Array<Maybe<Allergens>>>;
  groupBy?: Maybe<AllergensGroupBy>;
  aggregate?: Maybe<AllergensAggregator>;
};

export type AllergensAggregator = {
  __typename?: 'AllergensAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<AllergensAggregatorSum>;
  avg?: Maybe<AllergensAggregatorAvg>;
  min?: Maybe<AllergensAggregatorMin>;
  max?: Maybe<AllergensAggregatorMax>;
};

export type AllergensAggregatorSum = {
  __typename?: 'AllergensAggregatorSum';
  Priority?: Maybe<Scalars['Float']>;
};

export type AllergensAggregatorAvg = {
  __typename?: 'AllergensAggregatorAvg';
  Priority?: Maybe<Scalars['Float']>;
};

export type AllergensAggregatorMin = {
  __typename?: 'AllergensAggregatorMin';
  Priority?: Maybe<Scalars['Float']>;
};

export type AllergensAggregatorMax = {
  __typename?: 'AllergensAggregatorMax';
  Priority?: Maybe<Scalars['Float']>;
};

export type AllergensGroupBy = {
  __typename?: 'AllergensGroupBy';
  id?: Maybe<Array<Maybe<AllergensConnectionId>>>;
  created_at?: Maybe<Array<Maybe<AllergensConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<AllergensConnectionUpdated_At>>>;
  Name?: Maybe<Array<Maybe<AllergensConnectionName>>>;
  Examples?: Maybe<Array<Maybe<AllergensConnectionExamples>>>;
  Priority?: Maybe<Array<Maybe<AllergensConnectionPriority>>>;
  published_at?: Maybe<Array<Maybe<AllergensConnectionPublished_At>>>;
};

export type AllergensConnectionId = {
  __typename?: 'AllergensConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AllergensConnection>;
};

export type AllergensConnectionCreated_At = {
  __typename?: 'AllergensConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AllergensConnection>;
};

export type AllergensConnectionUpdated_At = {
  __typename?: 'AllergensConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AllergensConnection>;
};

export type AllergensConnectionName = {
  __typename?: 'AllergensConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AllergensConnection>;
};

export type AllergensConnectionExamples = {
  __typename?: 'AllergensConnectionExamples';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AllergensConnection>;
};

export type AllergensConnectionPriority = {
  __typename?: 'AllergensConnectionPriority';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<AllergensConnection>;
};

export type AllergensConnectionPublished_At = {
  __typename?: 'AllergensConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AllergensConnection>;
};

export type AllergenInput = {
  Name?: Maybe<Scalars['String']>;
  Examples?: Maybe<Scalars['String']>;
  Priority?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditAllergenInput = {
  Name?: Maybe<Scalars['String']>;
  Examples?: Maybe<Scalars['String']>;
  Priority?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateAllergenInput = {
  data?: Maybe<AllergenInput>;
};

export type CreateAllergenPayload = {
  __typename?: 'createAllergenPayload';
  allergen?: Maybe<Allergens>;
};

export type UpdateAllergenInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAllergenInput>;
};

export type UpdateAllergenPayload = {
  __typename?: 'updateAllergenPayload';
  allergen?: Maybe<Allergens>;
};

export type DeleteAllergenInput = {
  where?: Maybe<InputId>;
};

export type DeleteAllergenPayload = {
  __typename?: 'deleteAllergenPayload';
  allergen?: Maybe<Allergens>;
};

export enum Enum_Baritem_Serve {
  Glass = 'Glass',
  Bottle = 'Bottle',
  Can = 'Can'
}

export type BarItem = {
  __typename?: 'BarItem';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Name?: Maybe<Scalars['String']>;
  ShortDescription?: Maybe<Scalars['String']>;
  LongDescription?: Maybe<Scalars['String']>;
  ABV?: Maybe<Scalars['Float']>;
  Price?: Maybe<Scalars['Float']>;
  ProductImage?: Maybe<UploadFile>;
  Stock?: Maybe<Scalars['Int']>;
  Pour?: Maybe<Scalars['Int']>;
  Serve?: Maybe<Enum_Baritem_Serve>;
  published_at?: Maybe<Scalars['DateTime']>;
  bar_sections?: Maybe<Array<Maybe<BarSection>>>;
};


export type BarItemBar_SectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type BarItemConnection = {
  __typename?: 'BarItemConnection';
  values?: Maybe<Array<Maybe<BarItem>>>;
  groupBy?: Maybe<BarItemGroupBy>;
  aggregate?: Maybe<BarItemAggregator>;
};

export type BarItemAggregator = {
  __typename?: 'BarItemAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<BarItemAggregatorSum>;
  avg?: Maybe<BarItemAggregatorAvg>;
  min?: Maybe<BarItemAggregatorMin>;
  max?: Maybe<BarItemAggregatorMax>;
};

export type BarItemAggregatorSum = {
  __typename?: 'BarItemAggregatorSum';
  ABV?: Maybe<Scalars['Float']>;
  Price?: Maybe<Scalars['Float']>;
  Stock?: Maybe<Scalars['Float']>;
  Pour?: Maybe<Scalars['Float']>;
};

export type BarItemAggregatorAvg = {
  __typename?: 'BarItemAggregatorAvg';
  ABV?: Maybe<Scalars['Float']>;
  Price?: Maybe<Scalars['Float']>;
  Stock?: Maybe<Scalars['Float']>;
  Pour?: Maybe<Scalars['Float']>;
};

export type BarItemAggregatorMin = {
  __typename?: 'BarItemAggregatorMin';
  ABV?: Maybe<Scalars['Float']>;
  Price?: Maybe<Scalars['Float']>;
  Stock?: Maybe<Scalars['Float']>;
  Pour?: Maybe<Scalars['Float']>;
};

export type BarItemAggregatorMax = {
  __typename?: 'BarItemAggregatorMax';
  ABV?: Maybe<Scalars['Float']>;
  Price?: Maybe<Scalars['Float']>;
  Stock?: Maybe<Scalars['Float']>;
  Pour?: Maybe<Scalars['Float']>;
};

export type BarItemGroupBy = {
  __typename?: 'BarItemGroupBy';
  id?: Maybe<Array<Maybe<BarItemConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BarItemConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BarItemConnectionUpdated_At>>>;
  Name?: Maybe<Array<Maybe<BarItemConnectionName>>>;
  ShortDescription?: Maybe<Array<Maybe<BarItemConnectionShortDescription>>>;
  LongDescription?: Maybe<Array<Maybe<BarItemConnectionLongDescription>>>;
  ABV?: Maybe<Array<Maybe<BarItemConnectionAbv>>>;
  Price?: Maybe<Array<Maybe<BarItemConnectionPrice>>>;
  ProductImage?: Maybe<Array<Maybe<BarItemConnectionProductImage>>>;
  Stock?: Maybe<Array<Maybe<BarItemConnectionStock>>>;
  Pour?: Maybe<Array<Maybe<BarItemConnectionPour>>>;
  Serve?: Maybe<Array<Maybe<BarItemConnectionServe>>>;
  published_at?: Maybe<Array<Maybe<BarItemConnectionPublished_At>>>;
};

export type BarItemConnectionId = {
  __typename?: 'BarItemConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionCreated_At = {
  __typename?: 'BarItemConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionUpdated_At = {
  __typename?: 'BarItemConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionName = {
  __typename?: 'BarItemConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionShortDescription = {
  __typename?: 'BarItemConnectionShortDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionLongDescription = {
  __typename?: 'BarItemConnectionLongDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionAbv = {
  __typename?: 'BarItemConnectionABV';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionPrice = {
  __typename?: 'BarItemConnectionPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionProductImage = {
  __typename?: 'BarItemConnectionProductImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionStock = {
  __typename?: 'BarItemConnectionStock';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionPour = {
  __typename?: 'BarItemConnectionPour';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionServe = {
  __typename?: 'BarItemConnectionServe';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemConnectionPublished_At = {
  __typename?: 'BarItemConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BarItemConnection>;
};

export type BarItemInput = {
  Name?: Maybe<Scalars['String']>;
  ShortDescription?: Maybe<Scalars['String']>;
  LongDescription?: Maybe<Scalars['String']>;
  ABV?: Maybe<Scalars['Float']>;
  Price?: Maybe<Scalars['Float']>;
  ProductImage?: Maybe<Scalars['ID']>;
  bar_sections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Stock?: Maybe<Scalars['Int']>;
  Pour?: Maybe<Scalars['Int']>;
  Serve?: Maybe<Enum_Baritem_Serve>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBarItemInput = {
  Name?: Maybe<Scalars['String']>;
  ShortDescription?: Maybe<Scalars['String']>;
  LongDescription?: Maybe<Scalars['String']>;
  ABV?: Maybe<Scalars['Float']>;
  Price?: Maybe<Scalars['Float']>;
  ProductImage?: Maybe<Scalars['ID']>;
  bar_sections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Stock?: Maybe<Scalars['Int']>;
  Pour?: Maybe<Scalars['Int']>;
  Serve?: Maybe<Enum_Baritem_Serve>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateBarItemInput = {
  data?: Maybe<BarItemInput>;
};

export type CreateBarItemPayload = {
  __typename?: 'createBarItemPayload';
  barItem?: Maybe<BarItem>;
};

export type UpdateBarItemInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBarItemInput>;
};

export type UpdateBarItemPayload = {
  __typename?: 'updateBarItemPayload';
  barItem?: Maybe<BarItem>;
};

export type DeleteBarItemInput = {
  where?: Maybe<InputId>;
};

export type DeleteBarItemPayload = {
  __typename?: 'deleteBarItemPayload';
  barItem?: Maybe<BarItem>;
};

export enum Enum_Barsection_Building {
  Gorge = 'Gorge',
  G2 = 'G2'
}

export type BarSection = {
  __typename?: 'BarSection';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  bar_item?: Maybe<BarItem>;
  Building?: Maybe<Enum_Barsection_Building>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type BarSectionConnection = {
  __typename?: 'BarSectionConnection';
  values?: Maybe<Array<Maybe<BarSection>>>;
  groupBy?: Maybe<BarSectionGroupBy>;
  aggregate?: Maybe<BarSectionAggregator>;
};

export type BarSectionAggregator = {
  __typename?: 'BarSectionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BarSectionGroupBy = {
  __typename?: 'BarSectionGroupBy';
  id?: Maybe<Array<Maybe<BarSectionConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BarSectionConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BarSectionConnectionUpdated_At>>>;
  Name?: Maybe<Array<Maybe<BarSectionConnectionName>>>;
  Description?: Maybe<Array<Maybe<BarSectionConnectionDescription>>>;
  bar_item?: Maybe<Array<Maybe<BarSectionConnectionBar_Item>>>;
  Building?: Maybe<Array<Maybe<BarSectionConnectionBuilding>>>;
  published_at?: Maybe<Array<Maybe<BarSectionConnectionPublished_At>>>;
};

export type BarSectionConnectionId = {
  __typename?: 'BarSectionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BarSectionConnection>;
};

export type BarSectionConnectionCreated_At = {
  __typename?: 'BarSectionConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BarSectionConnection>;
};

export type BarSectionConnectionUpdated_At = {
  __typename?: 'BarSectionConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BarSectionConnection>;
};

export type BarSectionConnectionName = {
  __typename?: 'BarSectionConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BarSectionConnection>;
};

export type BarSectionConnectionDescription = {
  __typename?: 'BarSectionConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BarSectionConnection>;
};

export type BarSectionConnectionBar_Item = {
  __typename?: 'BarSectionConnectionBar_item';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BarSectionConnection>;
};

export type BarSectionConnectionBuilding = {
  __typename?: 'BarSectionConnectionBuilding';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BarSectionConnection>;
};

export type BarSectionConnectionPublished_At = {
  __typename?: 'BarSectionConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BarSectionConnection>;
};

export type BarSectionInput = {
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  bar_item?: Maybe<Scalars['ID']>;
  Building?: Maybe<Enum_Barsection_Building>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBarSectionInput = {
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  bar_item?: Maybe<Scalars['ID']>;
  Building?: Maybe<Enum_Barsection_Building>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateBarSectionInput = {
  data?: Maybe<BarSectionInput>;
};

export type CreateBarSectionPayload = {
  __typename?: 'createBarSectionPayload';
  barSection?: Maybe<BarSection>;
};

export type UpdateBarSectionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBarSectionInput>;
};

export type UpdateBarSectionPayload = {
  __typename?: 'updateBarSectionPayload';
  barSection?: Maybe<BarSection>;
};

export type DeleteBarSectionInput = {
  where?: Maybe<InputId>;
};

export type DeleteBarSectionPayload = {
  __typename?: 'deleteBarSectionPayload';
  barSection?: Maybe<BarSection>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Name?: Maybe<Scalars['String']>;
  ShortDescription?: Maybe<Scalars['String']>;
  LongDescription?: Maybe<Scalars['String']>;
  Price?: Maybe<Scalars['Float']>;
  Priority?: Maybe<Scalars['Int']>;
  ProductImage?: Maybe<UploadFile>;
  Section?: Maybe<MenuSections>;
  published_at?: Maybe<Scalars['DateTime']>;
  Allergens?: Maybe<Array<Maybe<Allergens>>>;
};


export type MenuItemAllergensArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MenuItemConnection = {
  __typename?: 'MenuItemConnection';
  values?: Maybe<Array<Maybe<MenuItem>>>;
  groupBy?: Maybe<MenuItemGroupBy>;
  aggregate?: Maybe<MenuItemAggregator>;
};

export type MenuItemAggregator = {
  __typename?: 'MenuItemAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<MenuItemAggregatorSum>;
  avg?: Maybe<MenuItemAggregatorAvg>;
  min?: Maybe<MenuItemAggregatorMin>;
  max?: Maybe<MenuItemAggregatorMax>;
};

export type MenuItemAggregatorSum = {
  __typename?: 'MenuItemAggregatorSum';
  Price?: Maybe<Scalars['Float']>;
  Priority?: Maybe<Scalars['Float']>;
};

export type MenuItemAggregatorAvg = {
  __typename?: 'MenuItemAggregatorAvg';
  Price?: Maybe<Scalars['Float']>;
  Priority?: Maybe<Scalars['Float']>;
};

export type MenuItemAggregatorMin = {
  __typename?: 'MenuItemAggregatorMin';
  Price?: Maybe<Scalars['Float']>;
  Priority?: Maybe<Scalars['Float']>;
};

export type MenuItemAggregatorMax = {
  __typename?: 'MenuItemAggregatorMax';
  Price?: Maybe<Scalars['Float']>;
  Priority?: Maybe<Scalars['Float']>;
};

export type MenuItemGroupBy = {
  __typename?: 'MenuItemGroupBy';
  id?: Maybe<Array<Maybe<MenuItemConnectionId>>>;
  created_at?: Maybe<Array<Maybe<MenuItemConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<MenuItemConnectionUpdated_At>>>;
  Name?: Maybe<Array<Maybe<MenuItemConnectionName>>>;
  ShortDescription?: Maybe<Array<Maybe<MenuItemConnectionShortDescription>>>;
  LongDescription?: Maybe<Array<Maybe<MenuItemConnectionLongDescription>>>;
  Price?: Maybe<Array<Maybe<MenuItemConnectionPrice>>>;
  Priority?: Maybe<Array<Maybe<MenuItemConnectionPriority>>>;
  ProductImage?: Maybe<Array<Maybe<MenuItemConnectionProductImage>>>;
  Section?: Maybe<Array<Maybe<MenuItemConnectionSection>>>;
  published_at?: Maybe<Array<Maybe<MenuItemConnectionPublished_At>>>;
};

export type MenuItemConnectionId = {
  __typename?: 'MenuItemConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionCreated_At = {
  __typename?: 'MenuItemConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionUpdated_At = {
  __typename?: 'MenuItemConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionName = {
  __typename?: 'MenuItemConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionShortDescription = {
  __typename?: 'MenuItemConnectionShortDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionLongDescription = {
  __typename?: 'MenuItemConnectionLongDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionPrice = {
  __typename?: 'MenuItemConnectionPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionPriority = {
  __typename?: 'MenuItemConnectionPriority';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionProductImage = {
  __typename?: 'MenuItemConnectionProductImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionSection = {
  __typename?: 'MenuItemConnectionSection';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemConnectionPublished_At = {
  __typename?: 'MenuItemConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenuItemConnection>;
};

export type MenuItemInput = {
  Name?: Maybe<Scalars['String']>;
  ShortDescription?: Maybe<Scalars['String']>;
  LongDescription?: Maybe<Scalars['String']>;
  Price?: Maybe<Scalars['Float']>;
  Priority?: Maybe<Scalars['Int']>;
  ProductImage?: Maybe<Scalars['ID']>;
  Allergens?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Section?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMenuItemInput = {
  Name?: Maybe<Scalars['String']>;
  ShortDescription?: Maybe<Scalars['String']>;
  LongDescription?: Maybe<Scalars['String']>;
  Price?: Maybe<Scalars['Float']>;
  Priority?: Maybe<Scalars['Int']>;
  ProductImage?: Maybe<Scalars['ID']>;
  Allergens?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Section?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMenuItemInput = {
  data?: Maybe<MenuItemInput>;
};

export type CreateMenuItemPayload = {
  __typename?: 'createMenuItemPayload';
  menuItem?: Maybe<MenuItem>;
};

export type UpdateMenuItemInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMenuItemInput>;
};

export type UpdateMenuItemPayload = {
  __typename?: 'updateMenuItemPayload';
  menuItem?: Maybe<MenuItem>;
};

export type DeleteMenuItemInput = {
  where?: Maybe<InputId>;
};

export type DeleteMenuItemPayload = {
  __typename?: 'deleteMenuItemPayload';
  menuItem?: Maybe<MenuItem>;
};

export enum Enum_Menusections_Building {
  Gorge = 'Gorge',
  G2 = 'G2'
}

export type MenuSections = {
  __typename?: 'MenuSections';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Priority?: Maybe<Scalars['Int']>;
  Building?: Maybe<Enum_Menusections_Building>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type MenuSectionsConnection = {
  __typename?: 'MenuSectionsConnection';
  values?: Maybe<Array<Maybe<MenuSections>>>;
  groupBy?: Maybe<MenuSectionsGroupBy>;
  aggregate?: Maybe<MenuSectionsAggregator>;
};

export type MenuSectionsAggregator = {
  __typename?: 'MenuSectionsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<MenuSectionsAggregatorSum>;
  avg?: Maybe<MenuSectionsAggregatorAvg>;
  min?: Maybe<MenuSectionsAggregatorMin>;
  max?: Maybe<MenuSectionsAggregatorMax>;
};

export type MenuSectionsAggregatorSum = {
  __typename?: 'MenuSectionsAggregatorSum';
  Priority?: Maybe<Scalars['Float']>;
};

export type MenuSectionsAggregatorAvg = {
  __typename?: 'MenuSectionsAggregatorAvg';
  Priority?: Maybe<Scalars['Float']>;
};

export type MenuSectionsAggregatorMin = {
  __typename?: 'MenuSectionsAggregatorMin';
  Priority?: Maybe<Scalars['Float']>;
};

export type MenuSectionsAggregatorMax = {
  __typename?: 'MenuSectionsAggregatorMax';
  Priority?: Maybe<Scalars['Float']>;
};

export type MenuSectionsGroupBy = {
  __typename?: 'MenuSectionsGroupBy';
  id?: Maybe<Array<Maybe<MenuSectionsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<MenuSectionsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<MenuSectionsConnectionUpdated_At>>>;
  Name?: Maybe<Array<Maybe<MenuSectionsConnectionName>>>;
  Description?: Maybe<Array<Maybe<MenuSectionsConnectionDescription>>>;
  Priority?: Maybe<Array<Maybe<MenuSectionsConnectionPriority>>>;
  Building?: Maybe<Array<Maybe<MenuSectionsConnectionBuilding>>>;
  published_at?: Maybe<Array<Maybe<MenuSectionsConnectionPublished_At>>>;
};

export type MenuSectionsConnectionId = {
  __typename?: 'MenuSectionsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenuSectionsConnection>;
};

export type MenuSectionsConnectionCreated_At = {
  __typename?: 'MenuSectionsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenuSectionsConnection>;
};

export type MenuSectionsConnectionUpdated_At = {
  __typename?: 'MenuSectionsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenuSectionsConnection>;
};

export type MenuSectionsConnectionName = {
  __typename?: 'MenuSectionsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuSectionsConnection>;
};

export type MenuSectionsConnectionDescription = {
  __typename?: 'MenuSectionsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuSectionsConnection>;
};

export type MenuSectionsConnectionPriority = {
  __typename?: 'MenuSectionsConnectionPriority';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<MenuSectionsConnection>;
};

export type MenuSectionsConnectionBuilding = {
  __typename?: 'MenuSectionsConnectionBuilding';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuSectionsConnection>;
};

export type MenuSectionsConnectionPublished_At = {
  __typename?: 'MenuSectionsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenuSectionsConnection>;
};

export type MenuSectionInput = {
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Priority?: Maybe<Scalars['Int']>;
  Building?: Maybe<Enum_Menusections_Building>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMenuSectionInput = {
  Name?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Priority?: Maybe<Scalars['Int']>;
  Building?: Maybe<Enum_Menusections_Building>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMenuSectionInput = {
  data?: Maybe<MenuSectionInput>;
};

export type CreateMenuSectionPayload = {
  __typename?: 'createMenuSectionPayload';
  menuSection?: Maybe<MenuSections>;
};

export type UpdateMenuSectionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMenuSectionInput>;
};

export type UpdateMenuSectionPayload = {
  __typename?: 'updateMenuSectionPayload';
  menuSection?: Maybe<MenuSections>;
};

export type DeleteMenuSectionInput = {
  where?: Maybe<InputId>;
};

export type DeleteMenuSectionPayload = {
  __typename?: 'deleteMenuSectionPayload';
  menuSection?: Maybe<MenuSections>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export enum Enum_Componenthrbasicstaffprofile_Role {
  Management = 'Management',
  FohSenior = 'FOHSenior',
  FohSupport = 'FOHSupport',
  HeadChef = 'HeadChef',
  KitchenChef = 'KitchenChef',
  KitchenSupport = 'KitchenSupport',
  Caretaker = 'Caretaker'
}

export type ComponentHrBasicStaffProfile = {
  __typename?: 'ComponentHrBasicStaffProfile';
  id: Scalars['ID'];
  FirstName?: Maybe<Scalars['String']>;
  StaffPhoto?: Maybe<UploadFile>;
  LastName?: Maybe<Scalars['String']>;
  MiddleNames?: Maybe<Scalars['String']>;
  Pronoun?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['Date']>;
  EndDate?: Maybe<Scalars['Date']>;
  Role?: Maybe<Enum_Componenthrbasicstaffprofile_Role>;
};

export type ComponentHrBasicStaffProfileInput = {
  FirstName?: Maybe<Scalars['String']>;
  StaffPhoto?: Maybe<Scalars['ID']>;
  LastName?: Maybe<Scalars['String']>;
  MiddleNames?: Maybe<Scalars['String']>;
  Pronoun?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['Date']>;
  EndDate?: Maybe<Scalars['Date']>;
  Role?: Maybe<Enum_Componenthrbasicstaffprofile_Role>;
};

export type EditComponentHrBasicStaffProfileInput = {
  id?: Maybe<Scalars['ID']>;
  FirstName?: Maybe<Scalars['String']>;
  StaffPhoto?: Maybe<Scalars['ID']>;
  LastName?: Maybe<Scalars['String']>;
  MiddleNames?: Maybe<Scalars['String']>;
  Pronoun?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['Date']>;
  EndDate?: Maybe<Scalars['Date']>;
  Role?: Maybe<Enum_Componenthrbasicstaffprofile_Role>;
};

export type ComponentHrEmployeeFamily = {
  __typename?: 'ComponentHrEmployeeFamily';
  id: Scalars['ID'];
  EmployeeKids?: Maybe<Array<Maybe<ComponentHrEmployeeKids>>>;
  EmployeePartner?: Maybe<ComponentHrEmployeePartner>;
};

export type ComponentHrEmployeeFamilyInput = {
  EmployeeKids?: Maybe<Array<Maybe<ComponentHrEmployeeKidInput>>>;
  EmployeePartner?: Maybe<ComponentHrEmployeePartnerInput>;
};

export type EditComponentHrEmployeeFamilyInput = {
  id?: Maybe<Scalars['ID']>;
  EmployeeKids?: Maybe<Array<Maybe<EditComponentHrEmployeeKidInput>>>;
  EmployeePartner?: Maybe<EditComponentHrEmployeePartnerInput>;
};

export type ComponentHrEmployeeKids = {
  __typename?: 'ComponentHrEmployeeKids';
  id: Scalars['ID'];
  Name?: Maybe<Scalars['String']>;
  Likes?: Maybe<Scalars['String']>;
  Birthday?: Maybe<Scalars['Date']>;
};

export type ComponentHrEmployeeKidInput = {
  Name?: Maybe<Scalars['String']>;
  Likes?: Maybe<Scalars['String']>;
  Birthday?: Maybe<Scalars['Date']>;
};

export type EditComponentHrEmployeeKidInput = {
  id?: Maybe<Scalars['ID']>;
  Name?: Maybe<Scalars['String']>;
  Likes?: Maybe<Scalars['String']>;
  Birthday?: Maybe<Scalars['Date']>;
};

export type ComponentHrEmployeePartner = {
  __typename?: 'ComponentHrEmployeePartner';
  id: Scalars['ID'];
  Name?: Maybe<Scalars['String']>;
  Likes?: Maybe<Scalars['String']>;
  Birthday?: Maybe<Scalars['Date']>;
};

export type ComponentHrEmployeePartnerInput = {
  Name?: Maybe<Scalars['String']>;
  Likes?: Maybe<Scalars['String']>;
  Birthday?: Maybe<Scalars['Date']>;
};

export type EditComponentHrEmployeePartnerInput = {
  id?: Maybe<Scalars['ID']>;
  Name?: Maybe<Scalars['String']>;
  Likes?: Maybe<Scalars['String']>;
  Birthday?: Maybe<Scalars['Date']>;
};

export type ComponentHrEmployeePay = {
  __typename?: 'ComponentHrEmployeePay';
  id: Scalars['ID'];
  Bank?: Maybe<Scalars['String']>;
  AccountNumber?: Maybe<Scalars['String']>;
  IrdNumber?: Maybe<Scalars['String']>;
  HourlyPayRate?: Maybe<Scalars['Float']>;
  MinHoursWeekly?: Maybe<Scalars['Float']>;
};

export type ComponentHrEmployeePayInput = {
  Bank?: Maybe<Scalars['String']>;
  AccountNumber?: Maybe<Scalars['String']>;
  IrdNumber?: Maybe<Scalars['String']>;
  HourlyPayRate?: Maybe<Scalars['Float']>;
  MinHoursWeekly?: Maybe<Scalars['Float']>;
};

export type EditComponentHrEmployeePayInput = {
  id?: Maybe<Scalars['ID']>;
  Bank?: Maybe<Scalars['String']>;
  AccountNumber?: Maybe<Scalars['String']>;
  IrdNumber?: Maybe<Scalars['String']>;
  HourlyPayRate?: Maybe<Scalars['Float']>;
  MinHoursWeekly?: Maybe<Scalars['Float']>;
};

export type ComponentHrEmployeeRecord = {
  __typename?: 'ComponentHrEmployeeRecord';
  id: Scalars['ID'];
  EmployeeDetails?: Maybe<ComponentHrBasicStaffProfile>;
  EmployeePay?: Maybe<ComponentHrEmployeePay>;
  EmployeeFamily?: Maybe<ComponentHrEmployeeFamily>;
};

export type ComponentHrEmployeeRecordInput = {
  EmployeeDetails?: Maybe<ComponentHrBasicStaffProfileInput>;
  EmployeePay?: Maybe<ComponentHrEmployeePayInput>;
  EmployeeFamily?: Maybe<ComponentHrEmployeeFamilyInput>;
};

export type EditComponentHrEmployeeRecordInput = {
  id?: Maybe<Scalars['ID']>;
  EmployeeDetails?: Maybe<EditComponentHrBasicStaffProfileInput>;
  EmployeePay?: Maybe<EditComponentHrEmployeePayInput>;
  EmployeeFamily?: Maybe<EditComponentHrEmployeeFamilyInput>;
};

export enum Enum_Componenthrperformancereview_Workstofullpotential {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Qualityofwork {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Workconsistency {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Communication {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Independentwork {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Takesinitiative {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Groupwork {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Productivity {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Creativity {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Honesty {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Integrity {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Coworkerrelations {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Customerrelations {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Technicalskills {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Dependability {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Punctuality {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export enum Enum_Componenthrperformancereview_Attendance {
  Unsatisfactory = 'Unsatisfactory',
  Satisfactory = 'Satisfactory',
  Good = 'Good',
  Excellent = 'Excellent'
}

export type ComponentHrPerformanceReview = {
  __typename?: 'ComponentHrPerformanceReview';
  id: Scalars['ID'];
  WorksToFullPotential?: Maybe<Enum_Componenthrperformancereview_Workstofullpotential>;
  QualityOfWork?: Maybe<Enum_Componenthrperformancereview_Qualityofwork>;
  WorkConsistency?: Maybe<Enum_Componenthrperformancereview_Workconsistency>;
  Communication?: Maybe<Enum_Componenthrperformancereview_Communication>;
  IndependentWork?: Maybe<Enum_Componenthrperformancereview_Independentwork>;
  TakesInitiative?: Maybe<Enum_Componenthrperformancereview_Takesinitiative>;
  GroupWork?: Maybe<Enum_Componenthrperformancereview_Groupwork>;
  Productivity?: Maybe<Enum_Componenthrperformancereview_Productivity>;
  Creativity?: Maybe<Enum_Componenthrperformancereview_Creativity>;
  Honesty?: Maybe<Enum_Componenthrperformancereview_Honesty>;
  Integrity?: Maybe<Enum_Componenthrperformancereview_Integrity>;
  CoworkerRelations?: Maybe<Enum_Componenthrperformancereview_Coworkerrelations>;
  CustomerRelations?: Maybe<Enum_Componenthrperformancereview_Customerrelations>;
  TechnicalSkills?: Maybe<Enum_Componenthrperformancereview_Technicalskills>;
  Dependability?: Maybe<Enum_Componenthrperformancereview_Dependability>;
  Punctuality?: Maybe<Enum_Componenthrperformancereview_Punctuality>;
  Attendance?: Maybe<Enum_Componenthrperformancereview_Attendance>;
  AchievedGoalsFromLastReview?: Maybe<Scalars['String']>;
  GoalsForNextReview?: Maybe<Scalars['String']>;
  GeneralComments?: Maybe<Scalars['String']>;
  DateEdited?: Maybe<Scalars['DateTime']>;
  ReviewCompletedBy?: Maybe<AdminUser>;
  TimeConfirmedByEmployee?: Maybe<Scalars['DateTime']>;
  ReleasedToEmployee?: Maybe<Scalars['Boolean']>;
  ConfirmedByEmployee?: Maybe<Scalars['Boolean']>;
};

export type ComponentHrPerformanceReviewInput = {
  WorksToFullPotential?: Maybe<Enum_Componenthrperformancereview_Workstofullpotential>;
  QualityOfWork?: Maybe<Enum_Componenthrperformancereview_Qualityofwork>;
  WorkConsistency?: Maybe<Enum_Componenthrperformancereview_Workconsistency>;
  Communication?: Maybe<Enum_Componenthrperformancereview_Communication>;
  IndependentWork?: Maybe<Enum_Componenthrperformancereview_Independentwork>;
  TakesInitiative?: Maybe<Enum_Componenthrperformancereview_Takesinitiative>;
  GroupWork?: Maybe<Enum_Componenthrperformancereview_Groupwork>;
  Productivity?: Maybe<Enum_Componenthrperformancereview_Productivity>;
  Creativity?: Maybe<Enum_Componenthrperformancereview_Creativity>;
  Honesty?: Maybe<Enum_Componenthrperformancereview_Honesty>;
  Integrity?: Maybe<Enum_Componenthrperformancereview_Integrity>;
  CoworkerRelations?: Maybe<Enum_Componenthrperformancereview_Coworkerrelations>;
  CustomerRelations?: Maybe<Enum_Componenthrperformancereview_Customerrelations>;
  TechnicalSkills?: Maybe<Enum_Componenthrperformancereview_Technicalskills>;
  Dependability?: Maybe<Enum_Componenthrperformancereview_Dependability>;
  Punctuality?: Maybe<Enum_Componenthrperformancereview_Punctuality>;
  Attendance?: Maybe<Enum_Componenthrperformancereview_Attendance>;
  AchievedGoalsFromLastReview?: Maybe<Scalars['String']>;
  GoalsForNextReview?: Maybe<Scalars['String']>;
  GeneralComments?: Maybe<Scalars['String']>;
  DateEdited?: Maybe<Scalars['DateTime']>;
  ReviewCompletedBy?: Maybe<Scalars['ID']>;
  TimeConfirmedByEmployee?: Maybe<Scalars['DateTime']>;
  ReleasedToEmployee?: Maybe<Scalars['Boolean']>;
  ConfirmedByEmployee?: Maybe<Scalars['Boolean']>;
};

export type EditComponentHrPerformanceReviewInput = {
  id?: Maybe<Scalars['ID']>;
  WorksToFullPotential?: Maybe<Enum_Componenthrperformancereview_Workstofullpotential>;
  QualityOfWork?: Maybe<Enum_Componenthrperformancereview_Qualityofwork>;
  WorkConsistency?: Maybe<Enum_Componenthrperformancereview_Workconsistency>;
  Communication?: Maybe<Enum_Componenthrperformancereview_Communication>;
  IndependentWork?: Maybe<Enum_Componenthrperformancereview_Independentwork>;
  TakesInitiative?: Maybe<Enum_Componenthrperformancereview_Takesinitiative>;
  GroupWork?: Maybe<Enum_Componenthrperformancereview_Groupwork>;
  Productivity?: Maybe<Enum_Componenthrperformancereview_Productivity>;
  Creativity?: Maybe<Enum_Componenthrperformancereview_Creativity>;
  Honesty?: Maybe<Enum_Componenthrperformancereview_Honesty>;
  Integrity?: Maybe<Enum_Componenthrperformancereview_Integrity>;
  CoworkerRelations?: Maybe<Enum_Componenthrperformancereview_Coworkerrelations>;
  CustomerRelations?: Maybe<Enum_Componenthrperformancereview_Customerrelations>;
  TechnicalSkills?: Maybe<Enum_Componenthrperformancereview_Technicalskills>;
  Dependability?: Maybe<Enum_Componenthrperformancereview_Dependability>;
  Punctuality?: Maybe<Enum_Componenthrperformancereview_Punctuality>;
  Attendance?: Maybe<Enum_Componenthrperformancereview_Attendance>;
  AchievedGoalsFromLastReview?: Maybe<Scalars['String']>;
  GoalsForNextReview?: Maybe<Scalars['String']>;
  GeneralComments?: Maybe<Scalars['String']>;
  DateEdited?: Maybe<Scalars['DateTime']>;
  ReviewCompletedBy?: Maybe<Scalars['ID']>;
  TimeConfirmedByEmployee?: Maybe<Scalars['DateTime']>;
  ReleasedToEmployee?: Maybe<Scalars['Boolean']>;
  ConfirmedByEmployee?: Maybe<Scalars['Boolean']>;
};

export enum Enum_Componenthrshift_Shiftrole {
  FohSenior = 'FOHSenior',
  FohAssistant = 'FOHAssistant',
  HeadChef = 'HeadChef',
  Chef = 'Chef',
  KitchenAssistantFood = 'KitchenAssistantFood',
  KitchenAssistantCleanup = 'KitchenAssistantCleanup',
  Caretaker = 'Caretaker'
}

export type ComponentHrShift = {
  __typename?: 'ComponentHrShift';
  id: Scalars['ID'];
  ShiftStart?: Maybe<Scalars['DateTime']>;
  ShiftEnd?: Maybe<Scalars['DateTime']>;
  TotalLength?: Maybe<Scalars['Float']>;
  BreakEntitlement?: Maybe<Scalars['Float']>;
  ShiftRole?: Maybe<Enum_Componenthrshift_Shiftrole>;
  DutyManager?: Maybe<Scalars['Boolean']>;
  CheckedIn?: Maybe<Scalars['DateTime']>;
  CheckedOut?: Maybe<Scalars['DateTime']>;
};

export type ComponentHrShiftInput = {
  ShiftStart?: Maybe<Scalars['DateTime']>;
  ShiftEnd?: Maybe<Scalars['DateTime']>;
  TotalLength?: Maybe<Scalars['Float']>;
  BreakEntitlement?: Maybe<Scalars['Float']>;
  ShiftRole?: Maybe<Enum_Componenthrshift_Shiftrole>;
  DutyManager?: Maybe<Scalars['Boolean']>;
  CheckedIn?: Maybe<Scalars['DateTime']>;
  CheckedOut?: Maybe<Scalars['DateTime']>;
};

export type EditComponentHrShiftInput = {
  id?: Maybe<Scalars['ID']>;
  ShiftStart?: Maybe<Scalars['DateTime']>;
  ShiftEnd?: Maybe<Scalars['DateTime']>;
  TotalLength?: Maybe<Scalars['Float']>;
  BreakEntitlement?: Maybe<Scalars['Float']>;
  ShiftRole?: Maybe<Enum_Componenthrshift_Shiftrole>;
  DutyManager?: Maybe<Scalars['Boolean']>;
  CheckedIn?: Maybe<Scalars['DateTime']>;
  CheckedOut?: Maybe<Scalars['DateTime']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Allergens | AllergensConnection | AllergensAggregator | AllergensAggregatorSum | AllergensAggregatorAvg | AllergensAggregatorMin | AllergensAggregatorMax | AllergensGroupBy | AllergensConnectionId | AllergensConnectionCreated_At | AllergensConnectionUpdated_At | AllergensConnectionName | AllergensConnectionExamples | AllergensConnectionPriority | AllergensConnectionPublished_At | CreateAllergenPayload | UpdateAllergenPayload | DeleteAllergenPayload | BarItem | BarItemConnection | BarItemAggregator | BarItemAggregatorSum | BarItemAggregatorAvg | BarItemAggregatorMin | BarItemAggregatorMax | BarItemGroupBy | BarItemConnectionId | BarItemConnectionCreated_At | BarItemConnectionUpdated_At | BarItemConnectionName | BarItemConnectionShortDescription | BarItemConnectionLongDescription | BarItemConnectionAbv | BarItemConnectionPrice | BarItemConnectionProductImage | BarItemConnectionStock | BarItemConnectionPour | BarItemConnectionServe | BarItemConnectionPublished_At | CreateBarItemPayload | UpdateBarItemPayload | DeleteBarItemPayload | BarSection | BarSectionConnection | BarSectionAggregator | BarSectionGroupBy | BarSectionConnectionId | BarSectionConnectionCreated_At | BarSectionConnectionUpdated_At | BarSectionConnectionName | BarSectionConnectionDescription | BarSectionConnectionBar_Item | BarSectionConnectionBuilding | BarSectionConnectionPublished_At | CreateBarSectionPayload | UpdateBarSectionPayload | DeleteBarSectionPayload | MenuItem | MenuItemConnection | MenuItemAggregator | MenuItemAggregatorSum | MenuItemAggregatorAvg | MenuItemAggregatorMin | MenuItemAggregatorMax | MenuItemGroupBy | MenuItemConnectionId | MenuItemConnectionCreated_At | MenuItemConnectionUpdated_At | MenuItemConnectionName | MenuItemConnectionShortDescription | MenuItemConnectionLongDescription | MenuItemConnectionPrice | MenuItemConnectionPriority | MenuItemConnectionProductImage | MenuItemConnectionSection | MenuItemConnectionPublished_At | CreateMenuItemPayload | UpdateMenuItemPayload | DeleteMenuItemPayload | MenuSections | MenuSectionsConnection | MenuSectionsAggregator | MenuSectionsAggregatorSum | MenuSectionsAggregatorAvg | MenuSectionsAggregatorMin | MenuSectionsAggregatorMax | MenuSectionsGroupBy | MenuSectionsConnectionId | MenuSectionsConnectionCreated_At | MenuSectionsConnectionUpdated_At | MenuSectionsConnectionName | MenuSectionsConnectionDescription | MenuSectionsConnectionPriority | MenuSectionsConnectionBuilding | MenuSectionsConnectionPublished_At | CreateMenuSectionPayload | UpdateMenuSectionPayload | DeleteMenuSectionPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentHrBasicStaffProfile | ComponentHrEmployeeFamily | ComponentHrEmployeeKids | ComponentHrEmployeePartner | ComponentHrEmployeePay | ComponentHrEmployeeRecord | ComponentHrPerformanceReview | ComponentHrShift;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allergen?: Maybe<Allergens>;
  allergens?: Maybe<Array<Maybe<Allergens>>>;
  allergensConnection?: Maybe<AllergensConnection>;
  barItem?: Maybe<BarItem>;
  barItems?: Maybe<Array<Maybe<BarItem>>>;
  barItemsConnection?: Maybe<BarItemConnection>;
  barSection?: Maybe<BarSection>;
  barSections?: Maybe<Array<Maybe<BarSection>>>;
  barSectionsConnection?: Maybe<BarSectionConnection>;
  menuItem?: Maybe<MenuItem>;
  menuItems?: Maybe<Array<Maybe<MenuItem>>>;
  menuItemsConnection?: Maybe<MenuItemConnection>;
  menuSection?: Maybe<MenuSections>;
  menuSections?: Maybe<Array<Maybe<MenuSections>>>;
  menuSectionsConnection?: Maybe<MenuSectionsConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryAllergenArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryAllergensArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryAllergensConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBarItemArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryBarItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryBarItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBarSectionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryBarSectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryBarSectionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMenuItemArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMenuItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMenuItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMenuSectionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMenuSectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMenuSectionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAllergen?: Maybe<CreateAllergenPayload>;
  updateAllergen?: Maybe<UpdateAllergenPayload>;
  deleteAllergen?: Maybe<DeleteAllergenPayload>;
  createBarItem?: Maybe<CreateBarItemPayload>;
  updateBarItem?: Maybe<UpdateBarItemPayload>;
  deleteBarItem?: Maybe<DeleteBarItemPayload>;
  createBarSection?: Maybe<CreateBarSectionPayload>;
  updateBarSection?: Maybe<UpdateBarSectionPayload>;
  deleteBarSection?: Maybe<DeleteBarSectionPayload>;
  createMenuItem?: Maybe<CreateMenuItemPayload>;
  updateMenuItem?: Maybe<UpdateMenuItemPayload>;
  deleteMenuItem?: Maybe<DeleteMenuItemPayload>;
  createMenuSection?: Maybe<CreateMenuSectionPayload>;
  updateMenuSection?: Maybe<UpdateMenuSectionPayload>;
  deleteMenuSection?: Maybe<DeleteMenuSectionPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateAllergenArgs = {
  input?: Maybe<CreateAllergenInput>;
};


export type MutationUpdateAllergenArgs = {
  input?: Maybe<UpdateAllergenInput>;
};


export type MutationDeleteAllergenArgs = {
  input?: Maybe<DeleteAllergenInput>;
};


export type MutationCreateBarItemArgs = {
  input?: Maybe<CreateBarItemInput>;
};


export type MutationUpdateBarItemArgs = {
  input?: Maybe<UpdateBarItemInput>;
};


export type MutationDeleteBarItemArgs = {
  input?: Maybe<DeleteBarItemInput>;
};


export type MutationCreateBarSectionArgs = {
  input?: Maybe<CreateBarSectionInput>;
};


export type MutationUpdateBarSectionArgs = {
  input?: Maybe<UpdateBarSectionInput>;
};


export type MutationDeleteBarSectionArgs = {
  input?: Maybe<DeleteBarSectionInput>;
};


export type MutationCreateMenuItemArgs = {
  input?: Maybe<CreateMenuItemInput>;
};


export type MutationUpdateMenuItemArgs = {
  input?: Maybe<UpdateMenuItemInput>;
};


export type MutationDeleteMenuItemArgs = {
  input?: Maybe<DeleteMenuItemInput>;
};


export type MutationCreateMenuSectionArgs = {
  input?: Maybe<CreateMenuSectionInput>;
};


export type MutationUpdateMenuSectionArgs = {
  input?: Maybe<UpdateMenuSectionInput>;
};


export type MutationDeleteMenuSectionArgs = {
  input?: Maybe<DeleteMenuSectionInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GetMenuItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuItemsQuery = (
  { __typename?: 'Query' }
  & { menuItems?: Maybe<Array<Maybe<(
    { __typename?: 'MenuItem' }
    & Pick<MenuItem, 'Name' | 'ShortDescription' | 'LongDescription' | 'Price' | 'Priority'>
    & { Section?: Maybe<(
      { __typename?: 'MenuSections' }
      & Pick<MenuSections, 'Name'>
    )>, Allergens?: Maybe<Array<Maybe<(
      { __typename?: 'Allergens' }
      & Pick<Allergens, 'Name'>
    )>>> }
  )>>> }
);

export type GetAllergensQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllergensQuery = (
  { __typename?: 'Query' }
  & { allergens?: Maybe<Array<Maybe<(
    { __typename?: 'Allergens' }
    & Pick<Allergens, 'Name' | 'Examples'>
  )>>> }
);

export const GetMenuItemsDocument = gql`
    query getMenuItems {
  menuItems {
    Name
    ShortDescription
    LongDescription
    Price
    Priority
    Section {
      Name
    }
    Allergens {
      Name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMenuItemsGQL extends Apollo.Query<GetMenuItemsQuery, GetMenuItemsQueryVariables> {
    document = GetMenuItemsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllergensDocument = gql`
    query getAllergens {
  allergens {
    Name
    Examples
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllergensGQL extends Apollo.Query<GetAllergensQuery, GetAllergensQueryVariables> {
    document = GetAllergensDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }