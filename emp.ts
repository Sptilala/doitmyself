var a=[{"id":1,"name":"Malti Devar","email":"malti_devar@fahey.co","salary":"15000"},
{"id":2,"name":"Kanaka Verma","email":"verma_kanaka@roob.net","salary":"15000"},
{"id":3,"name":"Chaten Embranthiri","email":"embranthiri_chaten@stanton.io","salary":"15000"},
{"id":4,"name":"Kin Gupta","email":"kin_gupta@cummings-schamberger.org","salary":"15000"}
]

var b=[{"id":5,"name":"Amb. Hiranmaya Bhattathiri","email":"amb_bhattathiri_hiranmaya@ziemann.info","salary":"15000"},
{"id":6,"name":"Chandrakin Chaturvedi","email":"chaturvedi_chandrakin@wisozk.io","salary":"15000"},
{"id":7,"name":"Gopi Trivedi","email":"trivedi_gopi@cartwright.net","salary":"15000"},
{"id":8,"name":"Raj Arora PhD","email":"arora_phd_raj@schiller.org","salary":"15000"},
{"id":9,"name":"Msgr. Chitrangada Banerjee","email":"chitrangada_msgr_banerjee@considine.name","salary":"15000"}
]

console.log(a);
console.log(b);

var c=a.concat(b);
// console.log(c);

for (let i = 0; i < c.length; i++) {
  var x=c[i];
//   console.log(x);
  
   // search from ID
function idNumber():void{
   const input=document.getElementById('idno') as HTMLInputElement|null;
   const invalue:any=input?.value;
   var q=c.find(x=>x.id==invalue)?.id;
   var y=c.find(x=>x.id==invalue)?.name;
   var z=c.find(x=>x.id==invalue)?.email;
   var p=c.find(x=>x.id==invalue)?.salary;
   console.log(q+"\n"+y+"\n"+z+"\n"+p);
 }
}

// search from index no.
function indexNumber() {
   const in1=document.getElementById('index') as HTMLInputElement|null;
   const value1:any=in1?.value;
   console.log(value1);
   
   var result=c.findIndex(y=>y.id==value1) ;
   var r=c.find(x=>x.id==result)?.id;
   var s=c.find(x=>x.id==result)?.name;
   var t=c.find(x=>x.id==result)?.email;
   var u=c.find(x=>x.id==result)?.salary;
   console.log(r+"\n"+s+"\n"+t+"\n"+u);
   console.log(result);  
}

function addDetail():void {
   var add=` <form>
   <label>ID:</label><br>
   <input type="number" id="eid" placeholder="Enter ID"><br>
   <label>Name</label><br>
   <input type="text" id="fname" placeholder="Enter your name"><br>
   <label>Email:</label><br>
   <input type="email" id="email" placeholder="Enter your Email"><br>
   <label>Salary</label><br>
   <input type="text" id="salary" placeholder="Enter your Salary"><br><br>
   <button onclick="addData()">submit</button>
 </form>`

 document.open();
 document.write(add)
 
}
function addData():void {
  
   var eid=document.getElementById('eid') as HTMLInputElement|null;
   var Eid:any=eid?.value;
   var name=document.getElementById('fname') as HTMLInputElement|null;
   var Name:any=name?.value;
   var email=document.getElementById('email') as HTMLInputElement|null;
   var Email:any=email?.value;
   var salary=document.getElementById('fname') as HTMLInputElement|null;
   var Salary:any=salary?.value;
    c.push(Eid,Name,Email,Salary)
   
    console.log(c);
    
}
 
function getTable() {

   

}



// var detail="<table style='width:50%; border:1px solid black'><tr><th>ID</th><th>Name</th><th>Email</th><th>Salary</th>"
// for (let i = 0; i < c.length; i++) {
//     detail+="<tr>"
//    detail+="<td style='border:1px solid black'>"+c[i].id+"</td>"
//    detail+="<td style='border:1px solid black'>"+c[i].name+"</td>"
//    detail+="<td style='border:1px solid black'>"+c[i].email+"</td>"
//    detail+="<td style='border:1px solid black'>"+c[i].salary+"</td>"
//    detail+="</tr>"
    
// }
// detail+="</tr></table>"

// var result=document.getElementById("data");
//  var display=document.createElement("display")

//  display.innerHTML=detail
//  console.log(result?.appendChild(display));
 
// document.open();
// document.write(detail);

