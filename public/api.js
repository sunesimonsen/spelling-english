export const loadImages = async (query) => {
  const q = encodeURIComponent(query);
  const response = await fetch(`/spell/images.php?q=${q}`);
  const data = await response.json();

  return data.value.map(({ imageId, name, thumbnail, thumbnailUrl }) => ({
    id: imageId,
    name,
    thumbnailUrl: `${thumbnailUrl}&w=250&h=165`,
  }));
};

export const saveExercise = (exercise) => {
  window.localStorage.setItem("spelling-app-v2.exercise", exercise);
  return exercise;
};

export const retrieveExercise = () => {
  const data = window.localStorage.getItem("spelling-app-v2.exercise");
  if (data) {
    return Number(data);
  } else {
    return 0;
  }
};
