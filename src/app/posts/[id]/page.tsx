export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}

export function generateStaticParams() {
  const posts = [1, 2, 3, 4];

  return posts.map((post) => ({
    slug: post.toString(),
  }))
}