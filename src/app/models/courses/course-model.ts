import { ContentModel } from './contentModel';
import { TeacherModel } from '../user/teacher-model';

export class CourseModel {
    public _id: string;
    public teacher: TeacherModel;
    public title: string;
    public description: string;
    public fee: number;
    public image: string;
    public previewVideo: string;
    public rating: number;
    public contents: ContentModel[];
}
