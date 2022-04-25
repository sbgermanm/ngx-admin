import { Observable, of } from 'rxjs';
import { Response } from '../sebas/response';

export abstract class SmartTableData {
  abstract deleteFoos(event: any): Observable<any>;
  abstract getFoos(): Observable<Response>;
  abstract postFoos(data: Object): Observable<any>;


  abstract getData(): any[];
}
