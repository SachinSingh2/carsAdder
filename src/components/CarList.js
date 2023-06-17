import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../Store'

export default function CarList() {
    // const data = useSelector((state)=> state.car.data)
    const dispatch = useDispatch()

    const {car , name } = useSelector(({form , car : {data , searchTerm}})=>{
        const filterCars = data.filter((data)=>{
           return  data.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        return{
            car:filterCars,
            name:form.name
        }
    })

    console.log(name)

// Creating a handle to delete the data
    const handleOnDelete = (data)=>{
        dispatch(removeCar(data.id))
    }

    // Maping over the data and rendering it .
    const renderCar = car.map((MapData)=>{

        const bold = name && MapData.name.toLowerCase().includes(name.toLowerCase())
        return(
            <div className={`panel ${bold && 'bold'}`} key={MapData.id}>

                <p>{MapData.name} - ${MapData.cost}</p>
                <button className="button is-danger" onClick={()=>{handleOnDelete(MapData)}}>
                    Delete
                </button >

            </div>
        )

    })
  return (
    <div className='car-list'>
        {renderCar}
        <hr />
      
    </div>
  )
}
