import type {
  GetServerSidePropsContext,
} from "next";

// use on with getServerSideProps
export const withCSR = (next: any) => async (ctx: GetServerSidePropsContext) => {
  const isCSR = ctx.req.url?.startsWith('/_next');

  if (isCSR) {
    return {
      props: {},
    };
  }

  return next?.(ctx);
};
