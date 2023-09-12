export type ProjectFormItem = {
  projectName: string;
  partnerName: string;
  city: string;
  img: string;
  orderId?: number | string;
  description: string;
  isPublic?: boolean;
  startedAt?: string;
  endedAt?: string;
  locationLat?: number | string;
  locationLong?: number | string;
  slug?: string;
};
