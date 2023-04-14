import { Experiment } from '@/utils/types';
import Image from 'next/image';
import { SectionTitle, Heading, List, ListItem, Wrapper, Caption, Title, ImageContainer, NumberedList } from './styles';
import { Subject, Subjects } from '../ExperimentCard/styles';

const ExperimentScreen = ({ experiment }: { experiment: Experiment }) => {
  const { title, description, subjects, materials, steps, precautions, image, difficulty, categories } = experiment;
  const alternateImage = 'https://via.placeholder.com/300x200';

  return (
    <Wrapper>
      <ImageContainer>
        <div />
        <Image src={image || alternateImage} alt='Experiment Image' width={300} height={200} />
      </ImageContainer>
      <Heading>{title}</Heading>
      <Caption>{description}</Caption>
      <Subjects>
        <Title>Subjects: </Title>
        {subjects?.map((subject) => (
          <Subject key={subject.id}>{subject.name}</Subject>
        ))}
      </Subjects>
      <Subjects>
        <Title>Categories: </Title>
        {categories?.map((category) => (
          <Subject key={category.id}>{category.name}</Subject>
        ))}
      </Subjects>
      <Caption>Difficulty: {difficulty}</Caption>
      {materials.length > 0 && (
        <>
          <SectionTitle>Materials Required</SectionTitle>
          <List>
            {materials.map((material) => (
              <ListItem key={material.name}>
                {material.name} &#8594; {material.quantity}
              </ListItem>
            ))}
          </List>
        </>
      )}
      {steps.length > 0 && (
        <>
          <SectionTitle>Procedure</SectionTitle>
          <NumberedList>
            {steps.map((step) => (
              <ListItem key={step.stepNumber}>{step.step}</ListItem>
            ))}
          </NumberedList>
        </>
      )}
      {precautions && precautions.length > 0 && (
        <>
          <SectionTitle>Precautions</SectionTitle>
          <List>
            {precautions.map((precaution) => (
              <ListItem key={precaution}>{precaution}</ListItem>
            ))}
          </List>
        </>
      )}
    </Wrapper>
  );
};

export default ExperimentScreen;
