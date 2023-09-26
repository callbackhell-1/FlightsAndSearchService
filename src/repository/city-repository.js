const { City } = require("../models/index");

class CityRepository {
  // Create city
  async createCity({ name }) {
    try {
      const city = await City.create(name);
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
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;