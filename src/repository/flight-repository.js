const Flights = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
    } catch (error) {
      console.log("Something went wrong in Flight repo. layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
