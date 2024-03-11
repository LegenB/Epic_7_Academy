


export const getHeros =  async() => {
    
    const url = `http://127.0.0.1:8000/Heros`;
    const resp  = await fetch( url );
  
    const  data  = await resp.json();
  
    //console.log(data);

    // const gifs = data.map( img => ({
    //   id: img.id,
    //   title: img.title,
    //   url: img.images.downsized_medium.url
    
    //   }
    // ));

  
    return data;
  
}