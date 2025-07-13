import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { Store } from '@ngrx/store';
import { setFormState } from '../store/form.action';
import { selectFormByTab } from '../store/form.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-form-tabs',
  imports: [DynamicFormComponent, MatTab, MatTabGroup, AsyncPipe],
  templateUrl: './form-tabs.component.html',
  styleUrl: './form-tabs.component.scss',
})
export class FormTabsComponent {
  schemaA = [
    { type: 'text', label: 'Full Name', name: 'fullName', required: true },
    { type: 'email', label: 'Email', name: 'email' },
    { type: 'checkbox', label: 'Subscribe', name: 'subscribe' },
  ];

  schemaB = [
    { type: 'text', label: 'Username', name: 'username', required: true },
    { type: 'password', label: 'Password', name: 'password', required: true },
    { type: 'checkbox', label: 'Remember Me', name: 'remember' },
  ];

  activeTabIndex = 0;

  constructor(private store: Store, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit(tab: string, value: any) {
    this.store.dispatch(setFormState({ tab, value }));
    this.snackBar.open(`Form ${tab} submitted successfully!`, 'Close', {
      duration: 3000,
    });
  }

  getInitialFormValue(tab: string): Observable<any> {
    return this.store.select(selectFormByTab(tab));
  }
}
