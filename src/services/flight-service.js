const { AirplaneRepository, FlightRepository } = require("../repository/index");

class FlightService {
  async createFlight(data) {
    try {
      const airplaneRepository = new AirplaneRepository();
      const airplane = await airplaneRepository.getAirplane(data.airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
}

/**
 * For createFlight(data) : 
 * const airplaneRepository = new AirplaneRepository();
 * Above line create new object of AirplaneRepository,
 * Now when we have to getFlightData():
 * Again we need to create the new object of  AirplaneRepository.
 * So to avoid the creating new object again & again we will create the constructor
 */

/** Data we get:
 * {
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * totalSeats
 * }
 */
