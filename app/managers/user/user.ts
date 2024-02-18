import { db } from "../../db/firebase";

export interface TelegramUserInterface {
  id: number;
  username?: string;
  first_name: string;
  last_name?: string;
  is_premium?: boolean;
  is_bot: boolean;
  language_code?: string;
}

export interface UserInterface {
  id: number;
  username?: string;
  first_name: string;
  last_name?: string;
  is_premium?: boolean;
  is_bot: boolean;
  language_code?: string;
}

export class User {
  private id: number;
  private username = "";
  private first_name: string;
  private last_name = "";
  private is_premium = false;
  private is_bot: boolean;
  private language_code = "en";

  async writeUserToDb() {
    const userDetails = {
      id: this.id,
      username: this.username,
      is_bot: this.is_bot,
      language_code: this.language_code,
      is_premium: this.is_premium || false,
      first_name: this.first_name,
      last_name: this.last_name || "",
    };
    await db.writeData("Users", userDetails.id.toString(), userDetails);
  }

  constructor(userDetails: UserInterface) {
    this.first_name = userDetails.first_name;
    if (userDetails.last_name) this.last_name = userDetails.last_name;
    this.id = userDetails.id;
    if (userDetails.language_code)
      this.language_code = userDetails.language_code;
    if (userDetails.username) this.username = userDetails.username;
    this.is_bot = userDetails.is_bot;
    if (userDetails.is_premium) this.is_premium = userDetails.is_premium;
  }

  public getUserDetails() {
    const userDetails = {
      id: this.id,
      username: this.username,
      is_bot: this.is_bot,
      language_code: this.language_code,
      is_premium: this.is_premium,
      first_name: this.first_name,
      last_name: this.last_name,
    };
    return userDetails;
  }
}
