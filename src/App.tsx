import { Header } from './cmoponents/Header'
import { Sidebar } from './cmoponents/Sidebar'
import { Video } from './cmoponents/Video'

export function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Video />
        <Sidebar />
      </main>
    </div>
  )
}


