// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    var timeToJuice = 0.0
    switch(name) {
      case 'Pure Strawberry Joy':
        timeToJuice=0.5;      
        break;
      case 'Energizer':
      case 'Green Garden':
        timeToJuice=1.5;      
        break;
      case 'Tropical Island':
        timeToJuice=3.0;      
        break;
      case 'All or Nothing':
        timeToJuice=5;      
        break;
      default:
        timeToJuice=2.5;
        break;
    }
    return timeToJuice;
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    var limeAvailable = 0;
    
    limeAvailable = limes.length;
    
    while(wedgesNeeded>0 && limes.length > 0)
    {
      switch(limes[0])
      {
        case 'small':
          wedgesNeeded-=6;
          limes.shift();
          break;
          
        case 'medium':
          wedgesNeeded-=8;
          limes.shift();
          break;
          
        case 'large':
          wedgesNeeded-=10;
          limes.shift();
          break;
          
        default:
          break;
  
      }
    }
    
    limeAvailable -= limes.length;
  
    return limeAvailable;
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    do 
    {
      timeLeft-= timeToMixJuice(orders[0])
      orders.shift();
    }
    while(timeLeft>0)
    
    return orders;
  }