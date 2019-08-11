import { ToastService } from '../services/shared/toast.service';
import { Router } from '@angular/router';
import { HandledErrorResponse } from '../models/shared/handled-error-response';
import { UserService } from '../services/user.service';

export abstract class BaseComponent {
    private baseRouter: Router;
    private baseToastService: ToastService;
    public loading: boolean;

    protected constructor(router: Router, toastService: ToastService) {
        this.baseRouter = router;
        this.baseToastService = toastService;
    }

    protected checkUnauthorized(handledError: HandledErrorResponse): void {
        this.baseToastService.error(handledError.message);

        if (handledError.code == 401) {
            UserService.logout();
            this.baseRouter.navigate(['/login']);
        }
    }
}
