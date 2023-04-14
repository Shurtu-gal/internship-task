import { list, nonNull, queryField } from 'nexus';

export const getcategories = queryField('getcategories', {
	type: list(nonNull('Category')),
	description: 'Get all categories',
	resolve: async (_root, _args, ctx) => {
		return ctx.db.category.findMany();
	},
});
