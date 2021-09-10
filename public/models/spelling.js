import { shuffle, pickSet } from "../utils/random.js";

const exercise = {
  inputs: { exercises: "exercises", currentExercise: "currentExercise" },
  compute: ({ exercises, currentExercise }) =>
    exercises[currentExercise % exercises.length],
};

const possibleCharacters = [];

for (let i = 97; i < 122; i++) {
  possibleCharacters.push(String.fromCharCode(i));
}

export const solution = {
  inputs: { exercise },
  compute: ({ exercise }) => [...exercise.word],
};

export const choices = {
  inputs: { solution },
  compute: ({ solution }) => {
    let noise = [];
    const noiseLength = Math.min(8 - solution.length);

    if (noiseLength > 0) {
      const used = new Set(solution);

      noise = pickSet(
        possibleCharacters.filter((c) => !used.has(c)),
        noiseLength
      );
    }

    return shuffle([...solution, ...noise]).map((letter, i) => ({
      id: i,
      letter,
    }));
  },
};

const proposalById = {
  inputs: { proposal: "proposal" },
  compute: ({ proposal }) =>
    proposal.reduce(
      (result, choice) => ({ ...result, [choice.id]: choice }),
      {}
    ),
};

export const choiceIsUsed = (id) => ({
  inputs: { proposalById },
  compute: ({ proposalById }) => Boolean(proposalById[id]),
});

export const choiceById = (id) => ({
  inputs: { choiceById },
  compute: ({ choiceById }) => choiceById[id],
});

export const completeProposal = {
  inputs: {
    solution,
    proposal: "proposal",
  },
  compute: ({ solution, proposal }) => solution.length === proposal.length,
};

export const correctProposal = {
  inputs: {
    solution,
    proposal: "proposal",
  },
  compute: ({ solution, proposal }) =>
    solution.length === proposal.length &&
    solution.every((letter, i) => proposal[i].letter === letter),
};

export const pickChoice = (choice) => ({
  payload: (cache) => {
    return {
      proposal: [...cache.get("proposal"), choice],
    };
  },
});

export const nextExercise = () => ({
  payload: (cache, api) => {
    const response = api.saveExercise(cache.get("currentExercise") + 1);

    return {
      proposal: [],
      currentExercise: response,
      hint: {},
    };
  },
});

export const retryExercise = () => ({
  payload: (cache) => {
    return {
      proposal: [],
    };
  },
});

export const loadImages = (query) => ({
  payload: async (cache, api) => {
    const response = await api.loadImages(query);
    return { images: response };
  },
});

export const query = {
  inputs: { exercise },
  compute: ({ exercise }) => exercise.search || exercise.word,
};

export const backspace = () => ({
  payload: (cache) => {
    const proposal = cache.get("proposal");

    return {
      proposal: proposal.slice(0, -1),
    };
  },
});
