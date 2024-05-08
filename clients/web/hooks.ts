import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type { ApplicationState, ApplicationDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => ApplicationDispatch;
export const useApplicationDispatch: DispatchFunc = useDispatch;
export const useApplicationSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
