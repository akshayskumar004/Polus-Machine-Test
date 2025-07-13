import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState } from './form.reducer';

export const selectFormFeature = createFeatureSelector<FormState>('form');

export const selectFormByTab = (tab: string) =>
  createSelector(selectFormFeature, (state) => state[tab] || {});
