import { EvenNumber } from '../entities/even-number.entity';
import { OddNumber } from '../entities/odd-number.entity';

export function structureResponse(
  evenOrOddNumbers: Promise<EvenNumber[] | OddNumber[]>,
): Promise<number[]> {
  const formattedNumbers = evenOrOddNumbers.then((numbers) => {
    return numbers.map(({ value }) => value).slice(-10);
  });

  return formattedNumbers;
}
