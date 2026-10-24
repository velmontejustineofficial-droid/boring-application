export async function toolService(){
    const response = await fetch('http://localhost:8080/api/tools');
    const data = await response.json();

    return data;
}