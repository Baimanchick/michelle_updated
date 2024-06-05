export interface CategoryType {
  id: number;
  image: string;
  number: number;
  title_ru: string;
  title_tu: string;
  title_kg: string;
  title_en: string;
  link: string;
}

export interface SubCategoryType {
  map: any;
  id: number;
  category_id?: number;
  image: string;
  number: number;
  title_ru: string;
  title_tu: string;
  title_kg: string;
  title_en: string;
  link: string;
}
