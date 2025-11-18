import {RouterProvider } from 'react-router/dom'
import {router} from './route.ts'
function App() {

  return (
  <>
  <RouterProvider router={router}></RouterProvider>
    
  </>
  )
}

export default App
