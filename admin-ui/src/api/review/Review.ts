import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  id: string;
  rating: number;
  updatedAt: Date;
  user?: User | null;
};
