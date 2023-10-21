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
  async getFlightData(){
    // TODO:
  }
}
module.exports= FlightService;

/**
 * Explanation :
 * await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

-> In FlightRepository we have createFlight function, so data is the data that we fill in the form .
* ...data , it means data object destructuring, means data = {a:10,b:20} we have this object. 
 * if we do data= {...data, c:40}.
 * our final object become {a:10,b:20,c:40}
 * So, here we do ...data, spreaded it and add new parameter totalSeats , which derived from airplane.capacity(in airplane model we have capacity)
 * 
 * 
 * 
 * 
 * 
 *
 * /


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
