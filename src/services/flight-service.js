const { AirplaneRepository, FlightRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
}

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
