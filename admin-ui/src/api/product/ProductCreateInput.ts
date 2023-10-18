import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { UserCreateNestedManyWithoutProductsInput } from "./UserCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors: InputJsonValue;
  description: InputJsonValue;
  images: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  title: string;
  titlePrice: number;
  users?: UserCreateNestedManyWithoutProductsInput;
  variants: InputJsonValue;
};
