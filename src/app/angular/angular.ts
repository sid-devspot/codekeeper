import { Component } from '@angular/core';

type NgNavItem = {
  title: string;
  path: string;
  icon: string; // ✅ added
};

type NgNavGroup = {
  groupTitle: string;
  items: NgNavItem[];
};

@Component({
  selector: 'app-angular',
  standalone: false,
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {
  navGroups: NgNavGroup[] = [
    {
      groupTitle: 'Basics',
      items: [
        { title: 'Intro', path: 'intro', icon: 'info' },
        { title: 'Essentials', path: 'essentials', icon: 'comment' }
      ],
    },
  ];
}
