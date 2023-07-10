function home(props) {
    return (
        <div className="container d-flex align-items-center text-center">
            <div className="form-signin">
                <h1 className="h3 mb-3 fw-normal">Welcome</h1>
                <button className="w-100 btn btn-lg btn-primary" type="button" onClick={props.onLogOut}>Log out</button>
            </div>
        </div>
    )
}

export default home