const { CityRepositoy } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepositoy = new CityRepositoy();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepositoy.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepositoy.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepositoy.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepositoy.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}
module.exports = CityService;
