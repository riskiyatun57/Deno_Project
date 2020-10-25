import { Router } from 'https://deno.land/x/oak/mod.ts';
import { home, signup, about, catalogw, catalogp, catalogb } from './controllers/blog.ts';

const router = new Router();

router
    .get("/", home )
    .get("/daftar", signup)
    .get("/About", about)
    .get("/ctlgw", catalogw)
    .get("/ctlgp", catalogp)
    .get("/ctlgb", catalogb)

export default router