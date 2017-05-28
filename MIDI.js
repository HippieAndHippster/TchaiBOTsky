var MidiWriter = require('midi-writer-js');
fs = require('fs');

var track1 = new MidiWriter.Track();
track1.addEvent([
            new MidiWriter.NoteEvent({pitch: ['B4','D4','F4'], duration: '4'}),
            new MidiWriter.NoteEvent({pitch: ['E4','G4','B4'], duration: '4', channel: 2}),
            new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
            new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
            new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
            new MidiWriter.NoteEvent({pitch: ['C4', 'C4', 'C4', 'C4', 'D4', 'D4', 'D4', 'D4'], duration: '8'}),
            new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'})
    ], function(event, index) {
    //return {sequential:true};
    return {sequential:false};
  }
);
var track2 = new MidiWriter.Track();
track2.addEvent([
            new MidiWriter.NoteEvent({pitch: ['E4','G4','B4'], duration: '4', channel: 2}),
            new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4', channel: 2})
    ], function(event, index) {
    //return {sequential:true};
    return {sequential:false};
  }
);
var tracks = [track1,track2];
var write = new MidiWriter.Writer(tracks);
write.saveMIDI("temp");

//Vex Flow

//console.log(write.dataUri());
