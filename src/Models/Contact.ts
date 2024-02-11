// import { createSlice } from "@reduxjs/toolkit"

export interface ContactInfo{
    id:string,
    firstName: string,
    lastName :string,
    Status: string
}

export const dummyContactlist : ContactInfo[]=[
//     {
//     id: new Date().toJSON().toString(),
//     firstName: 'dummy1',
//     lastName :'dummy11',
//     Status: 'Active'
// }
]

//  export const ContactSlice= createSlice({
 
//     firstName: "person",
//     lastName :"personLastname",
//     isActive: true
// })

export enum ContactEnum{
list,
create,
edit
}