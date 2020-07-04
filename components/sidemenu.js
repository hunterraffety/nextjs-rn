const SideMenu = ({ count }) => {
  return (
    <div className="sideMenuContainer">
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">
          Category 1
        </a>
        <a href="#" className="list-group-item">
          Category 2
        </a>
        <a href="#" className="list-group-item">
          Category 3
        </a>
      </div>
      <div className="countContainer">
        <h1>{count}</h1>
      </div>
    </div>
  )
}

export default SideMenu
