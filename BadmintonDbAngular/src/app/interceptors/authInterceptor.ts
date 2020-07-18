import { Injectable } from "@angular/core";
import { tap, catchError } from "rxjs/operators";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  //function which will be called for all http calls
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   console.log("the request: ",request);

  //   // //how to update the request Parameters
  //   const updatedRequest = request.clone({
  //     headers: request.headers.set("Authorization", "Some-dummyCode")
  //   });
  //   //logging the updated Parameters to browser's console
  //   console.log("Before making api call : ", updatedRequest);
  //   return next.handle(request).pipe(
  //     tap(
  //       event => {
  //         //logging the http response to browser's console in case of a success
  //         if (event instanceof HttpResponse) {
  //           console.log("api call success :", event);
  //         }
  //       },
  //       error => {
  //         //logging the http response to browser's console in case of a failure
  //         if (event instanceof HttpResponse) {
  //           console.log("api call error :", event);
  //           this.router.navigate(['/','login']);
  //         }
  //       }
  //     )
  //   );
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //? can i still update the request headers and stuff here?

    console.log(req);

    return next.handle(req).pipe(
      //? can I still access success events here?
      catchError((err: HttpErrorResponse) => {
        if (err.status == 401) {
          // Handle 401 error
          console.log("redirecting to login");
          this.router.navigate(['/','login']);
        } else {
          console.log("other errors");
          return throwError(err);
        }
      })
    );
  }
}
