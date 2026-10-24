import { useEffect, useMemo, useState } from "react";
import { toolService } from "../service/ToolsService";



function useInitializetools(){
    const [tools, setTools] = useState([]);

    useEffect(() => {
        async function fetchTools() {
            const toolsData = await toolService();
            setTools(toolsData)
        }
        fetchTools();
    }, []);
    return tools;
}


export function useToolsHooks() {
    const[search, setSearch ] = useState("");
    const[activeCategory, setActiveCategory] = useState('All Tools');

    const allTools = useInitializetools();
    
    const filteredTools = useMemo(() => {
        return allTools.filter((tool) => {
            const matchesSearch = tool.name
                ?.toLowerCase()
                .includes(search.toLowerCase());

            const matchesCategory =
                activeCategory === 'All Tools' ||
                tool.category === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [allTools, search, activeCategory]);

    const allCategory = [
        'All Tools',
        'Web App',
        'Desktop App',
        'Mobile App',
        'Developer Tools',
        'Libraries',
        'APIs',
        'CLI Tools',
        'Games',
        'AI & Machine Learning',
        'Open Source',
        'UI Components',
        'Templates',
        'Extensions',
        'Automation Tools',
        'Database Tools',
        'Security Tools',
        'Productivity Tools',
        'Educational Tools',
        'Other',
    ];
    

    return {filteredTools, setSearch, search,  setActiveCategory, activeCategory, allCategory};
}
