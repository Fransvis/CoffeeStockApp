export interface Flavours {
  ID: number;
  name: string;
  Barcode: string;
  PricePerBox: number;
  PricePerPod: number;
  PodsPerBox: number;
  PhotoName: string;
}

export interface FlavoursCreate {
  name: string;
  Barcode: string;
  PricePerBox: number;
  PricePerPod: number;
  PodsPerBox: number;
  PhotoName: string;
}