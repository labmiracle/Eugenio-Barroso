import { withDataFetched, Posts } from "./WithPosts";

const PostList = ({ posts }: { posts: Posts[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const DataFetched = withDataFetched(PostList);
export default DataFetched;
