import {Link} from "react-router"

function Header() {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/doctordashboard">DoctorDashboard</Link>
          </li>
          <li>
            <Link to="/userdashboard">UserDashboard</Link>
          </li>
           <li>
            <Link to="/loginregister">LoginRegister</Link>
          </li>
           <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Header