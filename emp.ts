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
console.log(c);

var detail="<table style='width:50%; border:1px solid black'><tr><th>ID</th><th>Name</th><th>Email</th><th>Salary</th>"
for (let i = 0; i < c.length; i++) {
    detail+="<tr>"
   detail+="<td style='border:1px solid black'>"+c[i].id+"</td>"
   detail+="<td style='border:1px solid black'>"+c[i].name+"</td>"
   detail+="<td style='border:1px solid black'>"+c[i].email+"</td>"
   detail+="<td style='border:1px solid black'>"+c[i].salary+"</td>"
   detail+="</tr>"
    
}
detail+="</tr></table>"
document.open();
document.write(detail);
