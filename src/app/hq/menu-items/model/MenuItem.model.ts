export interface MenuItem {
  id?: string;
  Priority?: number,
  Name?: string,
  ShortDescription?: string,
  LongDescription?: string,
  Price?: number,
  Section?: MenuSection,
  Allergens?: AllergensItem[],
}

export interface MenuSection {
  id?: number;
  name?: string;
  priority?: number;
}

export interface AllergensItem {
  id?: number;
  name?: string;
}
