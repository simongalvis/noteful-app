import React from 'react';




class MainMain extends React.Component{



renderNotes = () =>{
    //console.log(this.props.dummyStore.notes[0].name);
    return this.props.dummyStore.notes.map((note, index) =>(
        <li key={index}>
            <h3 className='leftAlign'>{note.name}</h3>
            <p className='leftAlign'>Modified {note.modified}</p>
        </li>
    ))
}

renderImportantNotes = () =>{
    //console.log(this.props.dummyStore.notes[0].name);
    return this.props.dummyStore.notes.filter((note, index) =>(
        <li key={index}>
            <h3 className='leftAlign'>{note.name}</h3>
            <p className='leftAlign'>Modified {note.modified}</p>
        </li>
    ))
}


render(){
    return(
        <section className='contentSection'>
            <h2 >I am the Main Main</h2>
            <ul>
                {this.renderNotes()}
            </ul>
        </section>
    )
}

}

export default MainMain;