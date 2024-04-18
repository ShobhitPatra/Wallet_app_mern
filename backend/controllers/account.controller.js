import zod from "zod";

export const signupSchema = zod.object({
  username: zod.email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string().min(8),
});
