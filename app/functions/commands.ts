import { constants } from "../entities/constants";
import { userManager } from "../managers/user/userManager";
import { initUser, parseMessageBeforeSend } from "./helpers";
import { startKeyboardMenu } from "./keyboards";
import bot from "./telegraf";

/**
 * command: /start
 * =====================
 * Send welcome message
 *
 */
export const start = async (): Promise<void> => {
  bot.start(async (ctx) => {
    try {
      await initUser(ctx.from);
      await ctx.reply(parseMessageBeforeSend(constants.START_CAPTION), {
        reply_markup: startKeyboardMenu,
        parse_mode: "MarkdownV2",
      });
    } catch (er) {
      console.log("Error from start command", er);
    }
  });
};

/**
 * Run bot
 * =====================
 * Runs the bot
 *
 */
export const launch = async (): Promise<void> => {
  try {
    while (!userManager.isInstanceReady()) {
      await sleep(0.5);
    }
    bot.launch();
    console.log("Bot started!");
  } catch (er) {
    console.log("Error from ", er);
  }
};

const sleep = async (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
};
