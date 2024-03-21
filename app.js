//DATA
const parseDict = {
  'a': 0,
  'á': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'é': 6,
  'f': 7,
  'g': 8,
  'h': 9,
  'i': 10,
  'í': 11,
  'j': 12,
  'k': 13,
  'l': 14,
  'm': 15,
  'n': 16,
  'ñ': 17,
  'o': 18,
  'ó': 19,
  'p': 20,
  'q': 21,
  'r': 22,
  's': 23,
  't': 24,
  'u': 25,
  'ú': 26,
  'ü': 27,
  'v': 28,
  'w': 29,
  'x': 30,
  'y': 31,
  'z': 32,
  'A': 33,
  'Á': 34,
  'B': 35,
  'C': 36,
  'D': 37,
  'E': 38,
  'É': 39,
  'F': 40,
  'G': 41,
  'H': 42,
  'I': 43,
  'Í': 44,
  'J': 45,
  'K': 46,
  'L': 47,
  'M': 48,
  'N': 49,
  'Ñ': 50,
  'O': 51,
  'Ó': 52,
  'P': 53,
  'Q': 54,
  'R': 55,
  'S': 56,
  'T': 57,
  'U': 58,
  'Ú': 59,
  'Ü': 60,
  'V': 61,
  'W': 62,
  'X': 63,
  'Y': 64,
  'Z': 65,
  '0': 66,
  '1': 67,
  '2': 68,
  '3': 69,
  '4': 70,
  '5': 71,
  '6': 72,
  '7': 73,
  '8': 74,
  '9': 75,
  '.': 76,
  ',': 77,
  ':': 78,
  ';': 79,
  '-': 80,
  '_': 81,
  '¿': 82,
  '?': 83,
  '¡': 84,
  '!': 85,
  "'": 86,
  '"': 87,
  '#': 88,
  '$': 89,
  '€': 90,
  '%': 91,
  '&': 92,
  '/': 93,
  '\\': 94,
  '(': 95,
  ')': 96,
  '*': 97,
  '[': 98,
  ']': 99
}
const revParseDict = {
  '00': 'a',
  '01': 'á',
  '02': 'b',
  '03': 'c',
  '04': 'd',
  '05': 'e',
  '06': 'é',
  '07': 'f',
  '08': 'g',
  '09': 'h',
  '10': 'i',
  '11': 'í',
  '12': 'j',
  '13': 'k',
  '14': 'l',
  '15': 'm',
  '16': 'n',
  '17': 'ñ',
  '18': 'o',
  '19': 'ó',
  '20': 'p',
  '21': 'q',
  '22': 'r',
  '23': 's',
  '24': 't',
  '25': 'u',
  '26': 'ú',
  '27': 'ü',
  '28': 'v',
  '29': 'w',
  '30': 'x',
  '31': 'y',
  '32': 'z',
  '33': 'A',
  '34': 'Á',
  '35': 'B',
  '36': 'C',
  '37': 'D',
  '38': 'E',
  '39': 'É',
  '40': 'F',
  '41': 'G',
  '42': 'H',
  '43': 'I',
  '44': 'Í',
  '45': 'J',
  '46': 'K',
  '47': 'L',
  '48': 'M',
  '49': 'N',
  '50': 'Ñ',
  '51': 'O',
  '52': 'Ó',
  '53': 'P',
  '54': 'Q',
  '55': 'R',
  '56': 'S',
  '57': 'T',
  '58': 'U',
  '59': 'Ú',
  '60': 'Ü',
  '61': 'V',
  '62': 'W',
  '63': 'X',
  '64': 'Y',
  '65': 'Z',
  '66': '0',
  '67': '1',
  '68': '2',
  '69': '3',
  '70': '4',
  '71': '5',
  '72': '6',
  '73': '7',
  '74': '8',
  '75': '9',
  '76': '.',
  '77': ',',
  '78': ':',
  '79': ';',
  '80': '-',
  '81': '_',
  '82': '¿',
  '83': '?',
  '84': '¡',
  '85': '!',
  '86': "'",
  '87': '"',
  '88': '#',
  '89': '$',
  '90': '€',
  '91': '%',
  '92': '&',
  '93': '/',
  '94': '\\',
  '95': '(',
  '96': ')',
  '97': '*',
  '98': '[',
  '99': ']'
}
const encryptDict = {
  '0': 'a',
  '1': 'á',
  '2': 'α',
  '3': 'b',
  '4': 'β',
  '5': 'c',
  '6': 'd',
  '7': 'δ',
  '8': 'e',
  '9': 'ε',
  '10': 'é',
  '11': 'f',
  '12': 'φ',
  '13': 'g',
  '14': 'γ',
  '15': 'h',
  '16': 'i',
  '17': 'η',
  '18': 'θ',
  '19': 'ι',
  '20': 'í',
  '21': 'j',
  '22': 'χ',
  '23': 'k',
  '24': 'κ',
  '25': 'l',
  '26': 'λ',
  '27': 'm',
  '28': 'μ',
  '29': 'n',
  '30': 'ν',
  '31': 'ñ',
  '32': 'o',
  '33': 'ó',
  '34': 'ω',
  '35': 'p',
  '36': 'π',
  '37': 'q',
  '38': 'r',
  '39': 'ρ',
  '40': 's',
  '41': 'ς',
  '42': 't',
  '43': 'τ',
  '44': 'u',
  '45': 'υ',
  '46': 'ú',
  '47': 'ü',
  '48': 'v',
  '49': 'w',
  '50': 'x',
  '51': 'y',
  '52': 'z',
  '53': 'ζ',
  '54': 'A',
  '55': 'Á',
  '56': 'B',
  '57': 'Β',
  '58': 'C',
  '59': 'D',
  '60': 'Δ',
  '61': 'E',
  '62': 'É',
  '63': 'F',
  '64': 'G',
  '65': 'Γ',
  '66': 'H',
  '67': 'Η',
  '68': 'I',
  '69': 'Í',
  '70': 'Θ',
  '71': 'J',
  '72': 'Χ',
  '73': 'K',
  '74': 'Κ',
  '75': 'L',
  '76': 'Λ',
  '77': 'M',
  '78': 'Μ',
  '79': 'N',
  '80': 'Ν',
  '81': 'Ñ',
  '82': 'O',
  '83': 'Ó',
  '84': 'Ω',
  '85': 'P',
  '86': 'Π',
  '87': 'Q',
  '88': 'R',
  '89': 'S',
  '90': 'Σ',
  '91': 'T',
  '92': 'U',
  '93': 'Ú',
  '94': 'Ü',
  '95': 'V',
  '96': 'W',
  '97': 'X',
  '98': 'Y',
  '99': 'Z'
};
const revEncryptDict = {
  'a': '0',
  'á': '1',
  'α': '2',
  'b': '3',
  'β': '4',
  'c': '5',
  'd': '6',
  'δ': '7',
  'e': '8',
  'ε': '9',
  'é': '10',
  'f': '11',
  'φ': '12',
  'g': '13',
  'γ': '14',
  'h': '15',
  'i': '16',
  'η': '17',
  'θ': '18',
  'ι': '19',
  'í': '20',
  'j': '21',
  'χ': '22',
  'k': '23',
  'κ': '24',
  'l': '25',
  'λ': '26',
  'm': '27',
  'μ': '28',
  'n': '29',
  'ν': '30',
  'ñ': '31',
  'o': '32',
  'ó': '33',
  'ω': '34',
  'p': '35',
  'π': '36',
  'q': '37',
  'r': '38',
  'ρ': '39',
  's': '40',
  'ς': '41',
  't': '42',
  'τ': '43',
  'u': '44',
  'υ': '45',
  'ú': '46',
  'ü': '47',
  'v': '48',
  'w': '49',
  'x': '50',
  'y': '51',
  'z': '52',
  'ζ': '53',
  'A': '54',
  'Á': '55',
  'B': '56',
  'Β': '57',
  'C': '58',
  'D': '59',
  'Δ': '60',
  'E': '61',
  'É': '62',
  'F': '63',
  'G': '64',
  'Γ': '65',
  'H': '66',
  'Η': '67',
  'I': '68',
  'Í': '69',
  'Θ': '70',
  'J': '71',
  'Χ': '72',
  'K': '73',
  'Κ': '74',
  'L': '75',
  'Λ': '76',
  'M': '77',
  'Μ': '78',
  'N': '79',
  'Ν': '80',
  'Ñ': '81',
  'O': '82',
  'Ó': '83',
  'Ω': '84',
  'P': '85',
  'Π': '86',
  'Q': '87',
  'R': '88',
  'S': '89',
  'Σ': '90',
  'T': '91',
  'U': '92',
  'Ú': '93',
  'Ü': '94',
  'V': '95',
  'W': '96',
  'X': '97',
  'Y': '98',
  'Z': '99'
};
const sepSequences = {
  '0': 'ΒolγLiθπΔc',
  '1': 'λÉhνΔnCúςρ',
  '2': 'μγdΧθΣeηhñ',
  '3': 'ΛíπΔλxóBsc',
  '4': 'αeΗylΒúΚüo',
  '5': 'ScPρτΘmφfδ',
  '6': 'CνZjΒζπεtρ',
  '7': 'ÓpQoδHgμχπ',
  '8': 'YrKlμZχoki',
  '9': 'CsÉxjΓtχeλ',
  '10': 'SiθωφΗúΩμπ',
  '11': 'LηρSυúHaχb',
  '12': 'ΩλDφΘυτβγí',
  '13': 'εΛφλpΒtEed',
  '14': 'ÑηPγáDτbzl',
  '15': 'ΔφωúΝςcgQó',
  '16': 'íBcÉnjHτwñ',
  '17': 'móLsBhAδωυ',
  '18': 'τμÚχkedΧυλ',
  '19': 'AωñOfbJyχu',
  '20': 'ÑbRχΒzιωnη',
  '21': 'ÑsQgbaPθκá',
  '22': 'tLγÓrIφχgτ',
  '23': 'ςLβMprcwθε',
  '24': 'DéΛκÑsνςζh',
  '25': 'ÍfcghAdθLi',
  '26': 'JεÍκSπjuíw',
  '27': 'ñDρyΗkΠóιχ',
  '28': 'iÁβιzωεPδo',
  '29': 'θυFáwPóúDo',
  '30': 'UrüSαZxvτs',
  '31': 'ΔuxadáRγcE',
  '32': 'RmÓrwgωyzÁ',
  '33': 'tΜχΘquζBγí',
  '34': 'phÚñEuκNδγ',
  '35': 'lUdbλÜséÓκ',
  '36': 'χωÑκGφoΘxv',
  '37': 'GcχλAnJufr',
  '38': 'ÜwnΩαZπhby',
  '39': 'ΒqZüÉsyrát',
  '40': 'ymΜςθnλCfT',
  '41': 'lβJχhAreΔγ',
  '42': 'VbΒsJíkhnπ',
  '43': 'GςΜζπZυücν',
  '44': 'ΒεΚτÜqóirθ',
  '45': 'ñΠáYcευIβω',
  '46': 'τfθλφviΛαΩ',
  '47': 'JuMεΔsñjqi',
  '48': 'vQθςñΓzOey',
  '49': 'uκTdsÑνzHη',
  '50': 'FςΣhZbυκpo',
  '51': 'VργÉςdúgSκ',
  '52': 'XjθüúζzlDι',
  '53': 'óQλfRγΗjμq',
  '54': 'bÉδAχüBhiω',
  '55': 'νzdCxIóGyw',
  '56': 'ΣδJηGáςdtz',
  '57': 'jπHνuXzWqe',
  '58': 'ιNπmΒpΩuhδ',
  '59': 'lkÍúDáΔouπ',
  '60': 'éΓsÍfδOημc'
}
const spaceKeys = {
  1: 'h',
  2: 'υÜ',
  3: 'pςu',
  4: 'ÉΣκó',
  5: 'ζPΩuμ',
  6: 'vτΩdKN',
  7: 'sΜΔÑΓXé',
  8: 'βYSrAgθR',
  9: 'zonΝñÚÁfδ',
  10: 'éeκλωEyóΩv',
  11: 'KkUdÓBóvsυa',
  12: 'pνΠπςfΒDXÉΔM',
  13: 'εΚFouπτOQeγζü',
  14: 'áςbκτΛuZÍΘμTβΧ',
  15: 'ZXαιoYΔeauζwωβs',
  16: 'ÉÜqnJpÍíjζΚÑXVIM',
  17: 'HΗVςÜhTvδΩFmwÑΛGA',
  18: 'NLBφYxΠcZλυpXuéÍΗg',
  19: 'ΜιoεiζXΓíyQJgςMVΧqδ',
  20: 'OTΓCβωΠÜGFÍΝéIDaEkAδ',
  21: 'ΛóHWÚQjÜγSλCDsΘφxoIμf',
  22: 'DγΗWκαJBvUωφdyÁZnóTRΜF',
  23: 'QpYfφzgRtθνáwqhΧxlΒLjΣV',
  24: 'ΠéfIbdgΣWPcJθByUCΓÚpΛoHF',
  25: 'cJIAωρkpτNOKFiγηDuΩXdΗVáθ',
  26: 'ΓhvóHñπEÍζráÓβÜIeGfτBjQüΠY',
  27: 'ÉiÜζvÁΝδχeVóñcΒFΓμÍιéouEMÓf',
  28: 'myáφídVfKaCθIñlgÑvΒHρΣWcδGχα',
  29: 'CMWαβΧΜajñREwςΠιΘΔπÜlQÓúJρPuÑ',
  30: 'óüRlιkYZτsnEáΔÚNéCxΠíÉMÁcΝFuXΓ',
  31: 'luΜυaBζGLeMxθDAFíóYατjXshΒPεtΓk',
  32: 'ΛeZYεWΠΗγagAhüfcÑKδjlVzPñΧmJςsow',
  33: 'OηVΗPHwπDpÓLvβÚEυQαΚiΓΛéÑργBñmXUa',
  34: 'ρEUÉνθüZnPωáaAzImfúQpCvÓowNóhπlμtD',
  35: 'qαÉθuGimζμFZPιÚwQMlúΩeÑDIOWcΣTκSRJá',
  36: 'hΣμÑΔyχBOúδUevaΗYñθPéλKuΘΛüHVMÚFzWςε',
  37: 'ñzηλΒBΔsEγoNπxκHgüÜiÓDlZXΣíwΠΜeOqχAvó',
  38: 'pδÉFuGeWΗjñmrxΓTáShZφνdVΩOÓωAΛaHciCÑηl',
  39: 'HÁγΝκBFYαéΚRSΛpiüsυlPςπωhzLñyΜEεAθιφcóe',
  40: 'aáιqíζMkΚπÉΠdνQΝÜgenυφEΜÁmfεVúrSΗOÓΧRzñΔ',
  41: 'órνwεúKBJnubθμYΓAhγsjoδxφκΠPalñLéQτNζEαfD',
  42: 'κñbJGLθζnιηKDóΒlAρTÍíΧVΔEOpswΠRHνΚzφhxúUςk',
  43: 'ΓÍkoTGΚΠΛCnNÉUdΝμiΘyYαMJáÁEFíγuBseúπρmñwÜaÑ',
  44: 'ΣhBαΛUükΜaΩιηπeφviCgdñAjWZráQÓPFDτcsΗúoΠρςlγ',
  45: 'ιωhÑαΔλñκqMélΚÁÚΠXbςjγzüvTÜΣVímrDKgóΛEΓΗζρdΒP',
  46: 'bTopθÜιΜπMúμUÉOYΣqxjΧínBDΗAαÍÓIωeVΝρχβFkPΠRHÑl',
  47: 'ÓΩavMOΓyIαmxUηYÉΣdDhθzωγΧLÚSΒfζχüÍΜρjóHlKτoíφπB',
  48: 'wváCVXnΔtΒΓTαSυUEÚPdτuΣókκHgÓpJÁWzÜβaÍμKGIDüiúρΛ',
  49: 'ΜiΛΩaGρςPdφToΘαfIOΣcCwΗτQtFhΒÓχíjΧrbKÜRuυωgáÉZzγπ',
  50: 'cκEΠRUsΜVχDÉFΚNKΛÁfΝBLñnΩdjZδgεtmςkÜaÑáβζΗovPéφθSX',
  51: 'τΒcΝyΘÑñFXΠΚEQΔZκrHλtAéóhΗΩsjζknΣxÓμuCRoSÍηdvυπςbIε',
  52: 'ÚñζAδηεUmüOTΩXgβIlÓcDLCαWλΛιbFτΝQjqΔEÜκÉepRvΜυςΓΒÑΧM',
  53: 'λiwEιtÓρcíÜαüςSoFDuybκROΩávΔÉHBΛTQΚΝXÚVhχυAeΗγμéUzlΘΒ',
  54: 'xγñΔaΝVAΓKUιüéIFςYOvεzΜctgΣΧρqΩjΛlωsÑμHEukSνrBαWÍdÚηχC',
  55: 'UνeÑΔyÜkKΚXvtζρΧCΜrυαhγúEφΛλdIHΩPωnucóιwΒÚOWáBςδAΠMτqxS',
  56: 'EυχlUJαPθπüΧÁnoÑφcLÓΝACΠÚStΚVDmΓκνéGÜbZδáIvΒXYÍςóβeWλqηj',
  57: 'ΛΜκcρqJωZáslYKNΗÓΧMRνEOBíζγtXΠηVτdDQÚvFÉaΔεΚrÜθUozTWχIΩας',
  58: 'oNZΝnρOνΒrβεJIsgkADTáÉyúbémθΧhcQtwSRΛaiHÚüCαΚíκÓpqΓlÁμPFÜW',
  59: 'óρφZβΒXδθfγFayUαbVwDCΘχμíΝBsΛlYAQeJgLηÉSzTáλjEdKmNΧnΔΓuΩñHζ',
  60: 'KiμgΜáΠδcζΗΝφυθVQπXΒMDÑαeςRmsBéγνyUχoκxAFpNΧεWHλhΣrazρΔÓñZιn'
}

// ENCRYPTION FUNCTIONS
var parseMessage = message => {
  var hash = "";
  var spc = []
  for (i=0; i<message.length; i++){
    chr = parseDict[message[i]];
    if (message[i] !== " "){
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
var encryptChars = hash => {
  var lst = hash.split('');
  var encryptedHash = "";
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
    encryptedHash += `${first}${second}`;

  }
  var string = "";
  for (i=0; i<encryptedHash.length; i+=2) {
    str = encryptDict[+encryptedHash.slice(i, i+2)]
    string += str;
  }

  return string;

}
var encryptSpaces = (spc, message) => {
  var encryptedSpaces = sepSequences[spc.length.toString()];
  var len = message.length>60 ? 60 : message.length;
  var thresh = false;
  var diff = 0;
  for (i of spc) {
    if (parseInt(i) > 59 && !thresh) {
      encryptedSpaces += "ї";
      diff = 60;
      thresh = true;
    }
    encryptedSpaces += spaceKeys[len][parseInt(i - diff)];
  }
  return encryptedSpaces;
}

// DECRYPTION FUNCTIONS
var parseCode = message => {
  var sep;
  for (i of Object.values(sepSequences)) {
    if (message.includes(i)) {
      sep = i;
      break
    }
  }

  //Separate chars, spaces from code
  var sepIdx = message.indexOf(sep);
  var spc = message.slice(sepIdx+10);
  var words = message.slice(0, sepIdx);

  //Turn chars into hash
  var hash = ""
  for (i=0; i<words.length; i++){
    var chr = revEncryptDict[words[i]];
    if (chr.toString().length < 2) {
      hash += `0${chr}`;
    }
    else {
      hash += chr;
    }
  }

  //return hash, spaces
  return [hash, spc];
}
var decryptChars = hash => {
  var lst = hash.split('');
  var uncryptedHash = hash.length%4===0 ? hash.slice(-1) + hash.slice(-2, -1) : hash.slice(-2);
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
    uncryptedHash = left + uncryptedHash + right;
  }
  var string = "";
  for (i=0; i<uncryptedHash.length; i+=2) {
    str = revParseDict[uncryptedHash.slice(i, i+2)]
    string += str;
  }
  return string;
}
var decryptSpaces = (spc, chars) => {
  var diff = spc.includes("ї") ? -1 : 0;
  var len = spc.length + chars.length + diff;
  var spaceKey = len>60 ? spaceKeys[60] : spaceKeys[len];
  var shift = 0;
  message = chars;
  for (var i=0;i<spc.length;i++) {
    var symbol = spc[i];
    if (symbol==="ї") {
      shift += 60;
      continue;
    }
    idx = spaceKey.indexOf(symbol) + shift;
    message = message.slice(0, idx) + " " + message.slice(idx);
  }
  return message;
}

// MAIN FUNCTIONS:
var encrypter = message => {
  var parsedMessage = parseMessage(message);
  var encryptedChars = encryptChars(parsedMessage[0]);
  var encryptedSpaces = encryptSpaces(parsedMessage[1], message);
  var encryptedMessage = encryptedChars + encryptedSpaces;
  return encryptedMessage;
}
var decrypter = message => {
  var parsedMessage = parseCode(message);
  var decryptedChars = decryptChars(parsedMessage[0]);
  var decryptedMessage = decryptSpaces(parsedMessage[1], decryptedChars);
  return decryptedMessage;
}

//TESTING:
// console.log(encrypter("apple")); // Returns "caκéíΒolγLiθπΔc"
// console.log(decrypter("caκéíΒolγLiθπΔc")); // Returns "apple"
// console.log();
// console.log(encrypter("Hello world!")); // Returns "υOβcγγφκθθnλÉhνΔnCúςρf"
// console.log(decrypter("υOβcγγφκθθnλÉhνΔnCúςρf")); // Returns "Hello world!"
// console.log();
// console.log(encrypter("This is my first encryption code, and it's working!")); // Returns "ÁQeεiéíggéχkθhρjbmiΝκχígκβdhédδKlαωáμékβiéθYrKlμZχokiyñΠκsxCη"
// console.log(decrypter("ÁQeεiéíggéχkθhρjbmiΝκχígκβdhédδKlαωáμékβiéθYrKlμZχokiyñΠκsxCη")); // Returns "This is my first encryption code, and it's working!"
// console.log();
// console.log(encrypter("Today's date is: 03/03/2024.")); // Returns "BMéΜeGdΔrEÓWnFdGbΣnGdΓθΘkΛíπΔλxóBscfIÑ"
// console.log(decrypter("BMéΜeGdΔrEÓWnFdGbΣnGdΓθΘkΛíπΔλxóBscfIÑ")); // Returns "Today's date is: 03/03/2024."
// console.log();
// console.log(encrypter("As I always say, \"Let's always stay curious!\"")); // Returns "qÓlÓτkcíθγíιαípjkbjóaaωjKmÓmςqacnκΩiíbÓpQoδHgμχπhαéΠümó"
// console.log(decrypter("qÓlÓτkcíθγíιαípjkbjóaaωjKmÓmςqacnκΩiíbÓpQoδHgμχπhαéΠümó")); // Returns "As I always say, "Let's always stay curious!""
// console.log();
// console.log(encrypter("This secret bag costs €23.89!")); // Returns "ÁQcNγΘλKnFeΓaÚkχβlkκeφbaeαeΗylΒúΚüoβEιQ"
// console.log(decrypter("ÁQcNγΘλKnFeΓaÚkχβlkκeφbaeαeΗylΒúΚüoβEιQ")); // Returns "This secret bag costs €23.89!"

//WEB FUNCTIONALITY

let out = false;
function checkInputLength() {
  // Ensures valid string length as user types
  let text = document.querySelector(".text-input input").value;
  if ((text.length >=8) && (text.length <= 120)) {
    document.querySelector(".message").innerHTML = "";
    document.querySelectorAll(".input-actions button").forEach(e => {
      e.disabled = false;
    });
  }
  else {
    document.querySelector(".message").style = "display:unset;"
    document.querySelector(".message").innerHTML = "Your message must be 8 to 120 characters long.";
    document.querySelectorAll(".input-actions button").forEach(e => {
      e.disabled = true;
    });
  }
}
function transformText(encrypt) {
  // Encrypts/decrypts valid input; enables output elements
  let text = document.querySelector(".text-input input").value;
  if (text) {
    if ((text.length >=8) && (text.length <= 120)) {
      try {
        let transformedText = encrypt ? encrypter(text) : decrypter(text);
        let outputMessage = encrypt ? "Your encrypted text is:" : "Your decrypted text is:";
        document.querySelector(".text-output h3").innerHTML = outputMessage;
        document.querySelector(".text-output p").innerHTML = transformedText;
        document.querySelector(".output button").style = "opacity:1;";
        document.querySelector(".output button").disabled = false;
        document.querySelector(".output button").innerHTML = "Copy";
        out = true;
      }
      catch {
        document.querySelector(".text-output h3").innerHTML = "Please enter a valid input.";
        document.querySelector(".text-output p").innerHTML = "";
        document.querySelector(".output button").style = "opacity:0";
        document.querySelector(".output button").disabled = true;
      }
    }
    else {
      alert("Your text must be between 8 and 120 characters long.")
    }
  }
  else {
    alert("Input field can't be empty.")
  }
}
function reset(eraser=false) {
  // Resets element values; disables/hides output elements
  if (out || eraser) {
    document.querySelector(".text-input input").value = "";
    document.querySelectorAll(".input-actions button").forEach(e => {
    e.disabled = true;
  });
  document.querySelector(".text-output h3").innerHTML = "";
  document.querySelector(".text-output p").innerHTML = "";
  document.querySelector(".output button").disabled = true;
  document.querySelector(".output button").style = "opacity:0;";
  out=false;
  }

}
async function copyOutput() {
  // Allows for on-click clipboard writing
  let text = document.querySelector(".output .text-output p");
  navigator.clipboard.writeText(text.innerHTML);
  console.log(navigator.clipboard);
  document.querySelector(".output button").innerHTML = "Copied!";
}

//EVENT LISTENERS
document.querySelector(".text-input input").addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        document.querySelector(".input-actions button").click();
    }
});
