public with sharing class lwcCreateContact {
    @AuraEnabled
    public static Integer create(String Fname , String Lname){
        Contact con = new Contact();
       con.FirstName =Fname;
        con.LastName =Lname;
        insert con;
        return 1;
    }
}