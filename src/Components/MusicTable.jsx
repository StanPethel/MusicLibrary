import React from 'react';

const MusicTable = (props) => {
    console.log(props);
    let search = props.music.map((music)=>{
        return(
            <tr>
                <td>{music.id}</td>
                <div class="container">
                <td>{music.title}</td>
                </div>
                <td>{music.album}</td>
                <div class="container">
                <td>{music.artist}</td>
                </div>
                <td>{music.genre}</td>
                <div class="container">
                <td>{music.releaseDate}</td>
              </div>
            </tr>
        )
    })
    return(
      <table>
        <tr>
          <th>Song Id</th>
          <div class="container">
          <th>Song Title</th>
          </div>
          <th>Album</th>
          <div class="container">
          <th>Artist</th>
          </div>
          <th>Genre</th>
          <div class="container">
          <th>Release Date</th>
          </div>
         
        </tr>
         {search}
    </table>
    )
};
export default MusicTable;




