import { objectType } from 'nexus';

export const material = objectType({
	name: 'Material',
	definition(t) {
		t.nonNull.string('name');
		t.nonNull.int('quantity');
	},
});

export const step = objectType({
	name: 'Step',
	definition(t) {
		t.nonNull.int('stepNumber');
		t.string('image');
		t.string('step');
	},
});

export const Experiment = objectType({
	name: 'Experiment',
	definition(t) {
		t.nonNull.id('id');
		t.nonNull.string('title');
		t.string('description');
		t.int('difficulty');
		t.list.nonNull.id('subjectID');
		t.list.nonNull.id('categoryID');
		t.string('image');
		t.nonNull.list.nonNull.field('materials', {
			type: 'Material',
			description: 'Materials required for the experiment',
		});
		t.nonNull.list.nonNull.field('steps', {
			type: 'Step',
			description: 'Detailed steps for the experiment',
		});
		t.nonNull.list.string('precautions');
		t.list.nonNull.field('subjects', {
			type: 'Subject',
		});
		t.list.nonNull.field('categories', {
			type: 'Category',
		});
	},
});
