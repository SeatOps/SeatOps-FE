import { z } from "zod";

export const sampleSchema = z.object({
  email: z.email("올바른 이메일 주소를 입력해 주세요."),
  password: z.string().min(10, "비밀번호는 10자 이상이어야 합니다."),
});

export type SampleFormValues = z.infer<typeof sampleSchema>;
