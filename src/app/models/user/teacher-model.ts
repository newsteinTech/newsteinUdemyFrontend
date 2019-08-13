import { UserModel } from './user-model';

export class TeacherModel {
    public _id: string;
    public user: UserModel;
    public about: string; 
}
