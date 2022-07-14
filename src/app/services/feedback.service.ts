import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { feedbackMockJson } from "../mocks/fb.mock";

//services are injectible and because we only have one module we will provide it on the root level but we can also provide it on the feature level
@Injectable({
    providedIn: 'root'
})

export class FeedbackService{
    //this lets us contact the api with http methods
    constructor(private http: HttpClient){}

    getFeedbacks(){
        //of makes the dummy data into an observable
        return of(feedbackMockJson)
    }
}