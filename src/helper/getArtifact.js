

export const getArtifact = async ( {name} ) => {

    try {
        const url = `http://127.0.0.1:8000/Artifacts//${name}`;
        const resp = await fetch(url, {
            method: 'GET',
        });
        
        if (!resp.ok) {
            throw new Error('No se pudo obtener la información');
        }
        
        const data = await resp.json();
        return data;
        
    } catch (error) {
        console.error('Ha ocurrido un error en el servidor:', error);
        throw error; // Re-lanzamos el error para que pueda ser manejado en el nivel superior si es necesario
    }
};
