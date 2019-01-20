import {RECEIVED_SEARCH_DATA, GET_SEARCH_DATA} from '../actions/locationSearchActions'
import { map } from 'rxjs/operators';

export const layoutEpic = action$ =>
  action$.ofType(GET_SEARCH_DATA)
    .pipe(
     map((action) => (
      {
       type: RECEIVED_SEARCH_DATA,
       payload: action.payload
      })
    ))
