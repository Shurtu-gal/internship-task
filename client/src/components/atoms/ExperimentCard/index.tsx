import Image from 'next/image';
import { Experiment } from '@/utils/types';
import { Container, Details, Subject, Subjects, Title } from './styles';
import { Button } from '../shared';

interface ExperimentCardProps {
  experiment: Experiment;
}

const ExperimentCard = (props: ExperimentCardProps) => {
  const { id, image, title, description, difficulty, subjects } = props.experiment;
  const alternateImage = 'https://via.placeholder.com/300x200';
  return (
    <Container id={id}>
      <Image src={image || alternateImage} alt={title} width={300} height={200} />
      <Title>{title}</Title>
      <p style={{ lineHeight: '1.5rem' }}>{description}</p>
      <Subjects>
        <p>Subjects: </p>
        {subjects?.map((subject) => (
          <Subject key={subject.id}>{subject.name}</Subject>
        ))}
      </Subjects>
      <Details>
        <p>Difficulty: {difficulty}</p>
        <Button text={'See More'} backgroundColor='blue' link={`/experiment/${id}/${title}`} />
      </Details>
    </Container>
  );
};

export default ExperimentCard;
