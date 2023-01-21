import { Schema, models, model, Model, isValidObjectId } from 'mongoose';

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
    const validId = isValidObjectId(id);
    if(!validId) throw new Error('Invalid ID');

    return await this.model.findByIdAndUpdate({ _id: id }, { ...obj });
  }

  public async getOne(obj: any): Promise<T | null> {
    return this.model.findOne({ username: obj.username });
  }

  public async deleteById(id: string) {
    return this.model.deleteOne({ _id: id });
  }
}