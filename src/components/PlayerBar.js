import React, { Component } from 'react';
import "./PlayerBar.css";

class PlayerBar extends Component {
  render() {
    return (
        <section className="player-bar">
        <div className="p-2">
        <section id="buttons" className="m-5">
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-ios-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick}>
             <span className={this.props.isPlaying ? 'ion-ios-pause' : 'ion-ios-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <span className="ion-ios-skip-forward"></span>
           </button>
         </section>

         <section id="time-control" className="m-5">
           <span className="current-time">{this.props.formatTime(this.props.currentTime)}</span>
           <input 
              type="range" 
              className="seek-bar " 
              value={(this.props.currentTime/this.props.duration) || 0} 
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
           <span className="total-time">{this.props.formatTime(this.props.duration)}</span>
         </section>
         </div>
         <section id="volume-control" className="p-2">

           <span className="icon ion-ios-volume-low m-5"></span>

           <input 
              type="range" 
              className="seek-bar" 
              value={this.props.volume}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleVolumeChange}   
           />
           <span className="icon ion-ios-volume-high m-5"></span>
         </section>
        </section>
    )
  }
}

export default PlayerBar;