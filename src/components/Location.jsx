import { IconSearch } from '@tabler/icons-react'
import axios from 'axios'
import React from 'react'

const Location = ({location, setLocation}) => {
const handleSubmit = (e) =>{
    e.preventDefault()
    const idLocation = e.target.idLocation.value

    axios
    .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
}
    return (
    <section className=''>

      <div className='grid justify-center'>
        <img className='' src="/img/top-bg1.png" alt="" />
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 top-16'>
        <img className='' src="/img/top-logo.png" alt="" />
      </div>

        <form onSubmit={handleSubmit} action="" className='grid mt-12 scroll-mb-12 justify-center grid-flow-col'>
        <input className='h-12 w-[100%] border-2 bg-transparent text-center border-green-400' type="number"  name='idLocation' placeholder='Type location id...'/>
        <button type='submit' className='flex bg-green-500 w-[100%] border-2 border-green-400 justify-center gap-2 pt-2'>
            Search <IconSearch />
        </button>
        </form>


        {/*Location info */}
      <div className='border-2 border-green-400 mt-12 text-center w-[100%] max-w-5xl mx-auto py-10'>  
      <h3 className='text-green-600 mt-3 mb-6'>¡Welcome To{location?.name}!</h3>

      <ul className='flex justify-between m-8'>
        <li className='text-slate-500'>Type: {location?.type}</li>
        <li className='text-slate-500'>Dimension: {location?.dimension}</li>
        <li className='text-slate-500'>Population: {location?.residents.length}</li>
      </ul>
      </div>
    </section>
  )
}

export default Location
