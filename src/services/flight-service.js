const { AirplaneRepository, FlightRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      //   First we fetch the airplane & then add the capacity to flight
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
  async getFlightData() {
    // TODO:
  }
}
module.exports = FlightService;

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
