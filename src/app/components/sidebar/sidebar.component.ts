import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  myName: string;
  myJob: string;
  contactDetails: any;

  constructor() {
    this.myName = 'Abdo Hamoud';
    this.myJob = 'Full Stack Developer';
    this.contactDetails = {
      phone: '+201011606782',
      email: 'abdo.host@gmail.com',
      behance: 'https://www.behance.net/Abdo-Host',
      github: 'https://github.com/abdo-host',
      stackoverflow: 'https://stackoverflow.com/users/2262856/abdo-host',
      linkedin: 'https://www.linkedin.com/in/abdohost',
      twitter: 'https://twitter.com/Abdo_Host'
    };
  }

  ngOnInit(): void {
  }

}
