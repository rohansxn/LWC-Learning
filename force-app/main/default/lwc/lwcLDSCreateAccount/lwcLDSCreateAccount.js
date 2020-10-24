import { LightningElement, api ,wire, track} from 'lwc';
import {createRecord, getRecord} from 'lightning/uiRecordApi' ;
import Name_Field from '@salesforce/schema/Account.Name';
import Phone_Field from '@salesforce/schema/Account.Phone';
export default class LwcLDSCreateAccount extends LightningElement {
    Name;
    Phone;
    fieldsArr= [Name_Field,Phone_Field];
    @api recordId;
  // @wire(getRecord, {recordId :'$recordId', fields: fieldsArr})
   accountRecord;

    nameHandler(event){
        this.Name = event.target.value;
        console.log('Hi there');
    }
    phoneHandler(event){
        this.Phone = event.target.value;
    }
    clickHandler(){
        const fields= {'Name': this.Name, 'Phone':this.Phone};
        const recordInput= {apiName:'Account' , fields};
        createRecord(recordInput).then(Response =>{
            console.log('This is respionse', Response.id);
        }).catch(error =>{
            console.log('Error is :',error.body.message);
        })
    }
}