import Card from "./card"
import izquierda from "./../assets/images/izquierda.jpg"
import derecha from "./../assets/images/derecha.jpeg"
import centro from "./../assets/images/centro.jpeg"

export default function DijoSi() {

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-8xl font-bold text-[#f1b82a] dancing-script'>¡SI! Sabia que dirias que si</h1>
            <p className='text-lg my-4 text-neutral-500'>Eres la pieza que le faltaba a mi rompecabezas, lo mejor que me ha pasado jamas. </p>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mt-10'>
                <div className="lg:-rotate-12 mr-10 flex justify-center">
                    <Card image={izquierda} title="Nuestro Inicio" year={2021} lugar="Boda" />
                </div>
                <Card image={centro} title="Nuestra Historia" year={2025} lugar="Navida" />
                <div className="lg:rotate-12 ml-10">
                    <Card image={derecha} title="Nuestra Pasion" lugar="sultanes" year={2023} />
                </div>
            </div>
        </div>
    )
}