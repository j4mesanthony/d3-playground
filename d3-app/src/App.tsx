import './App.css';
import { Button } from './components/controls/Button';
import { InputField } from './components/forms/InputField';
import { SideBarLayout } from './layouts/SideBarLayout';

import { useState } from 'react';

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
  const [disabled, setDisabled] = useState<boolean>(false);
  const label = disabled ? 'Enable' : 'Disable';

  return (
    <>
      <h1 className='text-lg'>D3 Playground</h1>
      <div className='flex flex-col gap-4'>
        <InputField placeholder='Enter text here...' isDisabled={ disabled } />
        <Button label={ label } onClick={ () => setDisabled(!disabled) } />
      </div>
    </>
  )
}

function Main() {
  return (
    <>
      <h1 className='text-lg'>Graph Interaction</h1>
    </>
  )
}

export default App;
