import { SectionTitle } from '@/components/atoms/shared';
import { Experiment } from '@/utils/types';
import ExperimentCard from '@/components/atoms/ExperimentCard';
import { Section } from './styles';

const ExperimentSection = ({ experiments }: { experiments: Experiment[] }) => (
  <>
    <SectionTitle>Experiments</SectionTitle>
    <Section>
      {experiments.map((experiment) => (
        <ExperimentCard key={experiment.id} experiment={experiment} />
      ))}
    </Section>
  </>
);

export default ExperimentSection;
