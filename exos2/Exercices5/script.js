b = 2;
alert(a=b++); // a=2 b=3

alert(a=++b); // a=4 b=4

alert(a=b--); // a=4 b=3

alert(a=--b); // a=2 b=2

alert(a+=b++); // a=4 b=3

a = 1;
alert(a+=++b); // a=4 b=3

a = 1;
alert(a-=b++); // a=-2 b=4

a = 1;
alert(a-=++b); // a=-4 b=5

a = 1;
alert(a+=b--); // a=6 b=4

a = 1;
alert(a+=--b); // a=4 b=3