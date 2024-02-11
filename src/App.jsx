import { useEffect, useState } from 'react'
import './App.css'
import Card1 from './components/Card1'
import axios from 'axios'
import Card2 from './components/Card2'

function App() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [card,setCard] = useState('Card2')

  const getData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      setUserData(data.results[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getData()
    setLoading(false)
  }, [])
  return (
    <div className='h-[100dvh] w-screen flex flex-col items-center'>
      <p className='text-center text-6xl my-14 font-black'>Display Card</p>
      <div className='flex gap-5'>
        <button 
        onClick={()=>setCard("Card1")}
        className='px-3 py-2 bg-blue-900 rounded-lg text-white font-light text-xl'> Type 1</button>
        <button 
        onClick={()=>setCard("Card2")}
        className='px-3 py-2 bg-blue-900 rounded-lg text-white font-light text-xl'> Type 2</button>
      </div>
      <div className='mt-10 flex items-center justify-center'>
        {
          card=='Card1'
          ? <Card1 userData={userData} loading={loading}/>
          : <Card2 userData={userData} loading={loading}/>
        }
        
      </div>
    </div>
  )
}

export default App
