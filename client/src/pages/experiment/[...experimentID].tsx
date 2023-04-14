import ExperimentScreen from '@/components/atoms/ExperimentPage';
import { GraphQLClient } from '@/config/apolloClient';
import getExperimentById from '@/graphql/queries/getExperimentById';
import getExperimentPaths from '@/graphql/queries/getExperimentPaths';
import { Experiment } from '@/utils/types';

interface ExperimentParamsType {
  params: {
    experimentID: string[];
  };
}

const ExperimentPage = ({ experiment }: { experiment: Experiment }) => (
  <>{experiment && <ExperimentScreen experiment={experiment} />}</>
);
export default ExperimentPage;

export async function getStaticProps({
  params: {
    experimentID: [id],
  },
}: ExperimentParamsType) {
  const {
    data: { getExperimentById: experiment },
  }: { data: { getExperimentById: Experiment } } = await GraphQLClient.query({
    query: getExperimentById,
    variables: { id },
  });

  if (!experiment) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      experiment,
    },
    revalidate: 24 * 60 * 60 * 7,
  };
}

const getPaths = async () => {
  const {
    data: { getAllExperiments: experiments },
  } = await GraphQLClient.query({
    query: getExperimentPaths,
  });

  return experiments.map(({ id, title }: { id: string; title: string }) => ({
    params: {
      experimentID: [id, title],
    },
  }));
};

export async function getStaticPaths() {
  const paths = process.env.NODE_ENV === 'development' ? [] : await getPaths();
  return {
    paths,
    fallback: true,
  };
}
