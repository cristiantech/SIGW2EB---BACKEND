import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly repoBook: Repository<Book>,
  ) { }

  create(payload: CreateBookDto) {
    const newBook = this.repoBook.create(payload);
    return this.repoBook.save(newBook);
  }

  async findAll() {
    try {
      return this.repoBook.find();
    } catch (error) {
      throw new NotFoundException(`Error al obtener los libros ${error}`);
    }
  }

  async findOne(id: number) {
    const bookOne = await this.repoBook.findOne({ where: { id } });
    if (!bookOne) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return bookOne;
  }

  async update(id: number, change: UpdateBookDto) {
    try {
      const book = await this.findOne(id);
      this.repoBook.merge(book, change); // merge changes into the existing entity
      return this.repoBook.save(book);
    } catch (error) {
      throw new NotFoundException(`Update error : ${error}`);
    }
  }

  remove(id: number) {
    return this.repoBook.delete(id);
  }
}
