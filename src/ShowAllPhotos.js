import React , {Component} from 'react';


class ShowAllPhoto extends Component {
    render (){
        return (
            <div>
            {
                this.props.pics.map(function(pic){
                    console.log(pic.filepath)
                   return(
                    <div>
                    <img src = {pic.filepath} alt = {pic.id} />
                    </div>
                   )
                })
            }
            </div>    
        )
        }
}

export default ShowAllPhoto;