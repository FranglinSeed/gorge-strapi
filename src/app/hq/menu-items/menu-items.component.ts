import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { gsap, Power2, Expo, Bounce, Linear } from 'gsap/dist/gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Apollo, QueryRef } from "apollo-angular";
import { map, takeUntil } from 'rxjs/operators';


import { MenuItem } from "./model/MenuItem.model";
import { MenuItemsService } from "./services/menu-items.service"
import { AuthService } from '../../kaitiaki/_services/auth.service';

gsap.registerPlugin( ScrollToPlugin );

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})

export class MenuItemsComponent implements OnInit, OnDestroy {


  MenuItemFG: FormGroup;
  serverMessage: string;
  CrudData;
  OrderedCrudData;
  CrudSub: Subscription;
  AllergenData;
  AllergenSub: Subscription;
  MenuSectionsData;
  MenuSectionsSub: Subscription;

  private type: 'add' | 'edit' | 'delete' | 'reset' = 'add';
  private loading: boolean;
  private unsubscribeAll$ = new Subject();
  private MI: MenuItem;

  constructor( public DBS: MenuItemsService, public FB: FormBuilder, private AS: AuthService, private AP: Apollo) { }

  ngOnInit():void {
    this.MenuItemFG = this.FB.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      short_description: ['', [ Validators.required, Validators.minLength(10) ]],
      long_description: ['', [ Validators.required, Validators.minLength(10) ]],
      price: ['', [ Validators.required, Validators.pattern('\\d+(\\.\\d{2})?') ]],
      section: ['', [ Validators.required ]],
      allergens: [''],
      active: [ true ]
    });

    // SUBSCRIBE TO MENU ITEMS
    this.CrudSub = this.DBS.getItems().subscribe(({ data, loading }) => {
      this.loading = loading;
      this.CrudData = data.menuItems;
      let tmpArr1 = [];
      let tmpArr2 = [];
      let tmpArr3 = [];
      let tmpArr4 = [];
      for (let i =0; i < this.CrudData.length; i ++) {
        switch (this.CrudData[i].Section.id) {
          case "1":
            tmpArr1.push(this.CrudData[i]);
            break;
          case "2":
            tmpArr2.push(this.CrudData[i]);
            break;
          case "3":
            tmpArr3.push(this.CrudData[i]);
            break;
          case "4":
            tmpArr4.push(this.CrudData[i]);
            break;
        }
      }
      this.OrderedCrudData = tmpArr1.concat(tmpArr2).concat(tmpArr3).concat(tmpArr4);
    },(error) => {
      console.log('there was an error sending the getItems', error);
    });

    // SUBSCRIBE TO ALERGENS
    this.AllergenData = this.DBS.getAllergens().pipe(takeUntil(this.unsubscribeAll$)).pipe( map( ({data, loading}) => {
      let jsonStr = JSON.stringify(data);
      jsonStr = jsonStr.substring(13);
      jsonStr = jsonStr.substring(0, jsonStr.length - 1);
      let allergenData = JSON.parse(jsonStr);
      return allergenData;
      // let temp_Data = data.allergens;
      // return temp_Data;
    }));


    // SUBSCRIBE TO MENU ITEMS
    this.MenuSectionsData = this.DBS.getSections().pipe(takeUntil(this.unsubscribeAll$)).pipe( map( ({data, loading}) => {
      let jsonStr = JSON.stringify(data);
      jsonStr = jsonStr.substring(16);
      jsonStr = jsonStr.substring(0, jsonStr.length - 1);
      let menusectionData = JSON.parse(jsonStr);
      return menusectionData;
      // let temp_Data = data.menuSections;
      // return temp_Data;
    } ));
  }

  ngOnDestroy() {
    // UNSUBSCRIPBE
    this.CrudSub.unsubscribe();
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

  get isAdd() {
    return this.type === 'add';
  }

  get isEdit() {
    return this.type === 'edit';
  }

  get isDelete() {
    return this.type === 'delete';
  }

  get name() {
    return this.MenuItemFG.get( 'name' );
  }

  get short_description() {
    return this.MenuItemFG.get( 'short_description' );
  }

  get long_description() {
    return this.MenuItemFG.get( 'long_description' );
  }

  get price() {
    return this.MenuItemFG.get( 'price' );
  }

  get section() {
    return this.MenuItemFG.get( 'section' );
  }

  get allergens() {
    return this.MenuItemFG.get( 'allergens' );
  }

  get active() {
    return this.MenuItemFG.get( 'active' );
  }

  async onSubmit() {
    this.loading = true;
    const name = this.name.value;
    const short_description = this.short_description.value;
    const long_description = this.long_description.value;
    const price = Number(this.price.value);
    const section = this.section.value;
    const allergens = this.allergens.value;
    const active = this.active.value;
    try {
      if ( this.isAdd ) {
        this.AddItemData( { Name: name, ShortDescription: short_description, LongDescription: long_description, Price: price, Section: section, Allergens: allergens, Priority: 0 } );
      }
      if ( this.isEdit ) {
        this.updateItemData( this.MI.id, { Name: name, ShortDescription: short_description, LongDescription: long_description, Price: price, Section: section, Allergens: allergens } );
      }
      if (this.isDelete) {
        this.destroyItem(this.MI.id);
      }
    } catch (err) {
      this.serverMessage = err;
    }
    this.loading = false;
  }

  // UPDATE ITEM DATA
  async updateItemData( ITEM_ID, ITEM ) {
    const itemData: MenuItem = {
      Name: ITEM.Name,
      ShortDescription: ITEM.ShortDescription,
      LongDescription: ITEM.Long_description,
      Price: ITEM.Price,
      Section: ITEM.Section,
      Allergens: ITEM.Allergens
    }
    this.DBS.updateItem(ITEM_ID,itemData).subscribe(({ data }) => {
      console.log("updateItemData log : " + data);
    },(error) => {
      console.log('there was an error sending the mutation', error);
    });
  }

  // CREATE ITEM DATA
  async AddItemData( ITEM: MenuItem ) {
    console.log( "Create Item with data: " + ITEM );
    this.DBS.AddMenuItem(ITEM).subscribe(({ data }) => {
      console.log("CreateMenuItem log : " + data);
    },(error) => {
      console.log('there was an error sending the mutation', error);
    });

  }

  // EDIT ITEM
  editItem( ITEM_ID: string ) {
    this.changeType( 'edit' );
    gsap.to("#container", {duration: .8, scrollTo: "#form-container", ease: Power2.easeInOut })
    this.MI = this.CrudData.filter( x => x.id == ITEM_ID )[0];
    let algItems = [];
    for (let i =0 ; i < this.MI.Allergens.length; i ++) {
      algItems.push(this.MI.Allergens[i].id);
    }
    this.MenuItemFG.setValue({
      name: this.MI.Name,
      short_description: this.MI.ShortDescription,
      long_description: this.MI.LongDescription,
      price: this.MI.Price,
      section: this.MI.Section.id,
      allergens: algItems,
      active: [ true ]
    })
  }

  // DESTROY ITEM
  destroyItem( ITEM_ID: string ) {
    this.DBS.deleteItem (ITEM_ID).subscribe(({ data }) => {
      console.log("deleteItemData log : " + data);
    },(error) => {
      console.log('there was an error sending the mutation', error);
    });
  }

  // SWITCH FORM MODE
  changeType(val) {
    this.type = val;
  }

  // RESET THE FORM
  resetForm() {
    console.log("Reset Form");
    this.MenuItemFG.reset();
    this.MenuItemFG.markAsPristine();
    this.MenuItemFG.markAsUntouched();

    this.MenuItemFG.controls['name'].setErrors(null);
    this.MenuItemFG.get('name').clearValidators();
    this.MenuItemFG.controls['short_description'].setErrors(null);
    this.MenuItemFG.get('short_description').clearValidators();
    this.MenuItemFG.controls['long_description'].setErrors(null);
    this.MenuItemFG.get('long_description').clearValidators();
    this.MenuItemFG.controls['price'].setErrors(null);
    this.MenuItemFG.get('price').clearValidators()
    this.MenuItemFG.controls['section'].setErrors(null);
    this.MenuItemFG.get('section').clearValidators();
    this.MenuItemFG.controls['allergens'].setErrors(null);
    this.MenuItemFG.get('allergens').clearValidators();
  }

  //Changing Priority
  changePriority(item: MenuItem, index: number) {
    let oldPriority = item.Priority;
    let tmp = JSON.stringify(item).replace("\"Priority\":" + oldPriority,"\"Priority\":" + index);
    let updatedItem = JSON.parse(tmp);
    return updatedItem;
  }
  // DRAG DROP SORTING
  drop( event: CdkDragDrop< string[] > ) {
    if(event.previousIndex == event.currentIndex) {return;}
    let prevIndex = event.previousIndex;
    let curIndex = event.currentIndex;
    let tmpArray = [];
    let currentItem = this.OrderedCrudData[prevIndex];
    let index = 0;
    for (let i = 0; i < this.OrderedCrudData.length; i ++) {
      if( i == prevIndex) {
        continue
      } else if( i == curIndex) {
        let tmpItem = this.OrderedCrudData[i];
        tmpItem = this.changePriority(tmpItem, index);
        index ++;
        tmpArray.push(tmpItem);
        tmpItem = this.changePriority(currentItem, index);
        index ++;
        tmpArray.push(tmpItem);
      } else if(i != prevIndex && i != curIndex){
        let tmpItem = this.OrderedCrudData[i];
        tmpItem = this.changePriority(tmpItem, index);
        index ++;
        tmpArray.push(tmpItem);
      }
    }
    // moveItemInArray( tmpArray, event.previousIndex, event.currentIndex );
    this.DBS.sortItems( tmpArray, ((prevIndex > curIndex) ? curIndex : prevIndex), ((prevIndex < curIndex) ? curIndex : prevIndex));
  }

}
