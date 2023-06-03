import { Header } from './cmoponents/Header'
import { Sidebar } from './cmoponents/Sidebar'
import { Video } from './cmoponents/Video'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'

export function App() {
  return (
    <ApolloProvider client={client}>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Video />
        <Sidebar />
      </main>
    </div>
    </ApolloProvider>
  )
}


