import { User } from "../../entities/User";
import { IUsersReporitory } from "../IUsersReporitory";

export class PostgresUserRepository implements IUsersReporitory {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}