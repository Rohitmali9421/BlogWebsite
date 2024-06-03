import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './Appwrite/Auth'
import { useEffect } from 'react'
import { login, logout } from './store/authslice'
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  if (!loading) {
    return (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400 ">
        <div className='w-full block'>
          <Header />
          <main>
            {/* <Outlet/> */}
          </main>
          <Footer />
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
    )
  }
}

export default App
