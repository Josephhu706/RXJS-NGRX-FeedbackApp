import { Action, createReducer, on } from '@ngrx/store';
import { IFeedback } from "../models/feedback.model";
// these are our three actions
import * as FeedbackActions from './feedback.actions'

// this is our State types
export interface State{
    feedbacks: IFeedback[],
    loading: boolean
}

//this is the initial State of feedbacks and loading
export const initialState: State = {
    feedbacks: [],
    loading: false,
}

const feedbackReducer = createReducer(
    initialState,
    // when we are getting our feedbacks from the backend we change the state by copying it
    // we then set the state of feedbacks to empty array and loading to true
    on(FeedbackActions.getFeedbacks, state => ({...state, feedbacks: [], loading: true})),
    // if successfully fetched feedbacks, set the state as the feedbackList and loading to false
    on(FeedbackActions.getFeedbacksSuccess, (state, {feedbackList}) =>
    ({...state, list: feedbackList, loading: false})),
)

export function reducer(state: State | undefined, action: Action) {
    return feedbackReducer(state, action);
  }