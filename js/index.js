var date = new Date(),
    year = "EN " + date.getFullYear();
document.getElementById('year').innerHTML = year;

var caro = [
  'DENSO',
  'GONO-\nRREA', 
  'PAILA',
  'FEO',
  'RARO',
  'CHANDA',
  'LINDO',
  // 'COMP-\nLACI-\nENTE', 
  'VERDE',
  'PIRO-\BO',
  'ABU-\nRRIDO',  
  'CHAM-\nBÓN',
  'GAY',
  'MENSO',
  'MAN-\nTECO',
  'ARRE-\nCHO',
  'ÑERO',
  'GO-\nMELO',
  'CHOCO\nLOCO',
  'MILLE-\nNIAL',
  'Into\ncable',
  
  'inú\ntil',
  'Apes\ntoso',
  'Jo-\ndido',
  'Lento',
  'Mal-\ncriado',
  'Bár\nbaro',
  // 'Machista'
  'Bor-\nracho',
  'NEA',
  'SEBA',
  'GORDO',
  'LAM-\nPARA',
  'Bueno',
  'Burro',
  'Menso',
	'Meque\ntrefe',
	'Me-\ntido',
  'Ca\nnalla',
	'Malo',
	'Nazi',
  'Cí-\nnico',
	'chido',
  'cholo',
  'chili',
  'lí-\nchigo',
  'bo.\nleta',
  'pichu\nrria',
  'chim-\nba',
  'lam\nbon',
// Fascista	servil
// Feudal	sirviente
// Finoli	sordo
// Gil	sospechoso
// Gordo	Tarugo
// Gringo	Tonto
// Hablar por los codos	tortuga
// Idiota	Trucho
// Ignorante	Una cualquiera
// Imberbe	Vago
// Incapaz	Vejestorio
// Incompetente	Venido abajo
// Indecente	Vergonzoso
// Inepto	Vividor
// Infeliz	Zorro





//   'AMAR\nGO',
// 'GRA\nSOSO',
// 'HOT',
// 'CAlI\nENTE',
// 'po\ndrido',

// 'delicioso',
// 'Fresco',
// 'grasiento',
// 'jugoso',
// 'caliente',
// 'glacial',
// 'suelto',
// 'Derretido',
// 'nutritivo',
// 'espinoso',
// 'lluvioso',
// 'podrido',
// 'salado',
// 'pegajoso',
// 'fuerte',
// 'dulce',
// 'tarta',
// 'sin sabor',
// 'desigual',
// 'débil',
// 'mojado',
// 'madera',
// 'delicioso',
// 'ancho',
// 'gordito',
// 'torcido',
// 'curvado',
// 'profundo',
// 'plano',
// 'alto',
// 'hueco',
// 'bajo',
// 'estrecho',
// 'redondo',
// 'superficial',
// 'flaco',
// 'cuadrado',
// 'empinada',
// 'Derecho',
// 'amplio'
// 'hot',
// 'icy',
// 'loose',
// 'melted',
// 'nutritious',
// 'prickly',
// 'rainy',
// 'rotten',
// 'salty',
// 'sticky',
// 'strong',
// 'sweet',
// 'tart',
// 'tasteless',
// 'uneven',
// 'weak',
// 'wet',
// 'wooden',
// 'yummy',
// 'broad',
// 'chubby',
// 'crooked',
// 'curved',
// 'deep',
// 'flat',
// 'high',
// 'hollow',
// 'low',
// 'narrow',
// 'round',
// 'shallow',
// 'skinny',
// 'square',
// 'steep',
// 'straight',
// 'wide'
];
 var emoji = [
   '🌲🌲🌲🌲🌲🌲     🌲🌲🌲🌲🌲🌲',
   '🌳🌳🌳🌳🌳     🌳🌳🌳🌳🌳',
   '🌴🌴🌴🌴🌴     🌴🌴🌴🌴🌴',
  
   '☠️☠️☠️☠️☠️     ☠️☠️☠️☠️☠️',
   
 
 ]



var getAdjective = function() {
  return caro[Math.floor(Math.random() * caro.length)];
};
var getNoun = function() {
  return emoji[Math.floor(Math.random() * emoji.length)];
};
// var getColor = function() {
//   return color[Math.floor(Math.random() * color.length)];
// };


function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}


$(document).ready(function(){
  $('#theButton').click(function() {
    $('.caro').text(getAdjective());
    $('.emoji').text(getNoun());
    
    $('body').css("background-color", getColor())
    
  });
    })





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
