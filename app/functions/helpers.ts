import { userManager } from "../managers/user/userManager";
import { TelegramUserInterface } from "../managers/user/user";

export const parseMessageBeforeSend = (text: string) => {
  // avoid replacing formatting characters
  const newText = text
    // .replace(/\_/g, "\\_")
    // .replace(/\*/g, "\\*")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\~/g, "\\~")
    // .replace(/\`/g, "\\`")
    .replace(/\>/g, "\\>")
    .replace(/\#/g, "\\#")
    .replace(/\+/g, "\\+")
    .replace(/\-/g, "\\-")
    .replace(/\=/g, "\\=")
    .replace(/\|/g, "\\|")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\./g, "\\.")
    .replace(/\!/g, "\\!");

  // console.log(newText);
  return newText;
};

export const initUser = async (userDetails: TelegramUserInterface) => {
  const user = userManager.getUserById(userDetails.id);

  if (user === false) {
    await userManager.createNewUser(userDetails);
  }
};