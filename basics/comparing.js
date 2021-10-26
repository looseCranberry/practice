2 > 1; // True
2 == 1; // False
2 != 1; // True

"Z" > "A"; // True
"Glow" > "Glee"; // True
"Bee" > "Be"; // True

"2" > 1; // True, '2' is converted to a number
"01" == 1; // True, '01' is converted to numeric 1
true == 1; // True
false == 0; // True

let a = 0,
	b = "0";
Boolean(a) == false; // True, a zero is considered a 'false'
Boolean(b) == true; // True, a non-empty string will evaluate to true
a == b; // True, b is converted to a number for this comparison

0 == false; // True
"" == false; // True
0 === false; // False, differing types
null == undefined; // True
null === undefined; // False
null < 1; // True, null converts to 0
undefined < 1; // False, undefined converts to NaN
null > 0; // False, null converted to 0
null < 0; // False, null still converted to 0
null == 0; // False! null has a special rule that allows it to
//					// ONLY be equal to itself and undefined!
