import { UserModel } from './user-model';

export class LoginResponse {
    public token: string;
    public user: UserModel;
}
