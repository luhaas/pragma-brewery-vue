const containers = [];

export const list = (() => containers);

export const add = ((name, beerId, quantity) => {
  containers.push({
    id: containers.length,
    name,
    beer: beerId,
    quantity,
    temperature: 0,
  });
});

export const remove = ((id) => {
  const index = containers.map(c => c.id).indexOf(id);
  containers.splice(index, 1);
});

export const setTemperature = ((id, temperature) => {
  const index = containers.map(c => c.id).indexOf(id);
  containers[index].temperature = temperature;

  return containers[index];
});
export default list;
