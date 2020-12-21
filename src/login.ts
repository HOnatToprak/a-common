import {Infer, object, refine, size, string} from "superstruct";

export const Username = size(string(), 3, 15);
export const Password = size(string(), 5, 20);


export const LoginRequest = refine(object({
    username: Username,
    password: Password,
}), "MyRef", _ => false);

export type LoginRequest = Infer<typeof LoginRequest>

export type LoginResponse = {
    Token: string
}
