import React from 'react';


class FolderMain extends React.Component{


    
    

    renderImportantNotes = (folderType) =>{
        console.log(folderType);
        return folderType.map((note, index) =>(

        
            
            
            <li key={index} >
                <h3 className='leftAlign'>{note.name}</h3>
                <p className='leftAlign'>Modified {note.modified}</p>
            </li>
            
        ))
    }




render(){
    
    return(
        <section className='contentSection'>
            <h2>I am the Folder Main</h2>
            <ul>
                {this.renderImportantNotes(this.props.folderType)}
            </ul>
        </section>
    )
}

}

export default FolderMain;