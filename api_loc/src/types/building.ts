export interface BuildingType {
  id: number;
  build_name: string;
  build_number: number;
  lnglat: string;
  switchs: string;
}

export type BuildingListType = BuildingType[];
