import { Link, useNavigate } from "react-router-dom"; // url이동시 새로운 HTTP요청을 전송하지 않음.

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return <>
        <h1>My Home Page</h1>
        <p>
            Go to <Link to="/products">the list of products</Link>
        </p>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </>
}

export default HomePage;