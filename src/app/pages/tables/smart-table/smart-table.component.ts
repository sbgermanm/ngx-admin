import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      editable: false,
      addable: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        addable: false,
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'pepe',
    phone: '123',
    email: '123',
  }];

  constructor(private service: SmartTableData) {
  }

  ngOnInit(): void {
    this.service.getFoos().subscribe(resp => {
      this.data = resp.fooList;
      this.source.load(this.data);
    },
      error => {
        window.confirm('Error on loading foos');
      });
  }


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deleteFoos(event);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to create?')) {
      this.service.postFoos(event.newData).subscribe(
        response => {
          this.log('response: ' + response);
          event.confirm.resolve(response);

        },
        error => {
          window.confirm('Error saving foos');
          this.log('error: ' + error);
          event.confirm.reject();
        });
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.service.putFoos(event.newData).subscribe(
        response => {
          this.log('response: ' + response);
          event.confirm.resolve(response);
        },
        error => {
          window.confirm('Error saving foos');
          this.log('error: ' + error);
          event.confirm.reject();
        });
    } else {
      event.confirm.reject();
    }
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // console.log(message); // log to console instead
  }
}
