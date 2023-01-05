import React from 'react'
import axios from "axios"

const DeleteModal = ({ setShowDeleteModal, showDeleteModal, id, fetchAllUsers }) => {

  const onDeleteUser = () => {
    console.log(id)
    axios({
      method: 'POST',
      url: `http://localhost:3001/users/deleteUser`,
      data: {
        id
      }
    })
    .then(res => fetchAllUsers())
    .catch(console.error)
    setShowDeleteModal(false)
  }

  return (
    <div className={`fixed inset-0 flex justify-center items-center bg-gray-900 transition duration-250 ${showDeleteModal ? "bg-opacity-50 pointer-events-all" : "bg-opacity-0 pointer-events-none"}`}>
    <div className={`my-6 bg-gray-800 p-8 rounded-lg transform transition duration-250 ${showDeleteModal ? "scale-1" : "scale-0"}`}>
      <p className="text-xl">Are you sure you want to delete this user?</p>
      <div className="flex justify-center mt-4">
        <button onClick={() => setShowDeleteModal(false)} className="mr-4 bg-gray-600 rounded-md p-2 px-4">Cancel</button>
        <button className="bg-red-600 rounded-md p-2 px-4" onClick={() => onDeleteUser()}>Delete</button>
      </div>
    </div>
  </div>
  )
}

export default DeleteModal