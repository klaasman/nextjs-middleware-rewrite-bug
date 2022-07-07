export const getStaticPaths = async () => {
  return {
    paths: [{ params: { page: "page-1" } }, { params: { page: "page-2" } }],
    fallback: "blocking",
  };
};

export const getStaticProps = (context) => {
  const { page } = context.params;

  return {
    props: {
      page,
    },
  };
};

export default function Page({ page }) {
  return <p>Hello get-static-props: {page}</p>;
}
