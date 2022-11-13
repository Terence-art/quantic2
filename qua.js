var a=0; var b=0; var c=0; var d=[a,b,c];
for (a=0;a<=1;a++){d[0]=a;
    for (b=0;b<=1;b++){d[1]=b;
        for (c=0;c<=1;c++){d[2]=c;console.log(d); if((a+b+c)/2==Math.trunc((a+b+c)/2)){console.log("0")} else {console.log("1")}}}};
