export function Tabs(data) {
    const { todos , activeTab , setActiveTab } = data
    const tabs = ["All" , "Open" , "Complete"]

    return (
        <nav className="tab-container">
            {tabs.map((tab, index) => {
                const isActive = activeTab === tab
                const count = todos.filter(todo => {
                    if (tab === "All") return true
                    return tab === "Open" ? !todo.complete : todo.complete
                }).length

                return (
                    <button
                        key={index} 
                        className={"tab-button " + (isActive ? ' tab-selected' : ' ')} 
                        onClick={() => setActiveTab(tab)}
                    >
                        <h4>
                            {tab} <span>({count})</span>
                        </h4>
                        
                    </button>
                )
            })}
            <hr/>
        </nav>
    )
}