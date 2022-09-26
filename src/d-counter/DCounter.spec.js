import { mount } from '@vue/test-utils';
import Dcounter from './DCounter';

describe('Spec Dcounter', function() {
    it('mounts', () => {
        const wrapper = mount(Dcounter);
        expect(wrapper)
            .toBeTruthy();
    });
});
