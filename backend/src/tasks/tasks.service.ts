import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument, TaskStatus } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { QueryTaskDto } from './dto/query-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(dto: CreateTaskDto, userId?: string): Promise<TaskDocument> {
    return this.taskModel.create({ ...dto, userId });
  }

  async findAll(query: QueryTaskDto, userId?: string) {
    const filter: any = {};
    if (userId) filter.userId = userId;
    if (query.status) filter.status = query.status;
    if (query.search) {
      filter.$or = [
        { title: { $regex: query.search, $options: 'i' } },
        { description: { $regex: query.search, $options: 'i' } },
      ];
    }
    return this.taskModel.find(filter).sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<TaskDocument> {
    const task = await this.taskModel.findById(id).exec();
    if (!task) throw new NotFoundException(`Task with id ${id} not found`);
    return task;
  }

  async markCompleted(id: string): Promise<TaskDocument> {
    const task = await this.taskModel
      .findByIdAndUpdate(id, { status: TaskStatus.COMPLETED }, { new: true })
      .exec();
    if (!task) throw new NotFoundException(`Task with id ${id} not found`);
    return task;
  }

  async remove(id: string): Promise<{ message: string }> {
    const res = await this.taskModel.findByIdAndDelete(id).exec();
    if (!res) throw new NotFoundException(`Task with id ${id} not found`);
    return { message: 'Task deleted successfully' };
  }
}