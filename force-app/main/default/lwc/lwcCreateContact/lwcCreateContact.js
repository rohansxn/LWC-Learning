import { LightningElement,api,wire } from 'lwc';
import getCont from '@salesforce/apex/lwcCreateContact.create';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class LwcCreateContact extends LightningElement {
fname;
lname;
result;
value ='Application event is working';
First(event)
{
this.fname= event.target.value;
console.log("First Name: "+this.fname);
}
Last(event)
{
this.lname= event.target.value;
console.log("Last Name: "+this.lname);
}
@wire(CurrentPageReference) pageReference;
submit(){
    getCont({Lname: this.lname, Fname:this.fname}).then(respone =>{
     this.result= respone;
     if(this.result==1)
     console.log("Successfull");
    }).catch(error=>{
        console.log("Something went wrong"+response.error);
    });
    const passEvent = new CustomEvent('condetails', {detail: this.fname});
    this.dispatchEvent(passEvent);
}
apphable(){
    fireEvent(this.pageReference,'appEvent',this.value);
}
@api
callChild(val)
{
    const value= val;
    alert("In child :"+value);
}
}