import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import'./dummy-store';
import dummyStore from './dummy-store';

//import components
import MainMain from './Main/MainMain';
import FolderMain from './Main/FolderMain';
import NoteMain from './Main/NoteMain';
import MainSidebar from './Sidebar/MainSidebar';
import FolderSidebar from './Sidebar/FolderSidebar';
import NoteSidebar from './Sidebar/NoteSidebar';

class App extends React.Component {

    //filtered arrays
    allNotes = dummyStore.notes.filter(note => note.folderId === 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1' || 'b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1' || 'b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1' );
    importantNotes = dummyStore.notes.filter(note => note.folderId === 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1');
    superNotes = dummyStore.notes.filter(note => note.folderId === 'b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1');
    spangleyNotes = dummyStore.notes.filter(note => note.folderId === 'b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1');
  
  state={
    store: dummyStore,
    folderType: this.importantNotes,
    

  }


  //handleFolderClick = (folderId) =>{
    //this.setState({folderId})
  //}

  selectedFolderChanged = (folderType) =>{
    this.setState({folderType})
  }

  render(){
  return (
    <div className="App">
      <main>
        <header>
          <h1>Noteful</h1>
        </header>

        
          

          
          <Switch>
          <Route exact path='/' render={() => <section className='mainSection'>
                                                <MainSidebar selectedFolderChanged={ this.selectedFolderChanged} dummyStore={this.state.store}/>
                                                <MainMain dummyStore={this.state.store}/>
                                              </section>} />
                                                
          <Route exact path='/folder' render={() => <section className='mainSection'>
                                                      <FolderSidebar dummyStore={this.state.store} />
                                                      <FolderMain dummyStore={this.state.store} folderType={this.state.folderType}/>
                                                    </section>} />

          <Route exact path='/note' render={() => <section className='mainSection'>
                                                    <NoteSidebar dummyStore={this.state.store}/>
                                                    <NoteMain dummyStore={this.state.store}/>
                                                  </section>} />
          
          </Switch>

          
        


      
      </main>
    </div>
  );
  }
}

export default App;
