import { useState, useEffect } from 'react'
import reykjavík from './constants/index.js'
import './App.css'

const App = () => {
  const [array, setArray] = useState(reykjavík);
  const [bæjarfélafg, setBæjarfélafg] = useState('');
  const nyttArray = [
    {
      id: 3,
      nafn: 'Harpa',
      himilisfang: 'Austurbakka',
      bæjarfélagsnúmer: 101,
      valið: false,
    },
    {
      id: 4,
      nafn: 'Laugardalslaug',
      himilisfang: 'Sundlaugarvegur',
      bæjarfélagsnúmer: 101,
      valið: false,
    }
  ]

  const handleclick = () => {
    const nyttOBJ = {
      id: 5,
      nafn: 'Kringlan',
      himilisfang: 'Kringlumýrarbraut',
      bæjarfélagsnúmer: 103,
    }
    setArray([...array, nyttOBJ])
    console.log(array);
  }

  const handleEyða = (id) => {
    const nyttArray = array.filter((staður) => staður.id !== id);
    setArray(nyttArray);

    console.log(id)
  }

  const handleVal = (id) => {
    setArray(array.map(ary => {
      if (ary.id === id) {
        return { ...ary, valið: true }
      } else {
        return ary
      }
    }))
  }

  const handleSort = () => {
    const sortedArray = [...array].sort((a, b) => b.valið - a.valið);
    setArray(sortedArray);
  }

  useEffect(() => {
    console.log(bæjarfélafg);
    if (bæjarfélafg === 'eb') {
      setArray(nyttArray);
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
        <button onClick={handleSort}>Sort</button>
        <button onClick={handleclick}>Hér</button>
        {array.map((staður) => (
          <div className='staðir-div' key={staður.id}>
            <p onClick={() => handleVal(staður.id)} className='item-a'>{staður.nafn}</p>
            <p className='item-b'>{staður.himilisfang}</p>
            <p className='item-c'>{staður.bæjarfélagsnúmer}</p>
            <button onClick={() => handleEyða(staður.id)}>Eyða</button>
          </div>
        ))}
      </div>
    </div >
  )
}

export default App
