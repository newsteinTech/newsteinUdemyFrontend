import { HandledErrorResponse } from '../models/shared/handled-error-response';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

export class ServiceHelper {

    public static getAuthHeader() : HttpHeaders{
        let token: string = UserService.getToken();
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": token
        });
    }

    public static getOnlyAuthTokenHeader() : HttpHeaders{
        let token: string = UserService.getToken();
        return new HttpHeaders({
            "Authorization": token
        });
    }

    public static getHeader() : HttpHeaders{
        return new HttpHeaders({
            "Content-Type": "application/json"
        });
    }
    
    public static handleErrorResponse(error: any) : HandledErrorResponse {
        console.log(error);

        if (error.name && error.name == "HttpErrorResponse") {
            return new HandledErrorResponse(error.status, error.error);
        }
        
        return new HandledErrorResponse(600 , "Something went wrong please later");
    }
}
