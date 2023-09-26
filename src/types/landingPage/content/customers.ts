export interface CustomerItem {
  image: string;
  name: string;
  date: string;
  stars: number;
  review: string;
}

export interface Customer {
  title: string;
  content: string;
  total: number;
  customers: CustomerItem[];
}
