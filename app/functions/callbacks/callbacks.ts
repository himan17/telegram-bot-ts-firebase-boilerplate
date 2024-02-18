import { constants } from "../../entities/constants";
import { parseMessageBeforeSend } from "../helpers";
import { backKeyboardMenu } from "../keyboards";
import bot from "../telegraf";
import { back_start } from "./handlers/back";

/**
 * callback_data: "start_buiding_cb"
 * =====================
 * Handles all the back navigations from the bot
 *
 */
export const start_buiding_cb = async () => {
  bot.action("start_buiding_cb", async (ctx) => {
    try {
      await ctx.editMessageText(
        parseMessageBeforeSend(constants.START_BUILD_CAPTION),
        {
          reply_markup: backKeyboardMenu,
          parse_mode: "MarkdownV2",
        }
      );
    } catch (er) {
      console.log("Error from back callback", er);
    }
  });
};

/**
 * callback_data: /^back_(\w+)$/
 * =====================
 * Handles all the back navigations from the bot
 *
 */
export const back_callback_handler = async () => {
  bot.action(/^back_(\w+)$/, async (ctx) => {
    try {
      const data = (ctx.callbackQuery as any).data;

      const type = data.split("_")[1];

      if (type === "start") {
        await back_start(ctx);
      } else {
      }
    } catch (er) {
      console.log("Error from back callback", er);
    }
  });
};
