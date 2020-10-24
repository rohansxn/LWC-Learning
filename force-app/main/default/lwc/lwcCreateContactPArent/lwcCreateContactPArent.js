import { LightningElement,wire } from 'lwc';
import {registerListener, unregisterListener} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class LwcCreateContactPArent extends LightningElement {
firstName
    handleEvent(event)
    {
this.firstName= event.detail;
    }
    passValue()
    {
        const call = this.template.querySelector('c-lwc-create-contact');
        call.callChild("I am from Parent");
    }

    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('appEvent', this.Apphandle, this);
    }
    disconnectedCallback(){
        unregisterListener(this);
    }

    Apphandle(payload)
    {
      alert(payload);
    }
}