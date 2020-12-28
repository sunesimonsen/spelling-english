import { shuffle, pickSet } from "../utils/random.js";

const words = "words";
const currentExercise = "currentExercise";
export const proposal = "proposal";
export const images = "images";

const word = {
  inputs: { words, currentExercise },
  compute: ({ words, currentExercise }) =>
    words[currentExercise % words.length],
};

const possibleCharacters = {
  inputs: { words },
  compute: ({ words }) => {
    return Array.from(
      words.reduce((result, word) => {
        [...word.danish].forEach((c) => {
          result.add(c);
        });

        return result;
      }, new Set())
    );
  },
};

export const solution = {
  inputs: { word },
  compute: ({ word }) => [...word.danish],
};

export const choices = {
  inputs: { solution, possibleCharacters },
  compute: ({ solution, possibleCharacters }) => {
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
  inputs: { proposal },
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
    proposal,
  },
  compute: ({ solution, proposal }) => solution.length === proposal.length,
};

export const correctProposal = {
  inputs: {
    solution,
    proposal,
  },
  compute: ({ solution, proposal }) =>
    solution.length === proposal.length &&
    solution.every((letter, i) => proposal[i].letter === letter),
};

export const pickChoice = (choice) => ({
  payload: choice,
  apply: (cache, { payload }) => {
    cache.update(proposal, (proposal) => [...proposal, payload]);
  },
});

export const nextExercise = () => ({
  apply: (cache) => {
    cache.set(proposal, []);
    cache.update(currentExercise, (currentExercise) => currentExercise + 1);
  },
});

export const retryExercise = () => ({
  apply: (cache) => {
    cache.set(proposal, []);
  },
});

export const loadImages = () => ({
  payload: (cache, api) => api.loadImages(),
  apply: (cache, { payload }) => {
    cache.set(images, payload);
  },
});
