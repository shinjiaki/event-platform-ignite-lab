import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { Event } from "./pages/Event"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Event />
      <main className="flex flex-1">
        <Video />
        <Sidebar />

      </main>
    </div>
  )
}

export default App
