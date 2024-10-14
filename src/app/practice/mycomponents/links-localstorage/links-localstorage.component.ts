import { Component } from '@angular/core';


interface SessionDataItem {
  key: string;
  value: string;
  groupIdentifier: string;
}
@Component({
  selector: 'app-links-localstorage',
  templateUrl: './links-localstorage.component.html',
  styleUrls: ['./links-localstorage.component.css']
})
export class LinksLocalstorageComponent {
  privacyPolicyUrl: string = '';
  termsUrl: string = '';
  codeOfConductUrl: string = '';


constructor(){
  
}
  const sessionItem = sessionStorage.getItem("SessionConfiguration");
  console.log("sessionData",sessionItem);

  const sessionData: SessionDataItem[] = sessionItem ? JSON.parse(sessionItem) : [];

  const privacyPolicyItem = sessionData.find(item => item.key === 'PrivacyPolicyURL');
  const termsItem = sessionData.find(item => item.key === 'TermsAndConditionsURL');
  const codeOfConductItem = sessionData.find(item => item.key === 'CodeOfConductURL');

  this.privacyPolicyUrl = privacyPolicyItem ? privacyPolicyItem.value : '';
  this.termsUrl = termsItem ? termsItem.value : '';
  this.codeOfConductUrl = codeOfConductItem ? codeOfConductItem.value : '';
  
}
