// All strings need to be enclosed in quotes
"Single quotes";
"Double quotes";
`Or some fancy backticks`;

let x = "... to insert text!";
let y = `Backticks can be used ${x}`;

let str = "12345";

// Strings are zero-indexed
str.charAt(0) == 1;		// Value	1		2		3		4		5
//										// Index	0		1		2		3		4
str.charAt(4) == 5;
str.charAt(0) = 5;		// Value	5		2		3		4		5

// Strings can be accessed by brackets as well, but
// this is not recommended.
str[0] == 1;		// This works
str[0] = 5;			// This does not, you cannot set an index this way