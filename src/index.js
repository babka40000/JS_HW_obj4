export default function getSpecials(hero) {
  const result = [];

  for (const spec of hero.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = spec;

    result.push({
      id, name, icon, description,
    });
  }

  return result;
}
