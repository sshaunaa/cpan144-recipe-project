import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link href="/recipes" style={{ marginRight: '1rem' }}>Recipes</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
