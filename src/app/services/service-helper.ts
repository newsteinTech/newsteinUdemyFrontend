import { HandledErrorResponse } from '../models/shared/handled-error-response';

export class ServiceHelper {

    public static handleErrorResponse(error: any) : HandledErrorResponse {
        console.log(error);

        if (error.name && error.name == "HttpErrorResponse") {
            return new HandledErrorResponse(error.status, error.error);
        }
        
        return new HandledErrorResponse(600 , "Something went wrong please later");
    }
}
