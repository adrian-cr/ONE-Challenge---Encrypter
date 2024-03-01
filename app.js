const code = {
  "a": 0,
  "b": 1,
  "c": 2,
  "ç": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
  "j": 10,
  "k": 11,
  "l": 12,
  "m": 13,
  "n": 14,
  "ñ": 15,
  "o": 16,
  "ø": 17,
  "p": 18,
  "q": 19,
  "r": 20,
  "s": 21,
  "t": 22,
  "u": 23,
  "v": 24,
  "w": 25,
  "x": 26,
  "y": 27,
  "z": 28,
  "æ": 29,
  "A": 30,
  "B": 31,
  "C": 32,
  "Ç": 33,
  "D": 34,
  "E": 35,
  "F": 36,
  "G": 37,
  "H": 38,
  "I": 39,
  "J": 40,
  "K": 41,
  "L": 42,
  "M": 43,
  "N": 44,
  "Ñ": 45,
  "O": 46,
  "Ø": 47,
  "P": 48,
  "Q": 49,
  "R": 50,
  "S": 51,
  "T": 52,
  "U": 53,
  "V": 54,
  "W": 55,
  "X": 56,
  "Y": 57,
  "Z": 58,
  "Æ": 59
};

const revCode = {
  "0": "a",
  "1": "b",
  "2": "c",
  "3": "ç",
  "4": "d",
  "5": "e",
  "6": "f",
  "7": "g",
  "8": "h",
  "9": "i",
  "10": "j",
  "11": "k",
  "12": "l",
  "13": "m",
  "14": "n",
  "15": "ñ",
  "16": "o",
  "17": "ø",
  "18": "p",
  "19": "q",
  "20": "r",
  "21": "s",
  "22": "t",
  "23": "u",
  "24": "v",
  "25": "w",
  "26": "x",
  "27": "y",
  "28": "z",
  "29": "æ",
  "30": "A",
  "31": "B",
  "32": "C",
  "33": "Ç",
  "34": "D",
  "35": "E",
  "36": "F",
  "37": "G",
  "38": "H",
  "39": "I",
  "40": "J",
  "41": "K",
  "42": "L",
  "43": "M",
  "44": "N",
  "45": "Ñ",
  "46": "O",
  "47": "Ø",
  "48": "P",
  "49": "Q",
  "50": "R",
  "51": "S",
  "52": "T",
  "53": "U",
  "54": "V",
  "55": "W",
  "56": "X",
  "57": "Y",
  "58": "Z",
  "59": "Æ",
};
const sepSequences = {
  1: 'PwÇicdhkwV',
  2: 'YtsaqsBqlP',
  3: 'xmqzeÆØher',
  4: 'ogøyñUxwlq',
  5: 'vjaQywuxUæ',
  6: 'uxcØWñYpab',
  7: 'pQØamvziaU',
  8: 'dnkNgmhsbe',
  9: 'oçhaØælryf',
  10: 'çaEzfouzNx',
  11: 'tqvmEiujØA',
  12: 'LuOSnzfyzq',
  13: 'DkñmuouzoQ',
  14: 'dfjulamAyI',
  15: 'JqzOtwxgaf',
  16: 'pnmfçJlhpÑ',
  17: 'øÇodvlkMlz',
  18: 'DhdzlaWscI',
  19: 'SØlçiqvfñA',
  20: 'ukugpçqøyf',
  21: 'ytvxkytndØ',
  22: 'ansyrÇmlqv',
  23: 'icçÆdiñpwH',
  24: 'YqmbrpgAÑo',
  25: 'ÆpTboysfjæ',
  26: 'mxÑqptwØkv',
  27: 'csaseeziBH',
  28: 'jOdWweheac',
  29: 'DtTwñgysal',
  30: 'tTlkuULdÑn',
  31: 'xLGñpBZefñ',
  32: 'yqøEJbkhmU',
  33: 'ogIbQqiæaf',
  34: 'AmLxscwbÑH',
  35: 'pñeæqdWsRm',
  36: 'ItEæqoejpC',
  37: 'ñkOÑgZjqfF',
  38: 'wsPrgÆoruj',
  39: 'ÇndehqBrSx',
  40: 'ÆwrykeçzXm',
  41: 'IjLrtSæzPk',
  42: 'ptTcizgrco',
  43: 'hlzepçijGñ',
  44: 'æIWgusqçef',
  45: 'pøthkXhjpz',
  46: 'LzÑøpæzÇAs',
  47: 'btsWfjmÑkc',
  48: 'IæKrknWuvt',
  49: 'QboaecmYka',
  50: 'ztDhWtcaçR',
  51: 'GPaoçJhdui',
  52: 'sxbzutIJgp',
  53: 'jæBYweøpMc',
  54: 'ixoshwUavK',
  55: 'zbñøVCÆwgf',
  56: 'jgMuGamuÆD',
  57: 'ÇzsRiehkNu',
  58: 'mbhUTjbhdz',
  59: 'kioçyngqIx',
  60: 'nevjvñÇøuk'
}
const spaceKeys = {
  1: 'u',
  2: 'sz',
  3: 'Ædl',
  4: 'øniQ',
  5: 'ogUXm',
  6: 'PLfDBd',
  7: 'ShwiLrt',
  8: 'YHkKuGRx',
  9: 'ÆAWYwbTSv',
  10: 'tCGAnxJKes',
  11: 'DJKhÆÇPgdXa',
  12: 'øxcØJOzMÇYlr',
  13: 'eNVAYÇWPMJØns',
  14: 'rzNTbçcvgCVSÆÇ',
  15: 'AprqvnXÑKQySIzØ',
  16: 'WgXmZfKvOeCUuNMæ',
  17: 'EZæRrYeVqxMvGlÑÆS',
  18: 'xKOuEænjqVcÆUvAmfÑ',
  19: 'çFwcØNeGaHhJvÑyIiXB',
  20: 'CBtjiçJVÆxXNænAPespW',
  21: 'QnCraRtKgqñENIbØYXJæv',
  22: 'pxhkCqQZNzXOlUDFvgiVdn',
  23: 'TIqzoÑñdPKDeQæBbVJnAMcW',
  24: 'FJrqñÑpCetyLgøçNMjhPsKVn',
  25: 'ypDIWPlfvViZØxbdnCcYsrFaU',
  26: 'EJUVFXPoygqzñfdÇrIRCOæZWlh',
  27: 'yslmVørOiæÆGtuFUZbLÇRJaPodp',
  28: 'tRgThOÑzDcFBlsNGIWSVHAñbdçÇr',
  29: 'MYqhiGHgJypbZrÑDALwVUvSIQcsux',
  30: 'ÑjgEsVZLcyFWoxOUXdNuTtRØæQDiÆv',
  31: 'KZQhlpXJPTcktxsÑLwØUHnmdaÇRzMoñ',
  32: 'RYCkhwfNybæUZmnÇxdPJgsQTÆKtuaBGz',
  33: 'rbRLfMViGykzPoYSalWjnÑxOqZdhJeHDC',
  34: 'vzuMSnBNHñKTbxtqUælÇOXiaØmFZÑYfIVQ',
  35: 'ÆCNseImQEAñuoæzOFLPGØBMSabnjTVXlkfi',
  36: 'nHkltjhSOYWEpQCJIUMøegDZKRsAqfoaÑØBz',
  37: 'tKTRPrxqøiBÇabGvwMsÑUcCmuLVçJWOfnNdES',
  38: 'ñDkCuVENGwgmaiPWQHJZçyReÑKjqlnOÇbpsFæX',
  39: 'VpgñQZcYOjawrTdIUosWHRFKMÑhmlqJDAuntbPx',
  40: 'OÇJRDÆXTFvPASBiLeqÑæzpøthGjsñNImurYwnVlQ',
  41: 'BacFwWmjiÇLzGMRDJCupfogTÆdyxXrevnIbAHkZPs',
  42: 'bIVkZtCGAWjmJhDpBNÇØÆUgOMQYeSPTføirdEçXñov',
  43: 'fñOzUBYKktmVæÑdNXIØQJoçWySihAsbÇuLleøCaGFnD',
  44: 'ÑIGyKjedqNLPgtmOShøWæwkBpñQÇHixnØFTÆXbsYUlJç',
  45: 'KInOtøØñæÑkMNbUherQFfEJPGDBXmqpxyCdVcaWiALÆvZ',
  46: 'çÇNloPETøAidtCnØHæyeñLVJguhSkRMIwqUGrjOQpKsXFY',
  47: 'æÇDhÆxcpøRBXKuekSfrmQoNasØZtMPTYEFlviqHCVgWnOAy',
  48: 'mÆWrRagLFeTuÇÑçVMoñtQEkflBænSpGcYOAøHNØKzwdbsyjq',
  49: 'BbiæñcPÑVLeDaFwWÇYNACyØEupvxgRKQçtnMmTZSqHzXdhIUÆ',
  50: 'frGzpbXæZEwPuOBaUMTDAøceFxnQÇymioCñYgHWklÑçtØKVdIq',
  51: 'ÆmnOQaÑvEdTgVpZçJæXBlPIcñqbGHyUMRøDzhAiÇLjKSokWuFYC',
  52: 'HhÇrzpJBÑXçPxyMDÆIAtneFvZSlkTuØjiRgafqWCdømOKNUEVscG',
  53: 'jpZlyRPxvÑeLmñHUJdkYhDÆIVÇSGNBrsAbouFEæanøWQzqØKcMçti',
  54: 'GOIXcFomTrknPZsçdUqÑñwHtfVLuvKaÇBØzNDgiCphÆøbYSQWxeJlR',
  55: 'yWeZxTBGawkçcæqÑAXÆjJRmbhLKutgOMIñisSFVØøQEÇrfpHlnDNzoP',
  56: 'tEMZiOrsIcDFXjTzqobævPgRhLaVQSJxñNefØKUGdHCYlnçWmuÆyÑBøk',
  57: 'FPmNZOnMEaJHVñWBviÆxYØosCIqtDQXÑzblucgLrhæøSAwykGRdjpKefç',
  58: 'IøyResÇØlHKhJgmAvMZiXzEtÑLqcodçjwVYkÆUBQuapOxTrDbWFfæNPCSñ',
  59: 'ÑrXæjFØgGAxTQPyøRÆNlkEahpOuKdÇHDIvJWzmLZbsqVMfñBcntSweUCYiç',
  60: 'WMFtbvçTHDgmonaVxæØGfleQzcuXjOdYJÇhñCÆwNBqrøÑUKkPsipyAZELSIR'
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
  return [hash, spc];
}
var unparse = hash => {
  string = "";
  for (i=0; i<hash.length; i+=2) {
    str = revCode[+hash.slice(i, i+2)]
    string += str;
  }
  return string;
}
var encryptSpaces = (spc, message) => {
  var encryptedSpaces = sepSequences[spc.length];
  var len = message.length>60 ? 60 : message.length;
  console.log(message.length)
  var thresh = false;
  var diff = 0;
  for (i of spc) {
    console.log(i)
    if (parseInt(i) > 59 && !thresh) {
      encryptedSpaces += "ї";
      diff = 60;
      thresh = true;
    }
    encryptedSpaces += spaceKeys[len][parseInt(i - diff)];
  }
  return encryptedSpaces;
}
var encryptWords = hash => {
  var lst = hash.split('');
  var parsedHash = "";
  var leftToRight = true;
  while (lst.length !== 0) {
    if (leftToRight || (lst.length === 2 && hash.length%4!==0)) {
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
  var unparsedHash = hash.length%4===0 ? hash.slice(-1) + hash.slice(-2, -1) : hash.slice(-2);
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

// Encryption/Decryption process:
var encrypter = message => {
  var parsedMessage = parse(message);
  var encryptedWords = encryptWords(parsedMessage[0]);
  var unparsedWords = unparse(encryptedWords);
  var encryptedSpaces = encryptSpaces(parsedMessage[1], message);
  var encryptedMessage = unparsedWords + encryptedSpaces;
  return encryptedMessage;
}
var decrypter = message => {
  var parsedMessage = parse(message);
  var decryptedMessage = decrypt(parsedMessage[0]);
  var unparsedMessage = unparse(decryptedMessage);
  return unparsedMessage;
}
