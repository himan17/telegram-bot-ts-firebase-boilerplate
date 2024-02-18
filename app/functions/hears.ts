import { constants } from "../entities/constants";
import { parseMessageBeforeSend } from "./helpers";
import bot from "./telegraf";

/**
 * hears: any text
 * =====================
 * Listen any text user write
 *
 */
const text = async (): Promise<void> => {
  bot.on("text", async (ctx) => {
    try {
      const txt = ctx.message.text;

      if (txt.toLowerCase() === "hi") {
        await ctx.reply(parseMessageBeforeSend(constants.START_CAPTION), {
          parse_mode: "MarkdownV2",
        });
      }
    } catch (er) {
      console.log("Error from bot's hear command", er);
    }
  });
};

export { text };
export default text;
