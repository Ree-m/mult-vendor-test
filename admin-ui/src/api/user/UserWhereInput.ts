import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isAdmin?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  product?: ProductWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
  username?: StringFilter;
};
