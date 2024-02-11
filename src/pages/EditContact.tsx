import React, {  useState } from 'react'
import { ContactInfo } from '../Models/Contact'

type Props={
  data:ContactInfo,
  onBackbtn: () => void,
  onSubmit:(data:ContactInfo)=> void
}
const EditContact= (props: Props)=> {
  const {data, onBackbtn, onSubmit}=props

  const [firstName, setfirstName] = useState(data.firstName)

  const handleFirstName = (e: any) => {
    setfirstName(e.target.value);
    console.log(e.target.value)
  };
  const [lastName, setlastName] = useState(data.lastName)

  const handleLastName = (e: any) => {
    setlastName(e.target.value);
    console.log(e.target.value)
  };

  const [currentRadioValue, setCurrentRadioValue] = useState(data.Status)

  const handleRadioChange = (e: any) => {
    setCurrentRadioValue(e.target.value);
    console.log(e.target.value)
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const updateContact: ContactInfo = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      Status: currentRadioValue
    }
    // handleSubmit(data)
    props.onSubmit(updateContact); 
    onBackbtn()
  }
  return (
    <>
    <div className="container flex justify-center p-4  mt-2"> Create Contact</div>
    <div className='container flex justify-center'>


      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="first name" value={firstName} onChange={handleFirstName} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="last name" value={lastName} onChange={handleLastName} />

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
              Status
            </label>
            <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-radio-1" type="radio" value="Active" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleRadioChange}
                checked={currentRadioValue === 'Active'} />
              <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
              <input id="bordered-radio-1" type="radio" value="Inactive" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleRadioChange}
                checked={currentRadioValue === 'Inactive'} />
              <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
            </div>

          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Update
            </button>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onBackbtn}>
              Back
            </button>

          </div>
        </form>

      </div>
    </div>
    </>
  )
}

export default EditContact