import { createAction, props } from "@ngrx/store";
import { IFeedback } from "../models/feedback.model";

// ngrx method createAction
// this is for the loading state of get Feedbacks
export const getFeedbacks = createAction('[Feedbacks] Get FeedBacks')
// we will get feedbacks from the backend once sucessfully to the reducer and the reducer will ahve the data we want to put in the backedn
// the reducer will then put the data in the state store 
// action as a type  and takes props. If we need to pass some data from the action we need props. This takes a feedback list as props which is an array of IFeedback
export const getFeedbacksSuccess = createAction('[Feedbacks] Get Feedbacks Success', props<{feedbackList: IFeedback[]}>());
// action if there is an error
export const getFeedbacksError = createAction('[Feedbacks] Get FeedBacks Error')
