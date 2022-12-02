// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props

  return (
    <li className="app-item-container">
      <img
        src={appDetails.imageUrl}
        alt={appDetails.appName}
        className="app-icon"
      />
      <p>{appDetails.appName}</p>
    </li>
  )
}

export default AppItem
