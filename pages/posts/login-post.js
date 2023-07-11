import Link from "next/link";

export default function Login(){
    return(
        <>
            <div class={"topnav"}>
                <ul>
                    <li><Link href="/">Back to home</Link></li>
                    <li><Link href="/posts/login-post">Login</Link></li>
                    <li><Link href="/posts/about-post">About</Link></li>
                </ul>
                <h1>Login here</h1>
            </div>
        </>
    );
}


