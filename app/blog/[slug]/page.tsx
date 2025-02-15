
export async function generateMetadata({ params }: any) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: any) {
  return <h1>Slug: {params.slug}</h1>;
}
