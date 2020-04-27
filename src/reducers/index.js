import { combineReducers } from 'redux'

const songReducers  = () => {

  return [
    { title: 'no scrubs', duration: '4.05'},
    { title: 'macreba', duration: '2.05'},
    { title: 'all stars', duration: '3:15'},
    { title: 'I want it the way', duration: '1:45'}
  ];

};

const selectedSongReducers = (selectedSong = null, action) => {

  if(action.type === "SONG_SELECTED") {
    return action.payload
  }

  return selectedSong

};

export default combineReducers({

  songs: songReducers,
  selectedSong: selectedSongReducers

})