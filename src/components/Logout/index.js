// Write your code here

const Logout = props => {
  const {logout} = props

  return (
    <button type="button" className="logout-button" onClick={logout}>
      Login
    </button>
  )
}

export default Logout
