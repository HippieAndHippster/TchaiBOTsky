//Se lee sentimiento, tempo, escalasPosibles, escalasEscogidas, melodiaUsuario

const fse = require('fs-extra')

const pentagrama = fse.readJsonSync('./arrayPentagrama.json')

//console.log(pentagrama);


const archivoEscalas = fse.readJsonSync('./arrayAcordes.json')

//console.log(archivoEscalas);

var escalasPosibles = archivoEscalas[0];
var escalasEscogidas = archivoEscalas[1];

for(var i = 0; i < escalasEscogidas.length; i++)
{
	escalasEscogidas[i] = (escalasEscogidas[i]+1)%(escalasPosibles[i].length);
}


/*var escalasEscogidas = [1,2,2,4];*/

/*var pentagrama = {
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
};*/
/*********************	Acordes	*********************/

var ritmos = [
				[//[0]Rapido
					[1,4,1,2,1,2,1,4]
				],
				[//[1]Medio
					[4,2,4,2,4]
				],
				[//[2]Lento
					[4,4,4,4]
				]
			];
var acordes = new Array();
//Crea acordes con las escalas escogidas
for(var i = 0;i < escalasEscogidas.length;i++)
{
	acordes.push(new Array());
	acordes[i].push( [ escalasEscogidas[i]		,(escalasEscogidas[i]+4)%12	,(escalasEscogidas[i]+7 )%12]	);//PRIMERA
	acordes[i].push( [(escalasEscogidas[i]+2)%12,(escalasEscogidas[i]+7)%12	,(escalasEscogidas[i]+11)%12]	);//QUINTA
	acordes[i].push( [ escalasEscogidas[i]		,(escalasEscogidas[i]+4)%12	,(escalasEscogidas[i]+9 )%12]	);//SEXTA
	acordes[i].push( [ escalasEscogidas[i]		,(escalasEscogidas[i]+5)%12	,(escalasEscogidas[i]+9 )%12]	);//CUARTA
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
//Melodia compuesta para midi

for(var i = 0; i < respuesta.melodia.length; i++)
{
	for(var j = 0; j < 3; j++)
	{
		switch(respuesta.melodia[i][0][j]) {
	    case 0:
	        respuesta.melodia[i][0][j] = "C4";
	        break;
	    case 1:
	        respuesta.melodia[i][0][j] = "C#4";
	        break;
	    case 2:
	        respuesta.melodia[i][0][j] = "D4";
	        break;
	    case 3:
	        respuesta.melodia[i][0][j] = "D#4";
	        break;
	    case 4:
	        respuesta.melodia[i][0][j] = "E4";
	        break;
	    case 5:
	        respuesta.melodia[i][0][j] = "F4";
	        break;
	    case 6:
	        respuesta.melodia[i][0][j] = "F#4";
	        break;
	    case 7:
	        respuesta.melodia[i][0][j] = "G4";
	        break;
	    case 8:
	        respuesta.melodia[i][0][j] = "G#4";
	        break;
	    case 9:
	        respuesta.melodia[i][0][j] = "A4";
	        break;
	    case 10:
	        respuesta.melodia[i][0][j] = "A#4";
	        break;
	    case 11:
	        respuesta.melodia[i][0][j] = "B4";
	        break;  
	    }
		
	}
	
	respuesta.melodia[i][1] = 16/respuesta.melodia[i][1];	
}

for(var i = 0; i < respuesta.melodia.length; i++)
{
	pentagrama.melodia[i][0] += "4";
	pentagrama.melodia[i][1] = 16/pentagrama.melodia[i][1];	
}

/*		MIDI INADOR		*/


var MidiWriter = require('midi-writer-js');
fs = require('fs');
var notes = new Array();
for(var i = 0; i < pentagrama.melodia.lenght;i++){
	notes.push(new MidiWriter.NoteEvent({pitch: pentagrama.melodia[i][0] , duration: pentagrama.melodia[i][1]}));
}

var track1 = new MidiWriter.Track();
track1.addEvent([
            notes
    ], function(event, index) {
    //return {sequential:true};
    return {sequential:false};
  }
);
var track2 = new MidiWriter.Track();
notes = new Array();
for(var i = 0; i < pentagrama.melodia.lenght;i++){
	notes.push(new MidiWriter.NoteEvent({pitch: respuesta.melodia[i][0] , duration: respuesta.melodia[i][1]}));
}
track2.addEvent([
            notes
    ], function(event, index) {
    //return {sequential:true};
    return {sequential:false};
  }
);
var tracks = [track1,track2];
var write = new MidiWriter.Writer(tracks);
write.saveMIDI("temp");




/*******************************************	funciones	*******************************************/















