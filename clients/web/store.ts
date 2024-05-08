import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { geoLocationReducer } from './app/state/geo-location';
import { authenticationReducer } from './app/authentication/state';
import { clientReducer } from './app/state';
import { analyticsReducer } from './app/console/analytics/state/analyticsReducer';

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;


export function makeStore() {
  return configureStore({
    reducer: {
      client: clientReducer,
      geoLocation: geoLocationReducer,
      authentication: authenticationReducer,
      analytics: analyticsReducer,
    },
  })
}

const store = makeStore();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ApplicationState,
  unknown,
  Action<string>
>

export default store;
