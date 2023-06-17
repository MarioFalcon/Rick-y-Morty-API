import Router from './containers/Router'

function App() {
  return (
    <div className="App">
      <Router onLogin={function (): void {}} onSignup={function (): void {}} />
    </div>
  )
}

export default App
