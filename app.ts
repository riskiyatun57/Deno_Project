//1. import modul application dari https://deno.land/x/oak/mod.ts
import { Application, send } from 'https://deno.land/x/oak/mod.ts';
import userMidleware from './userMidleware.ts';
import router from './rute.ts';
import "https://deno.land/x/dotenv/load.ts";

//2. new instance application ke variabel kita
const app = new Application();
app.use(userMidleware);

//3. definisikan middleware app kita
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}`
    });
});

//4. jalankan server
console.log("service berjalan di port 8000");
await app.listen({port :8000});