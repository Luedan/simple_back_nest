import { InsertResult, UpdateResult } from 'typeorm';

export const FakeInsertResult = <Fake>(data: Fake) =>
  ({
    raw: [{ ...data }],
    generatedMaps: [{ ...data }],
    identifiers: [],
  }) as InsertResult;

export const FakeUpdateResult = <Fake>(data: Fake) =>
  ({
    raw: [{ ...data }],
    affected: 1,
    generatedMaps: [{ ...data }],
  }) as UpdateResult;

export const ErrorWithoutStatus = new Error('Error');

describe('FakeInsertResult', () => {
  it('Should return a insert result', () => {
    const data = { id: 1, message: 'Hola' };
    const result = FakeInsertResult(data);

    expect(result).toEqual({
      raw: [{ ...data }],
      generatedMaps: [{ ...data }],
      identifiers: [],
    });
  });

  it('Should return a update result', () => {
    const data = { id: 1, message: 'Hola' };
    const result = FakeUpdateResult(data);

    expect(result).toEqual({
      raw: [{ ...data }],
      affected: 1,
      generatedMaps: [{ ...data }],
    });
  });
});
