// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    var totalBirdSum = 0;
    for (let handler = 0; handler < birdsPerDay.length; handler++){
      totalBirdSum += birdsPerDay[handler]
    }
    return totalBirdSum;
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    var totalBirdSum = 0;
    
    for (let handler = (week*7)-7; handler < (week*7); handler++){
      totalBirdSum += birdsPerDay[handler]
    }
    return totalBirdSum;
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
      var totalBird = birdsPerDay;
    for (let handler = 0; handler < birdsPerDay.length; handler++){
      if ((handler % 2)==0)
      {
        totalBird[handler] +=1;
      }  
    }
    return totalBird;
  }