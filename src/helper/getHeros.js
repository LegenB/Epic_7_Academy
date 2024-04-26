


export const getHeros =  async() => {
    
    
    
    //const url = `https://8kx77sc2-3000.brs.devtunnels.ms/Heros`;
    try {
        const url = `http://127.0.0.1:8000/Heros`;
        const resp  = await fetch( url );
    
        const data  = await resp.json();
        return data;
        
    } catch (error) {
        const data =[];
        console.log('ERROR NO PUEDO')
        console.log('Error al procesar la solicitud:', error);
        return data;
       
    }
    
    
    // const gifs = data.map( img => ({
    //   id: img.id,
    //   title: img.title,
    //   url: img.images.downsized_medium.url
    
    //   }
    // ));

    
  
    
  
}