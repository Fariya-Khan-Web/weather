import './App.css'
import WeatherBoard from './components/Dashboard/WeatherBoard'
import Header from './components/Header/Header'


function App() {


  return (
    <div class="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
      <Header />

      <main>

        <WeatherBoard />

      </main>

    </div>
  )
}

export default App
