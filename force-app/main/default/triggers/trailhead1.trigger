trigger trailhead1 on Contact (before insert, before update, before delete, after insert, after update, after delete, after undelete) {
if(trigger.isInsert || trigger.isUndelete || trigger.isUpdate){
    countContact.cont(trigger.new);
}
if(trigger.isdelete){
    countContact.cont(trigger.old);
}
}