import { objectType } from 'nexus';

export const Category = objectType({
	name: 'Category',
	definition(t) {
		t.nonNull.id('id');
		t.string('name');
		t.string('description');
	},
});
