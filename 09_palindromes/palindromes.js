const palindromes = function (text) {
  const textCleaned = text.replace(/[\.,?!\s]/gi, '').toLowerCase();

  for (let i = 0; i < textCleaned.length; i++) {
    if (textCleaned[i] !== textCleaned[textCleaned.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
