import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>About This App</h1>
        <p>Welcome to our interactive recipe app built with Next.js!</p>
      </main>
      <Footer />
    </>
  );
}
