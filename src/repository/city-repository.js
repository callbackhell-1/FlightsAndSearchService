const { City } = require("../models/index");
const { Op } = require("sequelize");
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
      // The below Approach also works but will not return the updated object
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      // For getting data of updated city
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
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

  // Get all the cities
  async getAllCities(filter) {
    console.log(filter);
    // filter can be empty also, if filter empty then we will return all the cities
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Err in city-repo");
      throw { error };
    }
  }
}

module.exports = CityRepository;
