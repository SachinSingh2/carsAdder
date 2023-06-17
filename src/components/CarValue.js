import React from 'react'
import { useSelector } from 'react-redux'

export default function CarValue() {
    // const data = useSelector((state)=>state.car.data)
    // const searchTerm = useSelector((state)=> state.car.searchTerm)

    const totalCost = useSelector(({car:{data , searchTerm}})=>{

        const filterdCars = data.filter((data)=>{
            return data.name.toLowerCase().includes(searchTerm.toLowerCase())
        })

        return filterdCars.reduce((acc , data)=>{

            return acc + data.cost

        } , 0)

    })

  return (
    <div className='car-value'>
      Total Cost : ${totalCost}
    </div>
  )
}
