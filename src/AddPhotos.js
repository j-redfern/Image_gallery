import React, {Component} from 'react'
import './AddPhotos.css'

class AddPhotos extends Component {
    
    render (){
    return (
        <div>
        <form className = "category">
            <h3>Album Name:</h3>
            <input type="text" name="Album Name" value="Album Name"/>
            <h3>Description:</h3>
            <input type="text" name="Description" value="Keyword"/>
         </form>

         <form className = "photo">  
            <h3> Please upload your image below </h3> 
            <input type="file" onClick="previewFile()" />
            <img src="" height="200" alt="pic to go here"/>   
        </form>
        </div>    
    )
    }
}

export default AddPhotos;
