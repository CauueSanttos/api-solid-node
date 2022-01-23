import { User } from "../entities/User";

export interface IUsersReporitory {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}