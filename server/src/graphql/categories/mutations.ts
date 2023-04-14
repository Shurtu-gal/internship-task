import { mutationField, nonNull, stringArg } from 'nexus';

export const addCategory = mutationField((t) => {
	t.nonNull.field('addcategory', {
		type: 'Category',
		args: {
			name: nonNull(stringArg()),
			description: stringArg(),
		},
		resolve: async (_root, args, ctx) => {
			const category = {
				name: args.name,
				description: args.description,
			};
			return ctx.db.category.create({
				data: category,
			});
		},
	});
});

export const deleteCategory = mutationField((t) => {
	t.nonNull.field('deletecategory', {
		type: 'Category',
		args: {
			id: nonNull(stringArg()),
		},
		resolve: async (_root, args, ctx) => {
			return ctx.db.category.delete({
				where: {
					id: args.id,
				},
			});
		},
	});
});
