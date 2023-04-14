import { mutationField, nonNull, stringArg } from 'nexus';

export const addSubject = mutationField((t) => {
	t.nonNull.field('addSubject', {
		type: 'Subject',
		args: {
			name: nonNull(stringArg()),
			description: stringArg(),
		},
		resolve: async (_root, args, ctx) => {
			const subject = {
				name: args.name,
				description: args.description,
			};
			return ctx.db.subject.create({
				data: subject,
			});
		},
	});
});

export const deleteSubject = mutationField((t) => {
	t.nonNull.field('deleteSubject', {
		type: 'Subject',
		args: {
			id: nonNull(stringArg()),
		},
		resolve: async (_root, args, ctx) => {
			return ctx.db.subject.delete({
				where: {
					id: args.id,
				},
			});
		},
	});
});
