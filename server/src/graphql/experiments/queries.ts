import { list, nonNull, queryField } from 'nexus';

export const getAllExperiments = queryField((t) => {
	t.nonNull.field('getAllExperiments', {
		type: list('Experiment'),
		resolve: async (_, __, ctx) => {
			const experiments = await ctx.db.experiment.findMany({ include: { categories: true, subjects: true } });
			return experiments;
		},
	});
});

export const getExperimentById = queryField((t) => {
	t.nonNull.field('getExperimentById', {
		type: 'Experiment',
		args: {
			id: nonNull('ID'),
		},
		resolve: async (_, { id }, ctx) => {
			const experiment = await ctx.db.experiment.findUnique({
				where: { id },
				include: { categories: true, subjects: true },
			});

			if (!experiment) {
				throw new Error('Experiment not found');
			}

			return experiment;
		},
	});
});

export const getExperimentsBySubject = queryField('getExperimentsBySubject', {
	type: list(nonNull('Experiment')),
	description: 'Get all experiments by subject',
	args: {
		id: nonNull('ID'),
	},
	resolve: async (_root, { id }, ctx) => {
		return ctx.db.experiment.findMany({
			where: {
				subjectID: {
					has: id,
				},
			},
			include: { categories: true, subjects: true },
		});
	},
});
export const getExperimentsByCategory = queryField('getExperimentsByCategory', {
	type: list(nonNull('Experiment')),
	description: 'Get all experiments by category',
	args: {
		id: nonNull('ID'),
	},
	resolve: async (_root, { id }, ctx) => {
		return ctx.db.experiment.findMany({
			where: {
				categoryID: {
					has: id,
				},
			},
			include: { categories: true, subjects: true },
		});
	},
});
