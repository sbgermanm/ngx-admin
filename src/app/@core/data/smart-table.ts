import { Observable, of } from 'rxjs';
import { Response } from '../sebas/response';

export abstract class SmartTableData {
  abstract getData(): any[];
  abstract getFoos(): Observable<Response>;
}
