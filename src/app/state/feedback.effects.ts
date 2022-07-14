import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";
import { FeedbackService } from "../services/feedback.service";

//these are injectible. Effects are a class
@Injectable()
//effects are a class, we are gonna have all our action interceptors, this will catch our actions and do something
//FIRST WE CREATE THE EFFECT
export class FeedbackEffects{
    //this catches actions as observables. We also need a service where we can call our api in the futrue
    //for now we will call our mock data as an observable
    loadFeedbacks$ = createEffect(() => this.actions$.pipe(
        //this is the action the effect will catch
        //THEN WE CHECK IT'S TYPE AND CATCH THE ACTION
        ofType('[Feedbacks] Get FeedBacks'),
        //this is an observable
        //WE SUBSCRIBE TO THE ACTON with rxjs methods
        // WE NOW HAVE AN OBSERVABLE OF FEEDBACKS
        mergeMap(() => this.feedbackService.getFeedbacks()
        .pipe(
            //catch the action if successful
            //IF SUCCESSFUL WE DISPATCH AN ACTIOBN WITH ANOTHER TYPE AND THE REDUCER CATCHES THIS
            //IF IT'S ERROR WE DO NOTHING
            map(feedbacks => ({type: '[Feedbacks] Get Feedbacks Success', feedbackList: feedbacks })),
            catchError(()=> EMPTY))
        )
    ))


    //we are going to pass actions so we can catch all these actions
    constructor(
        private actions$: Actions,
        private feedbackService: FeedbackService 
    ){}
}

//1.we create the effect