import { UserModel } from '../user/user-model';
import { ContentModel } from './contentModel';

export class CourseModel {
    public _id: string;
    public teacher: UserModel;
    public title: string;
    public description: string;
    public fee: number;
    public image: string;
    public previewVideo: string;
    public contents: ContentModel[];
}
