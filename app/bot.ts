import * as command from "./functions/commands";
import * as callback from "./functions/callbacks/callbacks";
import * as hears from "./functions/hears";

(async () => {
  // commands
  await command.start();
  await command.launch();

  // hears
  await hears.text();

  // callbacks
  await callback.back_callback_handler();
  await callback.start_buiding_cb();
})();
