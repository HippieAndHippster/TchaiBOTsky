/*********************	Heuristica	*********************/

var escalas = [
	[2,2,1,2,2,2,1],	//mayor
	[2,1,2,2,1,2,2],	//menor
	[2,1,2,2,1,3,1],	//armonica
	[2,1,2,2,2,2,1]		//bachiana
];

var notasUsadas = new Array(12);
for(var i = 0; i < 12; i++)
{
	notasUsadas[i] = false;
}
//var melodia = new Array();

var pentagrama = {
	tempo: 120,
	sentimiento: 0, //[1]:Alegre,[2]:Sad,[3]:Al otro ladin,[4]:darks (cago murcielagos)
	velocidad: 1,	//[1]:Rapido,[2]:Normie,[3]:Lento
	melodia: [	  
		
	    ["C",4],
	    ["C#",2],
	    ["D",4],
	    ["D#",2],
	    ["G",1],
	    ["A",1],
	    ["A#",1],
	    ["B",1],
	    ["E",8],
	    ["A#",1],
	    ["B",1],
	    ["C#",1],
	    ["C#",1],
	    ["A#",1],
	    ["B",1],
	    ["A#",1],
	    ["A#",1]
	    
	]
};

var melodias = new Array();
var ind = 0;
var contTemp = 0;
melodias.push(new Array());
for(var x = 0; x < pentagrama.melodia.length; x++)
{
	contTemp += pentagrama.melodia[x][1];
	melodias[ind].push(pentagrama.melodia[x]);
	if(contTemp == 16 && x != pentagrama.melodia.length - 1)
	{
		ind++;
		melodias.push(new Array());
		contTemp = 0;
	}
	
}

var posiblesEscalasTotales = Array();

for(var x = 0; x < melodias.length; x++)
{
	//var melodia = pentagrama.melodia;
	var melodia = melodias[x];
	
	for(var i = 0; i < melodia.length; i++)
	{
		switch(melodia[i][0]) {
	    case "C":
	        notasUsadas[0] = true;
	        break;
	    case "C#":
	        notasUsadas[1] = true;
	        break;
	    case "D":
	        notasUsadas[2] = true;
	        break;
	    case "D#":
	        notasUsadas[3] = true;
	        break;
	    case "E":
	        notasUsadas[4] = true;
	        break;
	    case "F":
	        notasUsadas[5] = true;
	        break;
	    case "F#":
	        notasUsadas[6] = true;
	        break;
	    case "G":
	        notasUsadas[7] = true;
	        break;
	    case "G#":
	        notasUsadas[8] = true;
	        break;
	    case "A":
	        notasUsadas[9] = true;
	        break;
	    case "A#":
	        notasUsadas[10] = true;
	        break;
	    case "B":
	        notasUsadas[11] = true;
	        break;  
	    } 
		
	}

	var notasBase = new Array();
	notasBase.push(new Array(12));

	for(var i = 0; i < 12; i++)
	{
		notasBase[0][i] = false;	
	}


	//Checa C y C#
	if(notasUsadas[0] && notasUsadas[1])
					{
    notasBase.push(copiaNotasBase(notasBase[0]));
    notasBase[0][0] = true;
    notasBase[1][1] = true;
}
	else
										{
    if(notasUsadas[0])
    {
        notasBase[0][0] = true;
    }
    else if(notasUsadas[1])
    {
        notasBase[0][1] = true;
    }
}

	//Checa D y D#
	if(notasUsadas[2] && notasUsadas[3])
									{
	var cant = notasBase.length;
	for(var i = 0; i < cant; i++)
	{
		notasBase.push(copiaNotasBase(notasBase[i]));
		notasBase[i][2] = true;
		notasBase[cant + i][3] = true;
	}
}
	else
																{
	if(notasUsadas[2])
	{
		for(var i = 0; i < notasBase.length; i++)
		{
			notasBase[i][2] = true;
		}		
	}
	else if(notasUsadas[3])
	{
		for(var i = 0; i < notasBase.length; i++)
		{
			notasBase[i][3] = true;
		}		
	}
}

	//Checa E
	if(notasUsadas[4])
						{
	for(var i = 0; i < notasBase.length; i++)
	{
		notasBase[i][4] = true;
	}		
}

	//Checa F y F#
	if(notasUsadas[5] && notasUsadas[6])
									{
	var cant = notasBase.length;
	for(var i = 0; i < cant; i++)
	{
		notasBase.push(copiaNotasBase(notasBase[i]));
		notasBase[i][5] = true;
		notasBase[cant + i][6] = true;
	}
}
	else
																{
	if(notasUsadas[5])
	{
		for(var i = 0; i < notasBase.length; i++)
		{
			notasBase[i][5] = true;
		}		
	}
	else if(notasUsadas[6])
	{
		for(var i = 0; i < notasBase.length; i++)
		{
			notasBase[i][6] = true;
		}		
	}
}

	//Checa G y G#
	if(notasUsadas[7] && notasUsadas[8])
									{
	var cant = notasBase.length;
	for(var i = 0; i < cant; i++)
	{
		notasBase.push(copiaNotasBase(notasBase[i]));
		notasBase[i][7] = true;
		notasBase[cant + i][8] = true;
	}
}
	else
																{
	if(notasUsadas[7])
	{
		for(var i = 0; i < notasBase.length; i++)
		{
			notasBase[i][7] = true;
		}		
	}
	else if(notasUsadas[8])
	{
		for(var i = 0; i < notasBase.length; i++)
		{
			notasBase[i][8] = true;
		}		
	}
}

	//Checa A y A#
	if(notasUsadas[9] && notasUsadas[10])
									{
	var cant = notasBase.length;
	for(var i = 0; i < cant; i++)
	{
		notasBase.push(copiaNotasBase(notasBase[i]));
		notasBase[i][9] = true;
		notasBase[cant + i][10] = true;
	}
}
	else
																{
	if(notasUsadas[9])
	{
		for(var i = 0; i < notasBase.length; i++)
		{
			notasBase[i][9] = true;
		}		
	}
	else if(notasUsadas[10])
	{
		for(var i = 0; i < notasBase.length; i++)
		{
			notasBase[i][10] = true;
		}		
	}
}

	//Checa B
	if(notasUsadas[11])
						{
	for(var i = 0; i < notasBase.length; i++)
	{
		notasBase[i][11] = true;
	}		
}

	/*for(var i = 0; i < notasBase.length; i++)
	{
		console.log("["+i+"]:")
		imprimeNotas(notasBase[i]);
	}*/

	//Tabla que guarda la distancia en semitonos en las melodias de notasBase
	var semitonos = new Array();
	var indices = new Array();
	var posiblesEscalas = new Array();

	//Crea la tabla semitonos
	for(var i = 0; i < notasBase.length; i++)
	{	
		semitonos.push(new Array());
		var indice = 0;
		for(indice; indice < 12; indice++)
		{
			if(notasBase[i][indice])
				break;		
		}
		
		indices.push(indice);
		
		var cont = 0;
		
		for(var j = indice + 1; j < 12; j++)
		{
			cont++;
			if(notasBase[i][j])
			{
				semitonos[i].push(cont);
				cont = 0;			
			}
		}
	}

	//para cada array de semitono
	for(var i = 0; i < semitonos.length; i++)
	{
		
		//para cada nota en la escala
		for(var j = 0; j < 7; j++)
		{
			var cont = 0;
			var indiceTemp = 0;
			//para recorrido de la escala
			for(var k = 0; k < 7; k++)
			{
				cont += escalas[pentagrama.sentimiento][(j + k)%7];
				
				//sumatoria de semitonos exitosa			
				if(cont == semitonos[i][indiceTemp])
				{
					indiceTemp++;				
					
					//Armonia encontrada
					if(indiceTemp == semitonos[i].length)
					{
						cont = 0;
						//calcular nota de escala
						for(var m = j; m < 7; m++)
						{
							cont += escalas[pentagrama.sentimiento][m];
						}
						posiblesEscalas.push((cont + indices[i])%12);
						
						break;
						
					}
					cont = 0;
				}
				else if(cont > semitonos[i][indiceTemp])
				{
					break;
				}			
			}
		}
		
	}
	
	posiblesEscalasTotales.push(posiblesEscalas);
	for(var i = 0; i < 12; i++)
	{
		notasUsadas[i] = false;
	}
}

var escalasEscogidas = new Array();
for(var i = 0; i < posiblesEscalasTotales.length; i++)
{
	escalasEscogidas.push(-1);	
}

var archivoEscalas = [
	posiblesEscalasTotales,
	escalasEscogidas
];

const fse = require('fs-extra')
fse.writeJson('./arrayPentagrama.json', pentagrama)
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

fse.writeJson('./arrayAcordes.json', archivoEscalas)
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})



/*****************Escalas elejidas*********************/
//sU PUTA MADRE, NI IDEA


/*var escalasEscojidas = [1,2,2,4];


var ritmos = [
				[
					[1,4,1,2,1,2,1,4]
				],
				[
					[4,2,4,2,4]
				],
				[
					[4,4,4,4]
				]
			];
var acordes = new Array();
for(var i = 0;i < escalasEscojidas.length;i++)
{
	acordes.push(new Array());
	acordes[i].push( [ escalasEscojidas[i]		,(escalasEscojidas[i]+4)%12	,(escalasEscojidas[i]+7 )%12]	);//PRIMERA
	acordes[i].push( [(escalasEscojidas[i]+2)%12,(escalasEscojidas[i]+7)%12	,(escalasEscojidas[i]+11)%12]	);//QUINTA
	acordes[i].push( [ escalasEscojidas[i]		,(escalasEscojidas[i]+4)%12	,(escalasEscojidas[i]+9 )%12]	);//SEXTA
	acordes[i].push( [ escalasEscojidas[i]		,(escalasEscojidas[i]+5)%12	,(escalasEscojidas[i]+9 )%12]	);//CUARTA
}

var ritmo = new Array();

var respuesta = {
	tempo: pentagrama.tempo,
	sentimiento: pentagrama.sentimiento,
	melodia: new Array()
};

ritmo = ritmos[pentagrama.velocidad][	Math.floor((Math.random() * (ritmos[pentagrama.velocidad].length-1)) + 0)	];
if(pentagrama.velocidad==0)
{
	for(var i = 0; i < ritmo.length; i++)
	{
		respuesta.melodia.push([acordes[pentagrama.sentimiento][i%4],ritmo[i]]);
	}	
}
else
{
	var ii = 0;
	var limit = ritmo.length/4;
	var iChords = 0;
	for(var i = 0; i < ritmo.length; i++)
	{
		respuesta.melodia.push([acordes[pentagrama.sentimiento][iChords],ritmo[i]]);
		ii++;
		if(ii>limit)
		{
			ii=0;
			iChords++;
		}
	}	
}


//A C O P L A M I E N T O     A      L I B R E R I A      M I D I

melodiaMidi = new Array();
for(var i = 0; i < respuesta.melodia; i++){
	respuesta.melodia[i][]
}
*/






/*for(var i = 0;i < posiblesEscalas.length;i++){
	switch(posiblesEscalas[i]){
		case 0:
			console.log("C");
			break;
		case 1:
			console.log("C#");
			break;
		case 2:
			console.log("D");
			break;
		case 3:
			console.log("D#");
			break;
		case 4:
			console.log("E");
			break;
		case 5:
			console.log("F");
			break;
		case 6:
			console.log("F#");
			break;
		case 7:
			console.log("G");
			break;
		case 8:
			console.log("G#");
			break;
		case 9:
			console.log("A");
			break;
		case 10:
			console.log("A#");
			break;
		case 11:
			console.log("B");
			break;
	}
}*/







function copiaNotasBase(notas)
{
	var aux = new Array(12);
	for(var i = 0; i < 12; i++)
	{
		aux[i] = notas[i];		
	}
	
	return aux;
	
} 

//Para pruebas
function imprimeNotas(notas)
{
	console.log("NOTAS:");
	console.log("C:  "+notas[0]);
	console.log("C#: "+notas[1]);
	console.log("D:  "+notas[2]);
	console.log("D#: "+notas[3]);
	console.log("E:  "+notas[4]);
	console.log("F:  "+notas[5]);
	console.log("F#: "+notas[6]);
	console.log("G:  "+notas[7]);
	console.log("G#: "+notas[8]);
	console.log("A:  "+notas[9]);
	console.log("A#: "+notas[10]);
	console.log("B:  "+notas[11]);
}





