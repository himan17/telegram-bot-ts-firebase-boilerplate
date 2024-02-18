import { db } from "../../db/firebase";
import { TelegramUserInterface, User, UserInterface } from "./user";

export class UserManager {
  private users: Map<string, User> = new Map<string, User>();
  private isReady = false;

  constructor() {
    this.initAllUsers();
  }

  createUserInstance(userData: UserInterface) {
    return new User(userData);
  }

  private initAllUsers() {
    const startTimestamp = performance.now();
    return new Promise((resolve) => {
      db.getFullCollection("Users").then((allUsers) => {
        for (const userData of allUsers) {
          this.users.set(
            userData.id.toString(),
            this.createUserInstance(userData as UserInterface)
          );
        }
        const endTimestamp = performance.now();
        console.log(
          `Fetched all users of the bot in  ${(
            (endTimestamp - startTimestamp) /
            1000
          ).toFixed(2)} seconds`
        );
        this.isReady = true;
        resolve("Users fetched");
      });
    });
  }

  isInstanceReady() {
    return this.isReady;
  }

  getUserById(id: number): User | false {
    const existingUser = this.users.get(id.toString());

    if (!existingUser) {
      return false;
    }
    return existingUser;
  }

  async createNewUser(userDetails: TelegramUserInterface) {
    const user = new User(userDetails);

    await user.writeUserToDb();
    this.users.set(userDetails.id.toString(), user);
    console.log(`New user ${userDetails.id} written to the db`);
  }
}

export const userManager = new UserManager();
