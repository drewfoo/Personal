const mongoose = require('mongoose');
const Player = require('../models/player');
const Play = require('../models/play');
var ObjectId = mongoose.Schema.Types.ObjectId;

const DetailSchema = new mongoose.Schema({
  section: {
    type: String,
  },
  content: {
    type: String,
  }
});

const PlaybookSchema = new mongoose.Schema({
  name: {
    type: String
  },
  heading: {
    type: String
  },
  summary: {
    type: String
  },
  detail: [DetailSchema],
  plays: [ { type : ObjectId, ref: 'Play' } ]
  // players: [ { type : ObjectId, ref: 'Player'} ]
});

const Detail = mongoose.model('Detail', DetailSchema);
const Playbook = mongoose.model('Playbook', PlaybookSchema);
module.exports = Detail;
module.exports = Playbook;
