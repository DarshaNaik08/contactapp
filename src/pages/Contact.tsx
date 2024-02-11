import React, { FC, useState } from 'react'
import Sidebar from '../Components/Sidebar'
// import { Link, Outlet } from 'react-router-dom'
import { ContactEnum, ContactInfo, dummyContactlist } from '../Models/Contact'
import Contactlist from '../Components/Contactlist'
import CreateContact from './CreateContact'
import EditContact from './EditContact'

const Contact: FC = () => {
  const [contactList, setContactlist] = useState(dummyContactlist as ContactInfo[]);

  const [shownPage, setShownPage] = useState(ContactEnum.list)
  const [editData, setEditData] = useState({} as ContactInfo)

  const onCreateContact=()=>{
setShownPage(ContactEnum.create)
  }

  const showListPage=()=>{
    setShownPage(ContactEnum.list)
  }

  const addContact =(data:ContactInfo)=>{
    setContactlist([...contactList, data])
  }

  const deleteContact=(data: ContactInfo)=>{
    const deleteIndex= contactList.indexOf(data);
    const tempContactlist=[...contactList]
    tempContactlist.splice(deleteIndex, 1);
    setContactlist(tempContactlist)

  }
  const Editcontact=(data: ContactInfo)=>{
    setShownPage(ContactEnum.edit)
setEditData(data)

  }

  const updateData=(data:ContactInfo)=>{
    const filteredData= contactList.filter(x=> x.id===data.id)[0]
    const index= contactList.indexOf(filteredData)
    const tempData=[...contactList]
    tempData[index]=data
    setContactlist(tempData)
  }
  return (

    <>

      <div className='flex'>
 
        <Sidebar />
        <div className="flex flex-col container mx-auto">
          <div className="container flex justify-center bg-zinc-700 text-white p-4 "> Contacts</div>
          {/* <div className="container flex justify-center  p-2 ">  <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Create Contact</button></div> */}
          {shownPage === ContactEnum.list && (
            <>
              <div className="container flex justify-center  p-2 ">  <input type='button' value='Create Contact'  className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={onCreateContact} /></div>
              <Contactlist list={contactList} handleDelete={deleteContact} handleEdit={Editcontact}/>
            
            </>
          )

          }
{shownPage=== ContactEnum.create && (<CreateContact onBackbtn={showListPage} onSubmit={addContact}/>)}
          {/* <Outlet /> */}

          {/* <Link to="edit-contact">
            <button>edit</button></Link> */}

{shownPage=== ContactEnum.edit && (<EditContact data={editData} onBackbtn={showListPage} onSubmit={updateData}/>)}

        </div>
      </div>

    </>
  )
}
export default Contact