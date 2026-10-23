import { useEffect, useMemo, useState } from "react";
import { toolService, categoryService } from "../service/ToolsService";


function useInitializeCategory(){
    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function fetchCategory() {
            const categoryData = await categoryService();
            setCategory(categoryData)
        }
        fetchCategory();
    }, []);
    return category;
}

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
    const allCategory = useInitializeCategory();
    
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
    

    return {filteredTools, setSearch, search,  setActiveCategory, activeCategory, allCategory};
}
