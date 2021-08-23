import { mount } from 'enzyme';
import App from './App';

describe('Test some basic render aspects of the App UI', () => {
    it('should render Customers page with expected h1 tag and button', () => {
        const page = mount(<App />);

        const h1 = page.find('h1');
        expect(h1.text()).toBe('My awesome customer database');

        const button = page.find('button');
        expect(button.text()).toBe('Create new customer');
    });
});
