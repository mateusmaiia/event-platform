import { useParams } from 'react-router-dom'
import { Header } from '../cmoponents/Header'
import { Sidebar } from '../cmoponents/Sidebar'
import { Video } from '../cmoponents/Video'

export function Event() {
  const { slug} = useParams<{ slug: string}>()

    return ( 
        <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug
          ? <Video lessonSlug={slug}/>
          : <div className='flex-1'></div>
        }
        <Sidebar />
      </main>
    </div>
    )
}