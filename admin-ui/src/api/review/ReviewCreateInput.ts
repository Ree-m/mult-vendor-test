import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  rating: number;
  user?: UserWhereUniqueInput | null;
};
