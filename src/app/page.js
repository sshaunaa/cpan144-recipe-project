import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to the Recipe App 🍳</h1>
        <p>Click below to explore recipes!</p>
        <Link href="/recipes">
          <button style={{ padding: '1rem', backgroundColor: '#f8b195', marginTop: '1rem' }}>
            Browse Recipes
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}