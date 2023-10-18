import { Order } from "../order/Order";
import { Product } from "../product/Product";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  isAdmin: boolean | null;
  lastName: string | null;
  orders?: Array<Order>;
  product?: Product | null;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
