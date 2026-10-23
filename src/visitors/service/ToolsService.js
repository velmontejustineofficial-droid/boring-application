export async function toolService(){
    const response = await fetch('http://localhost:8080/api/test/tools');
    const data = await response.json();

    return data;
}

export async function pagesService(){
    const response = await fetch('http://localhost:8080/api/test/page');
    const data = await response.json();

    return data;
}

export async function categoryService(){
    const response = await fetch('http://localhost:8080/api/test/categories');
    const data = await response.json();

    return data;
}