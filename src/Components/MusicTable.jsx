import React from 'react';

const MusicTable =(props) => {
    console.log(props);
    let renderedMusic = props.music.map(music=>{
        return(
            <tr>
                <td>{music.title}</td>
                <td>{music.album}</td>
                <td>{music.artist}</td>
                <td>{music.genre}</td>
                <td>{music.releaseDate}</td>
            </tr>
        )
    })
    return(
      <table>
        <tr>
          <th>Song Title</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
         {renderedMusic}
    </table>
    )
};
export default MusicTable;
