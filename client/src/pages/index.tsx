import ExperimentSection from '@/components/molecules/ExperimentSection';
import { GraphQLClient } from '@/config/apolloClient';
import getAllExperiments from '@/graphql/queries/getAllExperiments';
import { Experiment } from '@/utils/types';

const Home = ({ experiments }: { experiments: Experiment[] }) => (
  <>
    <ExperimentSection experiments={experiments} />
  </>
);

export default Home;

export async function getStaticProps() {
  const {
    data: { getAllExperiments: experiments },
  } = await GraphQLClient.query({
    query: getAllExperiments,
  });

  return {
    props: {
      experiments,
    },
    revalidate: 60,
  };
}
