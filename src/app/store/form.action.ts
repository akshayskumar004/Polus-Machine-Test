import { createAction, props } from '@ngrx/store';

export const setFormState = createAction(
  '[Form] Set Form State',
  props<{ tab: string; value: any }>()
);
