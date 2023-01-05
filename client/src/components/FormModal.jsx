import React from 'react'

const FormModal = ({ update, setShowModal, setUpdate, setUpdateUser, showModal, updateUser, onSubmit }) => {
  return (
    <div className={`fixed inset-0 flex justify-center items-center bg-gray-900 transition duration-250 ${showModal ? "bg-opacity-50 pointer-events-all" : "bg-opacity-0 pointer-events-none"}`} onClick={(e) => {
      if(e.target !== e.currentTarget) return
      setShowModal(false)
      setUpdate(false)
      setUpdateUser({})
      document.getElementById("form").reset()
    }}>
    <div className={`bg-gray-800 p-6 rounded-lg transform transition duration-250 ${showModal ? "scale-1" : "scale-0"}`}>
      <h2 className="text-center mb-6 text-3xl">{update ? "Update User" : "Create User"}</h2>
      <form onSubmit={onSubmit} id="form">
        <div className="mb-6">
          <input type="text" defaultValue={update ? updateUser.username : ""} className="w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white rounded-lg" name="username" placeholder="Username" required/>
        </div>
        <div className="mb-6">
          <input type="email" defaultValue={update ? updateUser.email : ""} className="w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white rounded-lg" name="email" placeholder="Email" required/>
        </div>
        <button type="submit" className="text-white bg-blue-500 rounded-lg px-5 py-2.5 w-full">{update ? "Update" : "Create"}</button>
      </form>
    </div>
  </div>
  )
}

export default FormModal