interface ISql {
    [index : string] : string;
}

const TSql = {} as ISql;
TSql['menuFindAll'] = "select * from tbl_menu;";
TSql['menuFindByKode'] = "select * from tbl_menu where kode = $1;";
TSql['menuFindInKode'] = "select * from tbl_menu where kode in($1, $2, $3);";
TSql['blogFindAll'] = "select * from tbl_bloginfo;";
TSql['blogmainFindAll'] = "select * from tbl_blogmain;";
TSql['blogaboutFindAll'] = "select * from tbl_about;";
TSql['catalogwFindAll'] = "select * from tbl_catalogw;";
TSql['catalogpFindAll'] = "select * from tbl_catalogp;";
TSql['catalogbFindAll'] = "select * from tbl_catalogb;";

export default TSql;