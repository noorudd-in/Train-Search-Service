class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
      return null;
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.update(data, {
        where: {
            id: id
        }
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const result = await this.model.destroy({
        where: {
          id: id,
        },
      });
      if (!result) {
        return false;
      }
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
    }
  }

  async get(id) {
    try {
      const result = this.model.findByPk(id);
      if (!result) {
        return null;
      }
      return result;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
    }
  }

  async getAll() {
    try {
      const result = this.model.findAll();
      return result; 
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CrudRepository;