import Data from "../mock-data.json"

export default function EpisodesList() {
  return (
    Data.map((post) => (
      <div key={post.id}>
        <p>{post.title}</p>
        <p>{post.author}</p>
      </div>
    )),

    <h1>that is from the episodes page</h1>
  
  );
}
