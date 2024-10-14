import { Component } from '@angular/core';

@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.css']
})
export class ClientNameComponent {
// Your API Data
data = {
  clientNames: [
    { clientName: 'A' },
    { clientName: 'B' },
    { clientName: 'C' }
  ],
  clients: [
    { clientName: 'A', groupName: 'Group 1A' },
    { clientName: 'A', groupName: 'Group 2A' },
    { clientName: 'B', groupName: 'Group 1B' },
    { clientName: 'C', groupName: 'Group 1C' }
  ]
};

clientNamesVal = this.data.clientNames; // Assigning clientNames to display
filteredClients: any[] = []; // Stores filtered clients based on selection
selectedClientName: string = ''; // To store the selected clientName
selectedClient: string = ''; // To store the selected client groupName
selectedName:string='';
// Function to filter clients based on selected clientName
onClientNameChange(clientName: string) {
  this.filteredClients = this.data.clients.filter(client => client.clientName === clientName);
  this.selectedClient = ''; // Reset the selected client when clientName changes
}

// Function to show selected values in an alert
saveClientName() {
  // if (this.selectedClientName && this.selectedClient) {
  //   alert(`Selected Client Name: ${this.selectedClientName}\nSelected Client: ${this.selectedClient}`);
  // } else {
  //   alert('Please select both a client name and a client.');
  // }
  alert(this.selectedName);
}
onClientName(event:any){
  this.filteredClients = this.data.clients.filter(client => client.clientName === event);
  this.selectedClient = ''; // Reset the selected client when clientName changes
}
}
