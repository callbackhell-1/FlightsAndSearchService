const { CityRepositoy } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepositoy = new CityRepositoy(); //calling CityRepositoy func. & create new obj of cityRepository
  }

  async createCity(data) {
    try {
      const city = await this.CityRepositoy.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.CityRepositoy.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepositoy.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepositoy.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}
