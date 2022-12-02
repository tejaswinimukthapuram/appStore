// Write your code here

import './index.css'

const TabItem = props => {
  const {tab, updateAppList} = props

  const {tabId} = tab

  const onTabClick = () => {
    console.log(tabId)
    updateAppList(tabId)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onTabClick}>
        {tab.displayText}
      </button>
    </li>
  )
}

export default TabItem
