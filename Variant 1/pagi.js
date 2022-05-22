export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ...
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
    </div>
  );
}