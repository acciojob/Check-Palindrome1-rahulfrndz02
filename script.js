// complete the given function

function palindrome(str){
	  
	 const string= str.toLowerCase();
	 const n = string.length;
	  for(let i=0; i<n; i++){
      if(string[i] !== string[n-1-i]){
        return false;
        }
	 }
	return true;
}
module.exports = palindrome