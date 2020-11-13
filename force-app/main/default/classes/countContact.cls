public with sharing class countContact {
    public static void cont(List<Contact> cont){
Integer count;
List<Account> acc= new List<Account>();
for (Contact con : cont){
    count = [select count() from Account where id=: con.AccountId];
    Account a = new Account();
    a.Number_of_Contacts__c= count;
    a.Id = con.AccountId;
    acc.add(a);
}
update acc;
    }
}
