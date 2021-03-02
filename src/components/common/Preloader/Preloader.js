import preloader from '../../../assets/images/loader.gif';


const Preloader = () => {
    return (
        <div style={ { backgroundColor: 'white' } }>
            <img src={preloader} />
        </div>
    )
}

export default Preloader