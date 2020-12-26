import { shuffle, pickSet } from "../utils/random.js";

const words = "words";
const currentExercise = "currentExercise";
export const proposal = "proposal";

const word = {
  inputs: { words, currentExercise },
  compute: ({ words, currentExercise }) =>
    words[currentExercise % words.length],
};

const possibleCharacters = {
  inputs: { words },
  compute: ({ words }) =>
    words.reduce((result, word) => {
      [...word.danish].forEach((c) => {
        result.add(c);
      });

      return result;
    }, new Set()),
};

export const solution = {
  inputs: { word },
  compute: ({ word }) => [...word.danish],
};

let nextId = 0;

export const choices = {
  inputs: { solution, possibleCharacters },
  compute: ({ solution, possibleCharacters }) => {
    let noise = [];
    const noiseLength = Math.min(8 - solution.length);

    if (noiseLength > 0) {
      const possibleCharactersClone = new Set(possibleCharacters);

      solution.forEach((c) => {
        possibleCharactersClone.delete(c);
      });

      noise = pickSet(Array.from(possibleCharactersClone), noiseLength);
    }

    return shuffle([...solution, ...noise]).map((letter) => ({
      id: nextId++,
      letter,
    }));
  },
};

const choicesById = {
  inputs: { choices },
  compute: ({ choices }) =>
    choices.reduce(
      (result, choice) => ({ ...result, [choice.id]: choice }),
      {}
    ),
};

export const choiceById = (id) => ({
  inputs: { choiceById },
  compute: ({ choiceById }) => choiceById[id],
});

const proposalById = {
  inputs: { proposal },
  compute: ({ proposal }) =>
    proposal.reduce(
      (result, choice) => ({ ...result, [choice.id]: choice }),
      {}
    ),
};

export const visibleChoices = {
  inputs: { proposalById, choices },
  compute: ({ proposalById, choices }) =>
    choices.filter((choice) => !proposalById[choice.id]),
};

export const completeProposal = {
  inputs: {
    solution,
    proposal,
  },
  compute: ({ solution, proposal }) => solution.length === proposal.length,
};

export const pickChoice = (choice) => ({
  payload: choice,
  apply: (cache, { payload }) => {
    cache.update(proposal, (proposal) => [...proposal, payload]);
  },
});

export const removeLastProposalLetter = () => ({
  apply: (cache, { payload }) => {
    cache.update(proposal, (proposal) => proposal.slice(0, -1));
  },
});
