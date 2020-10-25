import { renderFileToString } from 'https://deno.land/x/dejs/mod.ts';
import { multiSelect } from '../models/pg_model.ts';
import { select } from '../models/pg_model.ts';
import TSql from '../models/sql.ts';

const home = async({response} : {response: any}) => {
    const dataTable:any = await multiSelect(
    [
        {text : TSql['menuFindAll']} ,
        {text : TSql['blogFindAll']},
        {text : TSql['blogmainFindAll']}
        
    ]
    );
    //console.log(dataTable);
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            menu : dataTable[0],
            blogInfo : dataTable[1],
            blogMain : dataTable[2]
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
            }),
            blogInfo : await select({
                text : TSql['blogFindAll']
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
            }),
            blogInfo : await select({
                text : TSql['blogFindAll']
            }),
            blogAbout : await select({
                text : TSql['blogaboutFindAll']
            })
        },
        subview : {
            namafile : "./views/About.ejs"
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
            }),
            blogInfo : await select({
                text : TSql['blogFindAll']
            }),
            blogCtlgw : await select({
                text : TSql['catalogwFindAll']
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
            }),
            blogInfo : await select({
                text : TSql['blogFindAll']
            }),
            blogCtlgp : await select({
                text : TSql['catalogpFindAll']
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
            }),
            blogInfo : await select({
                text : TSql['blogFindAll']
            }),
            blogCtlgb : await select({
                text : TSql['catalogbFindAll']
            })
        },
        subview : {
            namafile : "./views/produkb.ejs"
        }
    });
    response.body = new TextEncoder().encode(html);
}
export { home, signup, about, catalogw, catalogp, catalogb}