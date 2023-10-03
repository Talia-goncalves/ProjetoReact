function Eventos({numero}){

function meuEvento(){
    console.log(`Opa, fui ativado! ${numero}`)
}

    return(
        <>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Eventos