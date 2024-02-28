const code = {
  "a": 0,
  "b": 1,
  "c": 2,
  "d": 3,
  "e": 4,
  "f": 5,
  "g": 6,
  "h": 7,
  "i": 8,
  "j": 9,
  "k": 10,
  "l": 11,
  "m": 12,
  "n": 13,
  "o": 14,
  "p": 15,
  "q": 16,
  "r": 17,
  "s": 18,
  "t": 19,
  "u": 20,
  "v": 21,
  "w": 22,
  "x": 23,
  "y": 24,
  "z": 25,
  "A": 26,
  "B": 27,
  "C": 28,
  "D": 29,
  "E": 30,
  "F": 31,
  "G": 32,
  "H": 33,
  "I": 34,
  "J": 35,
  "K": 36,
  "L": 37,
  "M": 38,
  "N": 39,
  "O": 40,
  "P": 41,
  "Q": 42,
  "R": 43,
  "S": 44,
  "T": 45,
  "U": 46,
  "V": 47,
  "W": 48,
  "X": 49,
  "Y": 50,
  "Z": 51
};
const revCode = {
  "0": "a",
  "1": "b",
  "2": "c",
  "3": "d",
  "4": "e",
  "5": "f",
  "6": "g",
  "7": "h",
  "8": "i",
  "9": "j",
  "10": "k",
  "11": "l",
  "12": "m",
  "13": "n",
  "14": "o",
  "15": "p",
  "16": "q",
  "17": "r",
  "18": "s",
  "19": "t",
  "20": "u",
  "21": "v",
  "22": "w",
  "23": "x",
  "24": "y",
  "25": "z",
  "26": "A",
  "27": "B",
  "28": "C",
  "29": "D",
  "30": "E",
  "31": "F",
  "32": "G",
  "33": "H",
  "34": "I",
  "35": "J",
  "36": "K",
  "37": "L",
  "38": "M",
  "39": "N",
  "40": "O",
  "41": "P",
  "42": "Q",
  "43": "R",
  "44": "S",
  "45": "T",
  "46": "U",
  "47": "V",
  "48": "W",
  "49": "X",
  "50": "Y",
  "51": "Z"
}


// Encryption/Decryption tools:
var parse = string => {
  var hash = "";
  var spc = []
  for (i=0; i<string.length; i++){

    chr = code[string[i]];
    if (string[i] !== " "){
      if (chr.toString().length < 2) {
        hash += `0${chr}`;
      }
      else {
        hash += chr;
      }

    }
    else {
      spc.push(i);
    }
}

return hash;
}
var encrypt = hash => {
  var lst = hash.split('');
  var parsedHash = "";
  var leftToRight = true;
  while (lst.length !== 0) {
    if (leftToRight || lst.length === 2) {
      var first = lst.shift();
      var second = lst.pop();
      leftToRight = false;
    }
    else {
      var first = lst.pop();
      var second = lst.shift();
      leftToRight = true;
    }
    parsedHash += `${first}${second}`;

  }
  return parsedHash;

}
var decrypt = hash => {

  var lst = hash.split('');
  var unparsedHash = hash.slice(-2);
  lst.pop();
  lst.pop();
  var invert = lst.length%4!==0 ? true : false;
  while (lst.length!==0) {
    if (invert) {
      var right = lst.pop();
      var left = lst.pop();
      invert = false;
    }
    else {
      var left = lst.pop();
      var right = lst.pop();
      invert = true;
    }

    unparsedHash = left + unparsedHash + right;
  }
  return unparsedHash;



}
var unparse = hash => {
  string = "";
  for (i=0; i<hash.length; i+=2) {
    str = revCode[+hash.slice(i, i+2)]
    string += str;
  }
  return string;
}

// Encryption/Decryption process:
var encrypter = message => {
  var parsedMessage = parse(message);
  var encryptedMessage = encrypt(parsedMessage);
  var unparsedMessage = unparse(encryptedMessage);
  return unparsedMessage;
}
var decrypter = message => {
  var parsedMessage = parse(message);
  var decryptedMessage = decrypt(parsedMessage);
  var unparsedMessage = unparse(decryptedMessage);
  return unparsedMessage;
}

console.log(encrypter("MynameisLeonard"));
console.log(decrypter("HiBokddkomeehMs"));
