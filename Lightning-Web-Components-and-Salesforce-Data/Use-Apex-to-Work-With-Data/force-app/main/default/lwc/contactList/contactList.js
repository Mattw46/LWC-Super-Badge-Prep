import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text'},
    { label: 'Last Name', fieldName: 'LastName', type: 'text'},
    { label: 'Email', fieldName: 'Email', type: 'Email'}
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
}

