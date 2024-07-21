export default function Aside(){
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-400 py-2">Precios</h2>
            <div className="border-b-2 border-gray-500 mb-2"></div>
            <p className="pl-6 text-gray-300 text-lg" ><input type="checkbox" /> $200.000</p>
            <p className="pl-6 text-gray-300 text-lg" ><input type="checkbox" /> $250.000</p>
            <p className="pl-6 text-gray-300 text-lg" ><input type="checkbox" /> $300.000</p>
            <p className="pl-6 text-gray-300 text-lg" ><input type="checkbox" /> $350.000</p>
            <p className="pl-6 text-gray-300 text-lg" ><input type="checkbox" /> $400.000</p>
            <p className="pl-6 text-gray-300 text-lg" ><input type="checkbox" /> $450.000</p>

            <h2 className="text-2xl font-semibold text-gray-400 py-2" >Colores</h2>
            <div className="border-b-2 border-gray-500 mb-2"></div>
            <p className="pl-6 text-yellow-500 text-lg" ><input type="radio" /> Amarillo</p>
            <p className="pl-6 text-red-500 text-lg" ><input type="radio" /> Rojo</p>
            <p className="pl-6 text-blue-500 text-lg" ><input type="radio" /> Azul</p>
            <p className="pl-6 text-purple-500 text-lg" ><input type="radio" /> Morado</p>
            <p className="pl-6 text-green-500 text-lg" ><input type="radio" /> Verde</p>
            <p className="pl-6 text-gray-300 text-lg" ><input type="radio" /> Blanco</p>
        </div>
    )
}