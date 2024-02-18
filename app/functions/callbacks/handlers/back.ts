import { Context } from "telegraf";
import { initUser, parseMessageBeforeSend } from "../../helpers";
import { TelegramUserInterface } from "../../../managers/user/user";
import { constants } from "../../../entities/constants";
import { startKeyboardMenu } from "../../keyboards";

/**
 * command: /start
 * =====================
 * Send welcome message
 *
 */
export const back_start = async (ctx: Context) => {
  await initUser(ctx.from as TelegramUserInterface);
  await ctx.editMessageText(parseMessageBeforeSend(constants.START_CAPTION), {
    reply_markup: startKeyboardMenu,
    parse_mode: "MarkdownV2",
  });
};
