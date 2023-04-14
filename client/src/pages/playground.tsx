import ExperimentCard from '@/components/atoms/ExperimentCard';
import { GraphQLClient } from '@/config/apolloClient';
import getAllExperiments from '@/graphql/queries/getAllExperiments';
import { Experiment } from '@/utils/types';

const Home = ({ experiments }: { experiments: Experiment[] }) => (
  <div style={{ margin: '100px' }}>
    {Array(experiments[0]).map((experiment) => (
      <ExperimentCard key={experiment.id} experiment={experiment} />
    ))}
  </div>
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
  };
}
