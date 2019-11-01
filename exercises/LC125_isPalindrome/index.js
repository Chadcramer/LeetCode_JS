function isPalindrome(s) {
  // Sanitize input string
  s = s.toLowerCase().replace(/[\W_]/g, '');
  // Create left and right pointers
  let left = 0;
  let right = s.length - 1;
  // while left is less than right
  while (left < right) {
    // if left is not equal to right, return false
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  // return true
  return true;
}

module.exports = isPalindrome;
