import React from 'react';
import { Link } from 'react-router-dom';




class FolderSideBar extends React.Component{

links = ['/', 'note', 'folder'];



    renderFolders = () =>{
        console.log(this.props.dummyStore.folders[0].name);
        return this.props.dummyStore.folders.map((folder, index) =>(
            <li key={index}>
                <Link to={this.links[index]}><h3 className='leftAlign'>{folder.name}</h3></Link>
            </li>
        ))
    }
    
    
        render(){
    
            return(
        <section className='sideBarSection'>
            <h2>I am the Folder Sidebar</h2>
            <ul>
                {this.renderFolders()}
            </ul>
            <button className='addFolderButton'>Add Folder</button>
        </section>
            )
        }

}

export default FolderSideBar;