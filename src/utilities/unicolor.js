const hashCode = (string) => {
  const len = string.length;
  let hash = 0;

  for (let i = 0; i < len; i++) {
    hash = (hash << 3) - hash + string.charCodeAt(i);
    hash &= hash;
  }

  return hash;
};

const boundHashCode = (num, range) => {
  return (num % Math.abs(range[1] - range[0])) + range[0];
};

const unicolor = (value) => {
  const hash = Math.abs(hashCode(value));
  const h = boundHashCode(hash, [0, 360]);
  const s = boundHashCode(hash, [40, 45]);
  const l = boundHashCode(hash, [40, 50]);
  return `hsl(${h}, ${s}%, ${l}%)`;
};

export default unicolor;
