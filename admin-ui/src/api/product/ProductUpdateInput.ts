import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserUpdateManyWithoutProductsInput } from "./UserUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  title?: string;
  titlePrice?: number;
  users?: UserUpdateManyWithoutProductsInput;
  variants?: InputJsonValue;
};
