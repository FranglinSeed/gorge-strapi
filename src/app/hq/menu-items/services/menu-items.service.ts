import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';


import { AuthService } from '../../../kaitiaki/_services/auth.service';
import { MenuItem } from '../model/MenuItem.model';

@Injectable({
  providedIn: 'root'
})

export class MenuItemsService {
  private userData: any; // Save logged in user data
  private authToken: string;
  constructor( private DBS: AuthService, private AP: Apollo,) { }

  // ITEMS
  getItems() {
    const QUERY_MENUITEM = gql`
      query getMenuItems {
      menuItems (
        sort: "Priority"
      ){
        id,
          Name,
          ShortDescription,
          LongDescription,
          Price,
          Priority,
          Section {
          id,
            Name,
        },
        Allergens {
          id,
            Name
        }
      }
    }
      `;
    return this.AP.watchQuery<any>({
      query: QUERY_MENUITEM,
      pollInterval: 500,
    }).valueChanges;
  }

  // ALLERGENS
  getAllergens() {
    const QUERY_ALLERGENS = gql`
      query getAllergens {
        allergens {
          id,
          Name,
          Priority,
          Examples
        }
      }
      `;
    return this.AP.query({
      query: QUERY_ALLERGENS,
    });
  }

  // Sections
  getSections() {
    const QUERY_SECTIONS = gql`
      query getSections {
        menuSections {
          id,
          Name,
          Priority,
          Description
        }
      }
      `;
    return this.AP.query({
      query: QUERY_SECTIONS,
    });
  }

  // EditItem
  updateItem(ITEM_ID: string, ITEM: MenuItem) {
    const UPDATE_MUTATION = gql`
    mutation submitMenu(
      $id: InputID!
      $itemData: editMenuItemInput!
    ) {
      updateMenuItem (
        input:{
          where: $id
          data: $itemData
        }
      ) {
        menuItem {
          Name
          Price
          ShortDescription
          LongDescription
        }
      }
    }
    `;
    return this.AP.mutate({
      mutation: UPDATE_MUTATION,
      variables: {
        'id': {id: ITEM_ID},
        'itemData': ITEM,
      },
    });
  }

  // AddItem
  AddMenuItem(ITEM: MenuItem) {
    const ADD_TODO = gql`
    mutation submitMenu(
        $name: String!
        $shortdesc: String!
        $longdesc: String!
        $price: Float!
        $priority: Int!
        $section: ID!
        $allgergen: [ID]!
      ) {
      createMenuItem(input:{ data : {
        Name: $name,
        ShortDescription: $shortdesc,
        LongDescription: $longdesc,
        Price: $price,
        Priority: $priority,
        Section: $section,
        Allergens: $allgergen}}) {
        menuItem {
          Name
          Price
        }
      }
    }
    `;
    return this.AP.mutate({
      mutation: ADD_TODO,
      variables: {
        'name': ITEM.Name,
        'shortdesc': ITEM.ShortDescription,
        'longdesc': ITEM.LongDescription,
        'price': ITEM.Price,
        'section': ITEM.Section,
        'allgergen': ITEM.Allergens,
        'priority': ITEM.Priority,
      },
    });
  }

  // Delete Item
  deleteItem(ITEM_ID: string) {
    if (confirm('Do you wish to delete this MenuItem?')) {
      const DELETE_MUTATION = gql`
      mutation submitMenu(
        $id: ID!
      ) {
        deleteMenuItem(
        input: {
            where: {
              id: $id
            }
          }
        ){
        menuItem {
            id
          }
        }
      }
      `;
      return this.AP.mutate({
        mutation: DELETE_MUTATION,
        variables: {
          'id': ITEM_ID,
        },
      });
    }
    ;
  }


  sortItems( ITEM: MenuItem[], start, end) {
    const UPDATE_MUTATION = gql`
    mutation submitMenu(
      $id: InputID!
      $priority: Int!
    ) {
      updateMenuItem (
        input:{
          where: $id
          data: {
            Priority: $priority
          }
        }
      ) {
        menuItem {
          Name
          Price
          ShortDescription
          LongDescription
        }
      }
    }
    `;
    for(let i = start; i < end+1; i ++) {
      this.AP.mutate({
        mutation: UPDATE_MUTATION,
        variables: {
          'id': {id: ITEM[i].id},
          'priority': ITEM[i].Priority,
        },
      }).subscribe(({ data }) => {
        console.log("sorting items log : " + data);
      },(error) => {
        console.log('there was an error sending the mutation', error);
      });
    }
  }

}
