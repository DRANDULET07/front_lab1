import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";

export default function PostPage({ post, author }: any) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>By {author.name}</p>
      <p>{post.content}</p>

      <div>
        {post.tags.map((tag: string) => (
          <span key={tag}>#{tag} </span>
        ))}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(p => ({ params: { id: p.id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);

  if (!post) return { notFound: true };

  const author = await getAuthorById(post.author);

  return {
    props: { post, author },
    revalidate: 60,
  };
};