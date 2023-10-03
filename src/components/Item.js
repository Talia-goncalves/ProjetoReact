import PropType from 'prop-types';

function Item({marca, ano_lancamento}){
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.PropType = {
    marca: PropType.string.isRequired,
    ano_lancamento: PropType.number.isRequired,
}

Item.defaultProps = {
    marca: "Faltou marca",
    ano_lancamento: 0,
}

export default Item