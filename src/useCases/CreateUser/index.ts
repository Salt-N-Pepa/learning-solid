import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUserRepository } from './../../repositories/implementations/PostgresUserRepository';
import { MailTrapMailProvider } from './../../providers/implementations/MailTrapMailProvider';

const mailtrapMailProvider  = new MailTrapMailProvider()
const postgresUserRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }