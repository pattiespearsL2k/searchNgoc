import React from 'react'
import Filter from '../components/Filter/Filter'
import { Purpose } from '../components/Purpose/Purpose'
import { Service } from '../components/Service/Service'
import { Showroom } from '../components/Showroom/Showroom'

export const Home = () => {
  return (
    <div>
        <Filter/>
        <Purpose/>
        <Service/>
        <Showroom/>
    </div>
  )
}
