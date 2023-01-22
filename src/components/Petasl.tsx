import '../scss/petals.scss'

function Petal() {
    return (<div className='petals__petal'>
    </div>)
}
function Petals() {
    return (
        <div className='petals'>
            {([...Array(250)].map((e, i: number) => <Petal key={i} />))}
        </div>
    )
}
export default Petals