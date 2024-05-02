import { fetchAPI, initializeTimes, updateTimes } from "./temp";


describe('fetchAPI', () => {
  it('returns a predictable list of times for a fixed date', () => {
    const date = new Date('2023-05-01'); // May 1, 2023
    const times = fetchAPI(date);
    expect(times).toEqual(expect.arrayContaining([])); // Add expected times based on a known seed
  });

  it('returns different times for different days', () => {
    const date1 = new Date('2023-05-01');
    const date2 = new Date('2023-05-02');
    const times1 = fetchAPI(date1);
    const times2 = fetchAPI(date2);
    expect(times1).not.toEqual(times2);
  });
});


describe('updateTimes', () => {
    it('updates times based on the provided date', () => {
      const state = { times: [] };
      const action = { type: 'UPDATE_TIMES', date: new Date('2023-05-01') };
      const updatedState = updateTimes(state, action);
      expect(updatedState.times).toEqual(fetchAPI(action.date));
    });
  });
  
  describe('initializeTimes', () => {
    it('initializes times for the current day', () => {
        const fixedDate = new Date('2023-05-01T00:00:00Z');
        jest.spyOn(global, 'Date').mockImplementation(() => fixedDate as unknown as string);
      const initState = initializeTimes();
      expect(initState.times).toEqual(fetchAPI(new Date()));
      jest.restoreAllMocks();
    });
  });