export interface PlanType {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  typeDuration: string;
  feature: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
