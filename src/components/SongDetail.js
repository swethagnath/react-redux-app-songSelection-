import React, { Component } from 'react'
import { connect } from 'react-redux'

const SongDetail = ({song}) => {
  
  

  if(song) {
    return(
      <div>
        <h3>Details for: </h3>
        <p>Title:: {song.title}</p>
      </div>
    )
  }

  return 'select song'
}

const mapStateToProps = state => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
