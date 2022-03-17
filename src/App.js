
import './style.css'
import useFetch from "./hooks/useFetch";
import Slideshow from "./Slideshow";
function App() {
  const { data, loading, error } = useFetch("https://api.unsplash.com/photos/?client_id=735383e17276cf0667bf1d7c0755d0e19d38ff8989e939454a0ac984c7afefea");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='container'>
      <Slideshow images={data} />
    </div>
  );
}

export default App;
