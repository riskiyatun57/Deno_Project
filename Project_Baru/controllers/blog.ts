import { renderFileToString } from 'https://deno.land/x/dejs/mod.ts';
import { select } from '../models/pg_model.ts';
import TSql from '../models/sql.ts';

const home = async({response} : {response: any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            menu : await select({
                text : TSql['menuFindAll']
            })
        },
        subview : {
            namafile : "./views/blog-main.ejs",
        }
    });
    response.body = new TextEncoder().encode(html);
}
const signup = async({response} : {response: any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            menu : await select({
                text : TSql['menuFindInKode'],
                args : ['zm', 'gor', 'csh']
            })
        },
        subview : {
            namafile : "./views/signup.ejs"
        }
    });
    response.body = new TextEncoder().encode(html);
}


const about = async({response} : {response: any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            menu : await select({
                text : TSql['menuFindInKode'],
                args : ['zm', 'gor', 'csh']
            })
        },
        subview : {
            namafile : "./views/about.ejs"
        }
    });
    response.body = new TextEncoder().encode(html);
}

const catalogw = async({response} : {response: any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            menu : await select({
                text : TSql['menuFindInKode'],
                args : ['zm', 'gor', 'csh']
            })
        },
        subview : {
            namafile : "./views/produkw.ejs"
        }
    });
    response.body = new TextEncoder().encode(html);
}

const catalogp = async({response} : {response: any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            menu : await select({
                text : TSql['menuFindInKode'],
                args : ['zm', 'gor', 'csh']
            })
        },
        subview : {
            namafile : "./views/produkp.ejs"
        }
    });
    response.body = new TextEncoder().encode(html);
}

const catalogb = async({response} : {response: any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            menu : await select({
                text : TSql['menuFindInKode'],
                args : ['zm', 'gor', 'csh']
            })
        },
        subview : {
            namafile : "./views/produkb.ejs"
        }
    });
    response.body = new TextEncoder().encode(html);
}
export { home, signup, about, catalogw, catalogp, catalogb}