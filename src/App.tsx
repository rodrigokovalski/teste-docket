import "./styles/global.scss"

import { PageContent } from "./components/PageContent"

import { ToastContainer } from 'react-toastify';

import Logo from '../src/assets/logo.svg'

function App() {

  return (
    <div id="page">
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Docket" />
          </div>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="container">
          <PageContent />
        </div>
      </div>

      <footer>
        <div className="container">
          <p>Docket © 2021</p>
        </div>
      </footer>
    </div>
  )
}

export default App
