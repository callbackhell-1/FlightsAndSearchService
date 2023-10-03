const { City } = require("../models/index");

class CityRepository {
  // Create city
  async createCity({ name }) {
    try {
      const city = await City.create({
        name: name,
      });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  // Delete city
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  // update city
  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Error in city-repo");
      throw { error };
    }
  }

  // get the city
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
