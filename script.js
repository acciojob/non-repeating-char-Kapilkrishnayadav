function firstNonRepeatedChar(str) {
 // Write your code here
	let o={};
	for (let l of str) {
		if(str[l])
		{
			o[l]++;
		}
		else
		{
			o[l]=1;
		}
	}
	for (let l of str) {
		if(o[l]==1)
		{
			return l;
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
