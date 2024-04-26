import "../../index.css"
import estrellas from '../../images/Test/cm_icon_star.png'
import frame from '../../images/Test/arti_frame_deco_2.png'





export const ArtifactItem = ( {name, rarity, image} ) => {

	const images = [];

	for (var i = 0; i < rarity; i++) {
        // Creamos un nuevo elemento <img> y lo agregamos al array
        images.push(<img key={i} src={estrellas} alt="" />);
    }
	console.log(images)
	
	

    return ( 
        <>
			<div className="contenedor">  
				<div className="contenedor_tarjeta"> 
					
					<a href="">
						<figure id="tarjeta"> 

							<img src={ image } className="frontal" alt=""/> 
							<div className="containerFront"> 
								<div className="stars"> 
									{images}
								</div>

								<div className="bottomDescription">
									<h2 className="titulo">{ name }</h2>
									<img src={ frame } alt="" />
								</div>

							</div>

							<figcaption className="trasera"> 
								<h2 className="titulo">{ name }</h2>
								<hr/>
								<p>Luego de que un enemigo usa una habilidad no agresiva, aumenta la presteza del heroe un <span className="resaltado"> 24% </span> y tiene un <span className="resaltado"> 100% </span> de prob. de aumentar el ataque propio por 1 turno. Disponible una vez por turno.</p>
							</figcaption> 

						</figure>
					</a>

				</div>

			</div>

			
            
        </>
     );
}
 

