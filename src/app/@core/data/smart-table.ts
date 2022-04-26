import { Observable, of } from 'rxjs';
import { Response } from '../sebas/response';
import { Foo } from './foo';

export abstract class SmartTableData {
  abstract deleteFoos(event: any): Observable<any>;
  abstract getFoos(): Observable<Response>;
  abstract postFoos(data: Object): Observable<Foo>;


  abstract getData(): any[];
}
