import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Allergen } from '../models/allergen.model';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  
  constructor(  private afAuth: AngularFireAuth, private DB: AngularFirestore  ) { }

  // ALLERGENS
  getAllergens() {
    return this.DB.collection< Allergen >('allergens', ref => ref.orderBy( 'priority' )).valueChanges({ idField: 'id' });
  }

  getAllergenToEdit( allergenId: string ) {
    return this.DB.collection( 'allergens' ).doc( allergenId );
  }
  
  updateAllergen( allergenId: string, allergen:Allergen ) {
    return this.DB.collection( 'allergens' ).doc( allergenId ).update({ name: allergen.name, examples: allergen.examples });
  }

  sortAllergens( allergen: Allergen[] ) {
    const DB = firebase.firestore();
    const batch = DB.batch();
    const refs = allergen.map(b => DB.collection('allergens').doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    batch.commit();
  }

  deleteAllergen( allergenId: string ) {
    if( confirm("Do you wish to delete Allergen?")) {
      return this.DB.collection( 'allergens' ).doc( allergenId ).delete();
    };
  }

}
