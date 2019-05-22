export interface PageableParams {
  page?: number;
  size?: number;
}

export interface PageSlice {
  content: any[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
}
