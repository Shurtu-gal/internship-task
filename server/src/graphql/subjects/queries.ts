import { list, nonNull, queryField } from 'nexus';

export const getSubjects = queryField('getSubjects', {
	type: list(nonNull('Subject')),
	description: 'Get all subjects',
	resolve: async (_root, _args, ctx) => {
		return ctx.db.subject.findMany();
	},
});
