import { Injectable }from '@angular/core';
import{ Http }from'@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TableService{
http:any;
baseUrl: String;
bs2:String;
baseUrl1:String;
bs1:String;
bs3:String;
bs4:String;
bs5:String;
bs6:String;
bs7:String;
bs8:String;
bs9:String;
bs10:String;
bs11:String;
bs12:String;
constructor(http:Http){
    this.http=http;
    this.baseUrl='http://192.168.43.127/grpsel.php';
this.bs2="http://192.168.43.127/view.php";
this.baseUrl1="http://192.168.43.127/semsel.php";
this.bs1="http://192.168.43.127/viewWeekly.php";
this.bs3="http://192.168.43.127/Grpwise.php";
this.bs4="http://192.168.43.127/Labwise.php";
this.bs5="http://192.168.43.127/viewS.php";
this.bs6="http://192.168.43.127/viewSWeek.php";
this.bs7="http://192.168.43.127/LabwiseS.php";
this.bs8="http://192.168.43.127/subsel.php";
this.bs9="http://192.168.43.127/viewSubS.php";
this.bs10="http://192.168.43.127/freelab.php";
this.bs11="http://192.168.43.127/signUp.php";
this.bs12="http://192.168.43.127/signIn.php";
}
getSubS(sem,grp,sub){
    console.log(this.bs9+"?sem="+sem+"&grp="+grp);
    return this.http.get(this.bs9+"?sem="+sem+"&grp="+grp+"&sub="+sub).map(res=>res.json());

}

getSub(sem,grp){
    console.log(this.bs8+"?sem="+sem+"&grp="+grp);
    return this.http.get(this.bs8+"?sem="+sem+"&grp="+grp).map(res=>res.json());

}
getLabS(sem,grp){
    console.log(this.bs7+"?sem="+sem+"&grp="+grp);
    return this.http.get(this.bs7+"?sem="+sem+"&grp="+grp).map(res=>res.json());
}

getWeekS(sem,grp){
    console.log(this.bs6+"?sem="+sem+"&grp="+grp);
    return this.http.get(this.bs6+"?sem="+sem+"&grp="+grp).map(res=>res.json());
}

getPost(sem,grp,day){
    console.log(this.bs5+"?sem="+sem+"&grp="+grp+"&day="+day);
    return this.http.get(this.bs5+"?sem="+sem+"&grp="+grp+"&day="+day).map(res=>res.json());
    
}

getPosts(teacher1,day1,email1){
   // var body = 'teacher=teacher1&day=day1&email=email1';
    return this.http.get(this.bs2+"?teacher="+teacher1+"&email="+email1+"&day="+day1)
    .map(res=> res.json())
    
}
getTest(){
    console.log("in getTest");
    return this.http.get(this.bs2).map(res => res.json());
}
getgrpT(email){
        return this.http.get(this.baseUrl+"?email="+email).map(res=>res.json());
    
}
getSemT(email){
    return this.http.get(this.baseUrl1+"?email="+email).map(res=>res.json());
}
getWeekT(email){
 console.log(this.baseUrl+"?email="+email);
    //this.http.get(this.baseUrl+"?email="+email).map(res1=>res1.json()).subscribe(term=>{
//console.log("res"+term);
    //});
    return this.http.get(this.bs1+"?email="+email).map(res=>res.json());
    
}
getGrpWise(email,grp,sem){
    return this.http.get(this.bs3+"?email="+email+"&grp="+grp+"&sem="+sem).map(res=>res.json());
}
getLabWise(email){
    return this.http.get(this.bs4+"?email="+email).map(res=>res.json());
}
getFreeLab(day,dept){
return this.http.get(this.bs10+"?day="+day+"&dept="+dept).map(res=>res.json());
}
getSignup(email,password){
    return this.http.get(this.bs11+"?email="+email+"&password="+password).map(res=>res.json());
}
getSignin(email,password){
    return this.http.get(this.bs12+"?email="+email+"&password="+password).map(res=>res.json());
}

}
