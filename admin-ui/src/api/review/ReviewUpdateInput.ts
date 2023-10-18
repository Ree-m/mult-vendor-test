import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  rating?: number;
  user?: UserWhereUniqueInput | null;
};
