import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <main>
            <h1>404 Not found</h1>
            <p>Oops, looks like you got lost! <a href="" onClick={() => navigate(-1)}>Click here</a> to find your way back...</p>
        </main>
    )
}