import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <ul>
                <li><Link href="/">Back to home</Link></li>
                <li><Link href="/posts/login-post">Login</Link></li>
                <li><Link href="/posts/about-post">About</Link></li>
            </ul>
            <h1>About</h1>
            <div> arbisndifvnsui9er siofnb sidtbiu nsodf vnuisybner vbi</div>
        </>
    );
}
