export async function getServerSideProps(context) {
  const { page } = context.params;
  return { props: { page } };
}

export default function Page({ page }) {
  return <p>Hello get-server-side-props: {page}</p>;
}
