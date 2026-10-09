import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { QueryTaskDto } from './dto/query-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateTaskDto, @Req() req: any) {
    return this.tasksService.create(dto, req.user?.userId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Query() query: QueryTaskDto, @Req() req: any) {
    return this.tasksService.findAll(query, req.user?.userId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  markCompleted(@Param('id') id: string) {
    return this.tasksService.markCompleted(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}