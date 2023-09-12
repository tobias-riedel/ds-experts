export type ProjectFormItem = {
  id?: string;
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

export type ExpertFormItem = {
  id?: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  img?: string;
  orderId?: number | string;
  isPublic?: boolean;
  startedAt?: string;
  endedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  slug?: string;
  // profile?: ProfileFormItem;
};

// export type ProfileFormItem = {
//   id?: string;
//   email?: string;
//   phone?: string;
//   bio: string;
//   isPublic?: boolean;
//   expertId: string;
//   expert: ExpertFormItem;
// };
