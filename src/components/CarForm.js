import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { changeCar, changeCost } from '../Store/slice/formSlice'
import { addCar } from '../Store/slice/carslice'


export default function CarForm() {
    const dispatch = useDispatch()

    const name = useSelector((state)=> state.form.name)
    const cost = useSelector((state)=> state.form.cost)
    const data = useSelector((state)=> state.car.data)
    // console.log(name)
    // console.log(cost)
    // console.log(data)

    // Function to add data to the data array
    const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(addCar({
        name:name,
        cost:cost
      }))
      console.log(data)
    }


    // Function to changeName and cost
    const handleNameChange = (e)=>{
      dispatch(changeCar(e.target.value))
    };

    const handleCostChange = (e)=>{
      let v = parseInt(e.target.value)
      dispatch(changeCost(v))
    }


  return (
    <div className='car-form panel'>
    <h4 className='subtitle is-3'> Add Car </h4>

    <form onSubmit={handleSubmit}>
      <div className='field-group'>
        <div className='field'>
          <label className='label'>Name</label>
          <input type="text" className='input is-expanded' value={name || ''} onChange={handleNameChange} />

        </div>

        <div className='field'>
          <label className='label'>Cost</label>
          <input type="number" className='input is-expanded' value={cost || ''} onChange={handleCostChange} />

        </div>



      </div>

      <div className='field'>
        <button className='button is-link'>Submit</button>
      </div>



    </form>
    
  </div>
  )
}
