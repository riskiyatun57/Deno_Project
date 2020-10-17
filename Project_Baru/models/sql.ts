interface ISql {
    [index : string] : string;
}

const TSql = {} as ISql;
TSql['menuFindAll'] = "select * from tbl_menu;";
TSql['menuFindByKode'] = "select * from tbl_menu where kode = $1;";
TSql['menuFindInKode'] = "select * from tbl_menu where kode in($1, $2, $3);";

export default TSql;