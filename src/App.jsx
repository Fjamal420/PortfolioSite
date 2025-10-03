import Desktop from './components/Desktop'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Desktop />
      <ThemeToggle />
    </div>
  )
}

export default App
