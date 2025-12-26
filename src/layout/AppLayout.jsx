import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <main className="grow">
          <Outlet />
        </main>
    </div>
  )
}

export default AppLayout
