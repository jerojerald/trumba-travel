import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {

  filterForm:FormGroup;
  filterFormArr = {
    trip: ['Round Trip', 'One-way', 'Multi-city'],
    class: ['Economy', 'Business Class', 'First Class'],
    howlong: [3, 4, 5, 6, 7]
  }
  states = [
    {
      name: 'Arkansas',
    },
    {
      name: 'California',
    },
    {
      name: 'Florida',
    },
    {
      name: 'Texas',
    }
  ];
  filteredStates?: Observable<any[]>;
  filteredToStates?: Observable<any[]>;
  year = Number(moment.utc().format('YYYY'));
  endMaxDate:any;
  startMaxDate:any;
  startMinDate = moment.utc().format();
  endMinDate = moment.utc().format();
  toggleRooms: boolean = false;
  count = 0;
  ingreementArr:{ id: number, count: number, ageArr: { id: number }[] }[] = [];

  constructor(private fb: FormBuilder) { 
    this.filterForm = this.fb.group({
      roundTrip: ['Round Trip', Validators.required],
      permiumTrip: ['Business Class', Validators.required],
      flyingFrom: ['Texas', Validators.required],
      flyingTo: ['Arkansas', Validators.required],
      howlong: [5, Validators.required],
      fromDate: [new Date()],
      passengers: ['1', Validators.required],
      rooms: ['1']
    })
  }

  ngOnInit(): void {
     this.filteredStates = this.filterForm.get('flyingFrom')?.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
    this.filteredToStates = this.filterForm.get('flyingTo')?.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterToStates(state) : this.states.slice())),
    );

    // this.ingreementArr.push({ id: Date.now(), count: 1, ageArr: [{id: Date.now()}] });


  }

  private _filterStates(value: string) {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  private _filterToStates(value: string) {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  changeStartDate(action:any, date:any) {
    console.log(action, date)
    this.startMinDate = date.value;
    this.endMinDate = date.value;
  }

  changeEndDate(action:any, date:any) {

  }


  openRooms() {
    this.toggleRooms = !this.toggleRooms
  }

  closeShowform() {
    this.toggleRooms = false;
  }

  increment() {
    this.count++;
    this.ingreementArr.push({ id: Date.now(), count: 0, ageArr: [] });
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.ingreementArr.pop();
    }
  }
  
  increaseCount(id: number) {
    const element = this.ingreementArr.find(ingreementArr => ingreementArr.id === id);
    if (element) {
      element.count++;
      element.ageArr.push({ id: Date.now() });
    }
  }

  decreaseCount(id: number) {
    const element = this.ingreementArr.find(ingreementArr => ingreementArr.id === id);
    if (element && element.count > 0) {
      element.count--;
      element.ageArr.pop();
    } 
  }

}
