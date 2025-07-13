import { createReducer, on } from '@ngrx/store';
import { setFormState } from './form.action';

export interface FormState {
  [tab: string]: any;
}

const appState: FormState = {};

Object.keys(localStorage).forEach((key) => {
  if (key.startsWith('form-')) {
    const tab = key.replace('form-', '');
    appState[tab] = JSON.parse(localStorage.getItem(key)!);
  }
});

export const initialState: FormState = appState;

export const formReducer = createReducer(
  initialState,
  on(setFormState, (state, { tab, value }) => {
    localStorage.setItem(`form-${tab}`, JSON.stringify(value));
    return {
      ...state,
      [tab]: value,
    };
  })
);
