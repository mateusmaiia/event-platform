import { Header } from './cmoponents/Header'
import { Sidebar } from './cmoponents/Sidebar'
import { Video } from './cmoponents/Video'

export function App() {
  return (<>
    <Header />
    <main className='flex '>
      <Video />
      <Sidebar />
    </main>
  </>
  )
}


