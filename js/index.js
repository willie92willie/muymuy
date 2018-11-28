var date = new Date(),
    year = "en " + date.getFullYear();
document.getElementById('year').innerHTML = year;

var caro = [
  'DENSO',
  'GONORREA', 
  'PAILA',
  'FEO',
  'RARO',
  'CHANDA',
  'LINDO',
  'COMPLACIENTE', 
  'VERDE',
  'PIROBO',
  'ABURRIDO',  
  'CHAMBÓN',
  'GAY',
  'ARRECHO',
  'ÑERO',
  'GOMELO',
  'CHOCOLOCO',
  'MILLENIAL',
  'LOQUITO',
  'NEA',
  'SEBA',
  'GORDO',
  'LAMPARA',
 
  'bitter',
'delicious',
'fresh',
'greasy',
'juicy',
'hot',
'icy',
'loose',
'melted',
'nutritious',
'prickly',
'rainy',
'rotten',
'salty',
'sticky',
'strong',
'sweet',
'tart',
'tasteless',
'uneven',
'weak',
'wet',
'wooden',
'yummy',
'broad',
'chubby',
'crooked',
'curved',
'deep',
'flat',
'high',
'hollow',
'low',
'narrow',
'round',
'shallow',
'skinny',
'square',
'steep',
'straight',
'wide'
];
 var emoji = [
   '🌲🌲🌲🌲🌲🌲   🌲🌲🌲🌲🌲🌲',
   '🌳🌳🌳🌳🌳🌳   🌳🌳🌳🌳🌳🌳',
   '🌴🌴🌴🌴🌴🌴   🌴🌴🌴🌴🌴🌴',
   '👐🏻👐🏻👐🏻👐🏻👐🏻👐🏻   👐🏻👐🏻👐🏻👐🏻👐🏻👐🏻',
   '☠️☠️☠️☠️☠️   ☠️☠️☠️☠️☠️☠',
   
 
 ]


var getAdjective = function() {
  return caro[Math.floor(Math.random() * caro.length)];
};
var getNoun = function() {
  return emoji[Math.floor(Math.random() * emoji.length)];
};

$('#theButton').click(function() {
  $('.caro').text(getAdjective());
  $('.emoji').text(getNoun());
  
});



// var adj = [
//   'bitter',
//  'delicious',
//  'fresh',
//  'greasy',
//  'juicy',
//  'hot',
//  'icy',
//  'loose',
//  'melted',
//  'nutritious',
//  'prickly',
//  'rainy',
//  'podrido',
//  'salty',
//  'sticky',
//  'fuerte',
//  'dulce',
//  'tart',
//  'tasteless',
//  'uneven',
//  'weak',
//  'wet',
//  'wooden',
//  'yummy',
//  'broad',
//  'chubby',
//  'crooked',
//  'curved',
//  'deep',
//  'flat',
//  'high',
//  'hollow',
//  'low',
//  'narrow',
//  'round',
//  'shallow',
//  'skinny',
//  'square',
//  'steep',
//  'straight',
//  'wide'
//  ];
 
//  function repetir(emoji,num){
//    return emoji.repeat(num) + "   " + emoji.repeat(num)
//  }
//   var emoji = [
//      repetir('🐶',6),
//      repetir('🐱',6),
//      repetir('🐭',6),
//      repetir('🐰',6),
//      repetir('🐮',6),
//      repetir('🐷',6),
//      repetir('🐽',6),
//      repetir('🐸',6),
//      repetir('🙈',6),
//      repetir('🙉',6),
//      repetir('🙊',6),
//      repetir('🐒',6),
//      repetir('🦍',6),
//      repetir('🐔',6),
//      repetir('🐣',6),
//      repetir('🐗',6),
//      repetir('🐴',6),
//      repetir('🐢',6),
//      repetir('🐍',6),
//      repetir('🦎',6),
//      repetir('🐙',6),
//      repetir('🐬',6),
//      repetir('🦈',6),
//      repetir('🐋',6),
//      repetir('🐊',6),
//      repetir('🐄',6),
//      repetir('🐗',6),
//      repetir('🦄',6),
//      repetir('🐝',6),
//      repetir('🦋',6),
//      repetir('🐌',6),
//      repetir('🐞',6),
//      repetir('🐜',6),
//      repetir('🕷',6),
//      repetir('🕸',6),
//      repetir('🦂',6),
//      repetir('🐖',6),
//      repetir('🦇',6),
//      repetir('🐓',6),
//      repetir('🐀',6),
//      repetir('🐁',6),
//      repetir('🐾',6),
//      repetir('🐲',6),
//      repetir('🦖',6),
//      repetir('🌵',6),
//      repetir('🌲',6),
//      repetir('🌳',6),
//      repetir('🌴',6),
//      repetir('🌱',6),
//      repetir('🌿',6),
//      repetir('🍀',6),
//      repetir('🎍',6),
//      repetir('🎋',6),
//      repetir('🍃',6),
//      repetir('🍂',6),
//      repetir('🍁',6),
//      repetir('🌾',6),
//      repetir('🌺',6),
//      repetir('🌻',6),
//      repetir('🌹',6),
//      repetir('🌷',6),
//      repetir('🌼',6),
//      repetir('🍄',6),
//      repetir('🌎',6),
//      repetir('🌍',6),
//      repetir('🌏',6),
//      '🌕🌖🌗🌘🌘🌑   🌑🌒🌒🌓🌔🌕',
//      '🌜🌜🌜🌜🌜🌜   🌛🌛🌛🌛🌛🌛',
//      repetir('✨',6),
//      repetir('⭐',6),
//      repetir('🌧',6),
//      repetir('⛈',6),
//      repetir('🌩',6),
//      repetir('🔥',6), 
//      repetir('💥',6),
//      repetir('🌨',6),
//      repetir('💧',6),
//      repetir('🌊',6),
//      repetir('🍎',6),
//      repetir('🍌',6),
//      repetir('🍍',6),
//      repetir('🥑',6),
//      repetir('🍆',6),
//      repetir('🌽',6),
//      repetir('🍖',6),
//      repetir('🥚',6),
//      repetir('🍔',6),
//      repetir('🍟',6),
//      repetir('🍕',6),
//      repetir('🍦',6),
//      repetir('🍭',6),
//      repetir('🍿',6),
//      repetir('🍺',6),
//      repetir('🍷',6),
//      repetir('🤪',6),
//      repetir('🤑',6),
//      repetir('🤡',6),
//      repetir('🤫',6),
//      repetir('😡',6),
//      repetir('🤬',6),
//      repetir('😭',6),
//      repetir('😵',6),
//      repetir('🤬',6),
//      repetir('😱',6),
//      repetir('😭',6),
//      repetir('🤩',6),
//      repetir('👹',6),
//      repetir('💩',6), 
//      repetir('👻',6),
//      repetir('💀',6),
//      repetir('👽',6),
//      repetir('🤖',6),
//      repetir('👐🏻',6),
//      repetir('🙌',6),
//      repetir('🙏',6),
//      repetir('👍',6),
//      repetir('👊',6),
//      repetir('🖕',6),
//      repetir('👁',6),
//      repetir('🧠',6),
//      repetir('👙',6),
//      repetir('🙅‍',6),
//      repetir('🤦‍',6),
//      repetir('👑',6),
//      repetir('🕶',6),
//      repetir('💍',6),
//      repetir('☠️',6),
//      repetir('👐🏻',6),
//      repetir('🏀',6),
//      repetir('⚽',6),
//      repetir('🎱',6),
//      repetir('🎖',6),
//      repetir('🏅',6),
//      repetir('🥇',6),
//      repetir('🏆',6),
//      '👉👉👉👉👉👉   👈👈👈👈👈👈',     
//      repetir('🎬',6),
//      repetir('🎲',6),
//      repetir('👾',6),
//   ];
