import {object, size, string} from "superstruct";

export const Username = size(string(), 6, 15);
export const Password = size(string(), 8, 20);

export const LoginRequest = object({
    username: Username,
    password: Password,
});
