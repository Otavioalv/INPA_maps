export interface BuildingType {
  id: number;
  build_name: string;
  build_number: number;
  lnglat: string;
  // lnglat: string | string[];
  // lnglat: string[];
  switchs: string;
  // switchs: string | string[];
  // switchs: string[];
}

export type BuildingListType = BuildingType[];
