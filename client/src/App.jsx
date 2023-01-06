import './App.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import FormModal from './components/FormModal'
import DeleteModal from './components/DeleteModal'

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [update, setUpdate] = useState(false)
  const [updateUser, setUpdateUser] = useState({})
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [userID, setUserID] = useState()

  useEffect(() => {
    fetchAllUsers()
  },[])

  const fetchAllUsers = () => {
    axios.get(`${import.meta.env.VITE_ENDPOINT}/users/getAllUsers`)
    .then(res => setAllUsers(res.data))
    .catch(console.error)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const username = form.elements['username'].value
    const email = form.elements['email'].value
    
    axios({
      method: 'POST',
      url: `${import.meta.env.VITE_ENDPOINT}/users/${update ? "updateUser" : "createUser"}`,
      data: {
        id: update ? updateUser._id : undefined,
        username,
        email
      }
    })
    .then(res => fetchAllUsers())
    .catch(console.error)

    setShowModal(false)
    document.getElementById("form").reset()
  }

  return (
    <div className="App">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">MERN CRUD</h1>
        <button className="py-2 px-4 bg-green-500 rounded-md" onClick={() => {
            setUpdateUser({})
            setShowModal(true)
          }}>Add User</button>
      </div>
      <div className="relative overflow-x-auto my-16">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">
                  Username
              </th>
              <th className="px-6 py-3">
                  Email
              </th>
              <th className="px-6 py-3">
                  Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              allUsers.map((user, i) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={`user-${i}`}>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <button className="py-2 px-4 bg-blue-500 rounded-md text-gray-200" onClick={() => {
                      setUpdateUser(user)
                      setUpdate(true)
                      setShowModal(true)
                    }}>Update</button>
                    <button className="py-2 px-4 ml-2 bg-red-500 rounded-md text-gray-200" onClick={() => {
                      setUserID(user._id)
                      setShowDeleteModal(true)
                      }}>Delete</button>
                  </td>
              </tr>
              ))
            }
          </tbody>
        </table>
        <FormModal update={update} setUpdate={setUpdate} updateUser={updateUser} setUpdateUser={setUpdateUser} showModal={showModal} setShowModal={setShowModal} onSubmit={onSubmit}/>
        <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} id={userID} fetchAllUsers={fetchAllUsers}/>
      </div>
    </div>
  )
}

export default App
