import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { User } from "../user/User";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  id: string;
  images: JsonValue;
  order?: Order | null;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  users?: Array<User>;
  variants: JsonValue;
};
