import React from 'react';
import { Link } from 'react-router-dom';




class MainSideBar extends React.Component{

    links = ['/', 'note', 'folder'];
    folderClasses=['important', 'super', 'spangley'];
    allNotes = this.props.dummyStore.notes.filter(note => note.folderId === 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1' || 'b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1' || 'b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1' );
    importantNotes = this.props.dummyStore.notes.filter(note => note.folderId === 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1');
    superNotes = this.props.dummyStore.notes.filter(note => note.folderId === 'b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1');
    spangleyNotes = this.props.dummyStore.notes.filter(note => note.folderId === 'b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1');
    statefulFolders = [this.allNotes, this.importantNotes, this.superNotes, this.superNotes]
renderFolders = () =>{
    //.console.log(this.props.dummyStore.folders[0].name);
    return this.props.dummyStore.folders.map((folder, index) =>(
        <li key={index} className={this.folderClasses[index]}>
            <Link  id={this.props.dummyStore.folders[index]}
                   to={this.links[index]}
                   onClick={this.props.selectedFolderChanged}
                   ><h3 className='leftAlign'>{folder.name}</h3></Link>
        </li>
    ))
}


    render(){

        return(
    <section className='sideBarSection'>
        <h2>I am the Main Sidebar</h2>
        <ul>
            {this.renderFolders()}
        </ul>
        <button className='addFolderButton'>Add Folder</button>
    </section>
        )
    }

}

export default MainSideBar;