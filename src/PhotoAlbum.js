import React,{Component} from 'react'

class PhotoAlbum extends Component {
    render (){
        return (
            <div>
            <form>
                <input type="file" onchange="previewFile()"></input>
                <img src="" height="200" alt="pics"/>
            </form>
            </div>    
        )
        }
}

export default PhotoAlbum;