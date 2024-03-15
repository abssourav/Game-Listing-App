import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import useStore from './app/store'

function App() {
  const {theme} = useStore()
  
  return (
    <div className={`${theme} ${theme==='dark' && 'bg-[#121212] min-h-[100vh]'} `}>
      <Header />
      <Home />
    </div>
  )
}

export default App
