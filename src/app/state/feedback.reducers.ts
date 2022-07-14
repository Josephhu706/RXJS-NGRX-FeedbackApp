import { Action, createReducer, on } from '@ngrx/store';
import { IFeedback } from "../models/feedback.model";
// these are our three actions
import * as FeedbackActions from './feedback.actions'

// this is our State types
export interface State{
    list: IFeedback[],
    loading: boolean
}

//this is the initial State of feedbacks and loading
export const initialState: State = {
    list: [],
    loading: false,
}

const feedbackReducer = createReducer(
    initialState,
    // when we are getting our feedbacks from the backend we change the state by copying it
    // we then set the state of feedbacks to empty array and loading to true
    on(FeedbackActions.getFeedbacks, state => ({...state, list: [], loading: true})),
    // if successfully fetched feedbacks, set the state as the feedbackList and loading to false
    on(FeedbackActions.getFeedbacksSuccess, (state, {feedbackList}) =>
    ({...state, list: feedbackList, loading: false})),
)

// this function takes some state and an action and returns it to the feedbackReducer
export function reducer(state: State | undefined, action: Action) {
    return feedbackReducer(state, action);
  }