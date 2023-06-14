// complete the given function

function palindrome(str){
	  let n = str.length;
	 const str= str.toLowerCase();
	  for(let i=0; i<n; i++){
      if(str[i] !== str[n-1-i]){
        return false;
        }
	 }
	return true;
}
module.exports = palindrome