function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("").trim() == x.toLowerCase()? true : false;
}

// best run times
const str = x.toLowerCase();
const len = str.length;
for (let i = 0; i < len / 2; i++) {
  if (str[i] !== str[len - 1 - i]) {
    return false;
  }
}
return true;
