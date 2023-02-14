ES5 version:
var PI = 3.14;
PI = 42; // stop me from doing this!
ES2015 version:
const PI = 3.14; //using const means that you can't redeclare what "PI" is equal to.
1. let cannot be redeclared but var can be.

2. const cannot be redeclared but var can.

3. We have to assign a value when using const but let you don't have to assign is to a value

4. hoisting is where your varible is lifted up to the top but when using var you can access the undefined value before you use it later