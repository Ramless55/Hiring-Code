import ErrorImg from '../../assets/img/errorpage__react.jpg'

const ErrorPage = () => {
    return (
        <>
            <h1>
                Error 404
            </h1>
            <img src={ErrorImg} style={{
                width:"100vw",
                height:"100vh"
            }}
            />
        </>
    )
}

export default ErrorPage