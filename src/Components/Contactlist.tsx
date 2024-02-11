import React from 'react'
import { ContactInfo } from '../Models/Contact'
import Contact from '../pages/Contact'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link, Outlet, useNavigate } from 'react-router-dom'


type Props={
  list : ContactInfo[]
 handleDelete:(data:ContactInfo)=> void
 handleEdit:(data:ContactInfo)=> void
}

const Contactlist =(props: Props)=> {
  const {list, handleDelete , handleEdit} =props;
  

  // const navigate = useNavigate(); // Hook for handling navigation

  // const handleEditClick = (contactId: string) => {
  //   console.log(contactId);

  //   navigate(`/contact/edit-contact/${contactId}`);
  // };
  return (
  <>
      <div className="m-4">
        <div className="container mt-4 mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  {list.length === 0 ? (
                    <p className="text-center text-lg text-gray-500 py-4">No Contact found. <br />
                    Please add contact from Create contact button</p>
                  ) : (
                    <table className="min-w-full text-center text-sm font-light">
                      <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                        <tr>
                          <th scope="col" className=" px-6 py-4">
                            First Name
                          </th>
                          <th scope="col" className=" px-6 py-4">
                            Last Name
                          </th>
                          <th scope="col" className=" px-6 py-4">
                            Status
                          </th>
                          <th scope="col" className=" px-6 py-4">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {list.map((Contact) => {
                          return (
                            <tr className="border-b dark:border-neutral-500" key={Contact.id}>
                              <td className="whitespace-nowrap  px-6 py-4">{`${Contact.firstName}`}</td>
                              <td className="whitespace-nowrap  px-6 py-4">{`${Contact.lastName}`}</td>
                              <td className="whitespace-nowrap  px-6 py-4">{`${Contact.Status}`}</td>
                              <td className="whitespace-nowrap  px-6 py-4">
                                <div>
                                  {/* <Link to="edit-contact"> */}
                                    <button type="button" className="btn" value="edit" onClick={() => handleEdit(Contact)}>
                                      <BiEdit />
                                    </button>
                                  {/* </Link> */}
                                  <button
                                    type="button"
                                    className="btn"
                                    value="delete"
                                    onClick={() => handleDelete(Contact)}
                                  >
                                    <AiOutlineDelete />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactlist