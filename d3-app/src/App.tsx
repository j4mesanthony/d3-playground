import './App.css';
import { SideBarLayout } from './layouts/SideBarLayout';

function App() {

  return (
    <>
      <SideBarLayout 
        side={ <Menu /> } 
        main={ <Main /> } />
    </>
  )
}

function Menu() {
  return <h1 className='text-lg'>D3 Playground</h1>
}

function Main() {
  return <h1 className='text-lg'>Graph Interaction</h1>
}

export default App;
