import { Telegraf } from "telegraf";
import { config } from "../config/config";

const bot = new Telegraf(config.bot_token);

export { bot };
export default bot;
