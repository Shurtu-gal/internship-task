import { objectType } from 'nexus';

export const Subject = objectType({
	name: 'Subject',
	definition(t) {
		t.nonNull.id('id');
		t.string('name');
		t.string('description');
	},
});
