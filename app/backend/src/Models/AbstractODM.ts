import { Schema, models, model, Model, UpdateQuery } from 'mongoose';
import IUserLogin from '../Interfaces/IUserLogin';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(modelName: string, schema: Schema) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<T | null> {
    return this.model.findById({
      _id: id,
    });
  }

  public async updateById(id: string, obj: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
    );
  }

  public async getOne(obj: IUserLogin): Promise<T | null> {
    console.log(obj);
    return this.model.findOne({ username: obj.username });
  }

  public async deleteById(id: string): Promise<T | null> {
    return this.model.remove({ _id: id });
  }
}