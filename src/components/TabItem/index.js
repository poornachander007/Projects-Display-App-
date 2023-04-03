import './index.css'

const TabItem = props => {
  const {tabDetails, onChange, isActive} = props
  //   const {category} = tabDetails
  const {displayText, tabId} = tabDetails

  const activeTabClass = isActive ? 'active-tab-btn' : ''

  const change = () => {
    onChange(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        onClick={change}
        type="button"
        className={`tab-btn ${activeTabClass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
