

export const getHero = async ( name ) => {
    const url = `http://127.0.0.1:8000/Heros/${name}`;
    //const url = `https://8kx77sc2-3000.brs.devtunnels.ms/Heros/${name}`; // URL entre comillas
    
    try {
        const resp = await fetch(url); // Espera a que se resuelva la promesa de fetch
        if (!resp.ok) {
            throw new Error('Error en la solicitud HTTP: ' + resp.status);
        }
        const data = await resp.json(); // Espera a que se resuelva la promesa de json()
         
        //console.log(data)
        //const hero_data = data[0]; // Acceder al primer elemento del primer arreglo
        const hero_skills = data[1]; // Acceder al segundo elemento
        console.log(hero_skills)
        return data ; // Devuelve los datos
    
    } 
    
    catch (error) {

        console.error('Error al procesar la solicitud:', error);
   
        throw error; // Lanza el error para que lo maneje el código que llama a getGifs
    }
}
