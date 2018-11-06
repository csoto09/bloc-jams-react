import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import "./Library.css";


class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };    
  }

  render() {
    return (
      <section className="library">
        <h1>Albums</h1>
        <table className="table">
          <tbody> 
            {this.state.albums.map( (album, index) =>
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td><Link to={`/album/${album.slug}`}><img src={album.albumCover} alt={album.title} className="album"/></Link></td>
                <td><Link to={`/album/${album.slug}`}><div>{album.title}</div></Link></td>
                <td><Link to={`/album/${album.slug}`}><div>{album.artist}</div></Link></td>
                <td><Link to={`/album/${album.slug}`}><div>{album.songs.length} songs</div></Link></td>
              </tr>)
            }
          </tbody>
        </table>
      </section>
    );
  }
}


export default Library;