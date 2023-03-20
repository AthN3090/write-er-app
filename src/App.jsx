import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import NewPost from './pages/NewPost'
import Post from './pages/Post'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import Filter from './pages/Filter'

function App() {
  return (
    <div className="App bg-gray-100">
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new-post' element={<NewPost />} />
        <Route  path='/post/:id' element={<Post />} />    
        <Route  path='/edit/:id' element={<EditPost />} />
        {/* <Route  path='/profile/:id' element={<Profile />} /> */}
        <Route  path='/filter/:topic' element={<Filter />} />      
      </Routes>
    </div>
  )
}

export const baseAPI = 'https://writer-api.cyclic.app'
export default App
