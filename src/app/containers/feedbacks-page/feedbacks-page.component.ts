import { Component, OnInit } from '@angular/core';
import { State } from './../../state/feedback.reducers';
import { Store } from '@ngrx/store';
import { getFeedbacks } from 'src/app/state/feedback.actions';

@Component({
  selector: 'app-feedbacks-page',
  templateUrl: './feedbacks-page.component.html',
  styleUrls: ['./feedbacks-page.component.scss']
})
export class FeedbacksPageComponent implements OnInit {

  //import our state Store of type State
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    //dispatch our action: geFeedbacks oninit
    this.store.dispatch(getFeedbacks())
  }

}
