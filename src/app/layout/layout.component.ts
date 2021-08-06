import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  fontValue: string = '';

  fontValues = [
    {
      category: 'Normal',
      values: ['normal'],
    },
    {
      category: 'Special Glyphs',
      values: ['ordinal'],
    },
    {
      category: 'Zero with slash',
      values: ['slashed-zero'],
    },
    {
      category: 'Numeric Figure Values',
      values: ['lining-nums', 'oldstyle-nums'],
    },
    {
      category: 'Numeric Spacing Values',
      values: ['proportional-nums', 'tabular-nums']
    },
    {
      category: 'Numeric Fraction values',
      values: ['diagonal-fractions', 'stacked-fractions'],
    },
  ];

  rows = [
    { hours: '07:00 - 08:00', columnOne: '1', columnTwo: '2' },
    { hours: '08:00 - 09:00', columnOne: '1', columnTwo: '2' },
    { hours: '09:00 - 10:00', columnOne: '1', columnTwo: '2' },
    { hours: '10:00 - 11:00', columnOne: '1', columnTwo: '2' },
    { hours: '11:00 - 12:00', columnOne: '1', columnTwo: '2' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
