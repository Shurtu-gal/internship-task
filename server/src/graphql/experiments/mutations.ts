import { extendType, inputObjectType, nonNull } from 'nexus';

export const MaterialInput = inputObjectType({
	name: 'MaterialInputType',
	definition(t) {
		t.nonNull.string('name');
		t.nonNull.int('quantity');
	},
});

export const StepInput = inputObjectType({
	name: 'StepInputType',
	definition(t) {
		t.nonNull.int('stepNumber');
		t.string('image');
		t.nonNull.string('step');
	},
});

export const ExperimentInputType = inputObjectType({
	name: 'ExperimentInputType',
	definition(t) {
		t.nonNull.string('title');
		t.string('description');
		t.int('difficulty');
		t.nonNull.list.nonNull.id('subjectID');
		t.nonNull.list.nonNull.id('categoryID');
		t.string('image');
		t.nonNull.list.nonNull.field('materials', {
			type: nonNull('MaterialInputType'),
			description: 'Materials required for the experiment',
		});
		t.nonNull.list.field('steps', {
			type: nonNull('StepInputType'),
			description: 'Detailed steps for the experiment',
		});
		t.list.nonNull.string('precautions');
	},
});

export const addExperiment = extendType({
	type: 'Mutation',
	definition(t) {
		t.nonNull.field('addExperiment', {
			type: 'Experiment',
			args: {
				experiment: nonNull('ExperimentInputType'),
			},
			resolve: async (_, { experiment }, ctx) => {
				const newExperiment = await ctx.db.experiment.create({
					data: {
						...experiment,
						steps: experiment.steps ?? [],
						materials: experiment.materials ?? [],
						categoryID: experiment.categoryID,
						subjectID: experiment.subjectID,
						precautions: experiment.precautions ?? [],
					},
				});
				if (!newExperiment) {
					throw new Error('Error creating experiment');
				}
				return newExperiment;
			},
		});
	},
});

export const updateExperiment = extendType({
	type: 'Mutation',
	definition(t) {
		t.nonNull.field('updateExperiment', {
			type: 'Experiment',
			args: {
				id: nonNull('ID'),
				experiment: nonNull('ExperimentInputType'),
			},
			resolve: async (_, { id, experiment }, ctx) => {
				try {
					const updatingExperiment = await ctx.db.experiment.findUnique({
						where: { id },
					});

					if (!updatingExperiment) {
						throw new Error('Experiment not found');
					}

					const updatedExperiment = await ctx.db.experiment.update({
						where: { id },
						data: {
							...experiment,
							steps: experiment.steps ?? [],
							materials: experiment.materials ?? [],
							categoryID: experiment.categoryID,
							subjectID: experiment.subjectID,
							precautions: experiment.precautions ?? [],
						},
					});

					if (!updatedExperiment) {
						throw new Error('Error updating experiment');
					}

					return updatedExperiment;
				} catch (error) {
					ctx.logger.error(error);
					throw new Error(error as string);
				}
			},
		});
	},
});
