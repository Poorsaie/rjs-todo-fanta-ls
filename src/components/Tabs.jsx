export function Tabs (data) {
    const { tasks , activeTab , setActiveTab } = data
    const tabs = ['All' , 'Open' , 'Complete']

    return (
        <nav className = "tab-container">
            {
                tabs.map ((tab , tabIndex) => {
                        const isActive = activeTab === tab
                        const tasksCount = tasks.filter(task => {
                            if (tab === "All") return true
                            return tab === "Open" ? !task.complete : task.complete
                }).length
                                
                    return (
                        <button 
                            className = {"tab-button " + (isActive ? " tab-selected" : " ")} 
                            onClick = { () => setActiveTab(tab) } 
                            key = { tabIndex }
                        >
                            { tab } <span> ({ tasksCount }) </span>
                        </button>
                    )

                })
            }
            <hr/>
        </nav>
    )
}