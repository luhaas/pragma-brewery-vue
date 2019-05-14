import { mutations } from '@/store';

// destructure assign `mutations`
const { ADD_CONTAINER, UPDATE_CONTAINER_TEMPERATURE, REMOVE_CONTAINER } = mutations;
// create state object
const state = {
  containers: [],
};

// test store mutations
describe('mutations', () => {
  it('test state.containers.length after mutation ADD_CONTAINER', () => {
    // apply mutation
    ADD_CONTAINER(state, { beer: 1, quantity: 2 });
    // check if length is 1
    expect(state.containers.length).toBe(1);
  });

  it('test state.container[0].temperature value after mutation UPDATE_CONTAINER_TEMPERATURE', () => {
    // apply mutation
    UPDATE_CONTAINER_TEMPERATURE(state, { id: 1, temperature: 3 });
    // check if temperature is 3
    expect(state.containers[0].temperature).toBe(3);
  });

  it('test state.containers.length after mutation REMOVE_CONTAINER', () => {
    // apply mutation
    REMOVE_CONTAINER(state, 1);
    // check if length is 0
    expect(state.containers.length).toBe(0);
  });
});
