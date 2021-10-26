function somefunc(param) {
	param = param || null; // Param assigns itself OR null if false, null, or undefined
	alert(param ?? "No argument passed"); // Alert of either param or the message
}
