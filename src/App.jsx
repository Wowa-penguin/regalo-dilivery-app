import { useState, useEffect } from 'react'
import reykjavík from './constants/index.js'
import './App.css'

const App = () => {
  const [prufa, setprufa] = useState(reykjavík);
  const [obj, setobj] = useState({
    id: reykjavík.id,
    nafn: reykjavík.nafn,
    himilisfang: reykjavík.himilisfang,
    bæjarfélagsnúmer: reykjavík.bæjarfélagsnúmer,
  });
  const [bæjarfélafg, setBæjarfélafg] = useState('');
  const nyttArray = [
    {
      id: 3,
      nafn: 'Harpa',
      himilisfang: 'Austurbakka',
      bæjarfélagsnúmer: 101,
    },
    {
      id: 4,
      nafn: 'Laugardalslaug',
      himilisfang: 'Sundlaugarvegur',
      bæjarfélagsnúmer: 101,
    }
  ]

  const handleclick = (staður,) => {
    const newObj = [...prufa, {
      id: prufa.id,
      nafn: prufa.nafn,
      himilisfang: obj.himilisfang,
      bæjarfélagsnúmer: obj.bæjarfélagsnúmer,
      valið: true,
    }]
    setobj(newObj);
    console.log(obj);
    console.log(newObj);
    console.log(staður);
  }

  useEffect(() => {
    console.log(bæjarfélafg);
    if (bæjarfélafg === 'eb') {
      setprufa(nyttArray);
    }
  }, [bæjarfélafg])

  return (
    <div>
      <div className='drop-menu'>
        <div className="dropdown">
          <div>Flokun</div>
          <div className="dropdown-content">
            <button className='dropdown-button-BF' onClick={() => setBæjarfélafg('eb')}>Efribigð</button>
            <button className='dropdown-button-BF' onClick={() => setBæjarfélafg('rk')}>Reykjavík</button>
            <button className='dropdown-button-BF' onClick={() => setBæjarfélafg('kv')}>Kópavögur</button>
            <button className='dropdown-button-BF' onClick={() => setBæjarfélafg('gb')}>Garðarbær</button>
            <button className='dropdown-button-BF' onClick={() => setBæjarfélafg('hf')}>Hafnarfjörður</button>
          </div>
        </div>
        <div className="dropdown">
          <div>Flokun</div>
          <div className="dropdown-content">
            <div></div>
            <div></div>
          </div>
        </div>
        <div>Staðir valdir</div>
      </div>
      <div className='Navbar'>
        <button onClick={() => console.log(reykjavík)}>Hér</button>
        {prufa.map((staður) => (
          <div className='staðir-div' key={staður.id}>
            <p onClick={() => handleclick(staður.id)} className='item-a'>{staður.nafn}</p>
            <p className='item-b'>{staður.himilisfang}</p>
            <p className='item-c'>{staður.bæjarfélagsnúmer}</p>
          </div>
        ))}
      </div>
    </div >
  )
}

export default App
