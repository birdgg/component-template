import { expect } from 'chai';
import { buildComponent } from 'astro-component-tester';

describe('Example Tests', () => {
	// Simple test to get us started with the syntax
	it('should equal 2', () => {
		expect(1 + 1).to.equal(2);
	});

	// This show us how to write a test for our component's output using astro-component-tester
	describe('Component test', async () => {
		let component;

		// First build the component to get its output, this returns an object containing the generated html (`.html`)
		before(async () => {
			component = await buildComponent('./src/Component.astro');
		});

		// Unless you modified /src/Component.astro, this should pass, as the component is empty apart from the frontmatter
		it('example component should be empty', async () => {
			expect(component.html).to.equal('<head></head><body></body>');
		});
	});
});