function palindrome(str) {
    let regExp = /[\W_]/g
  
    let smallStr = str.toLowerCase().replace(regExp, '')
  
    let reversed = smallStr.split('').reverse().join('')
    if(reversed === smallStr) return true
  
    return false;
  }
  
  palindrome("eye");  