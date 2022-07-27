import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className="header">
      <div className="header-text">Feedback UI</div>
      <div className="help-btn"><Link to="/about"><img src="../../public/help.png" alt="help"/></Link></div>
    </header>
  )
}

export default Header