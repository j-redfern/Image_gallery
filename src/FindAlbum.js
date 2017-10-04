import React , {Component} from 'react'

class FindAlbum extends Component {
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

export default FindAlbum;