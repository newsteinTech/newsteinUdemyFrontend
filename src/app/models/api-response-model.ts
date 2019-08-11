export class ApiResponseModel<T> {
    public isValid: boolean;
    public data: T;
    public errors: string[];
}
