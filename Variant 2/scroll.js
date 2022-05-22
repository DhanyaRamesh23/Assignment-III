function App() {
  const [imageObjects, setImageObjects] = useState([]);
  useEffect(() => {
    fetchImages();
        window.addEventListener("scroll", handleScroll); 
  }, []);
  const fetchImages = () => {
  };
    const handleScroll = () => {
        let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      fetchImages();
    }
  };
  return (
          {imageObjects.length ? (
            <ImageGrid imageObjects={imageObjects} />
        ) : null}
  );
}