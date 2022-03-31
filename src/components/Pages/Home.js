import React from 'react'
import Filter from '../Filter/Filter'
import { Purpose } from '../Purpose/Purpose'
import { Service } from '../Service/Service'
import { Showroom } from '../Showroom/Showroom'

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
