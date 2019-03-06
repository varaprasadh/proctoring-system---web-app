const _tables = [
    "CGPA                        ",
    "four_one_attendence         ",
    "four_one_one_issues_remarks ",
    "four_one_sub_codes          ",
    "four_one_sub_scores         ",
    "four_one_two_issues_remarks ",
    "four_two_attendence         ",
    "four_two_one_issues_remarks ",
    "four_two_sub_codes          ",
    "four_two_sub_scores         ",
    "four_two_two_issues_remarks ",
    "one_one_attendence          ",
    "one_one_one_issues_remarks  ",
    "one_one_sub_codes           ",
    "one_one_sub_scores          ",
    "one_one_two_issues_remarks  ",
    "one_two_attendence          ",
    "one_two_one_issues_remarks  ",
    "one_two_sub_codes           ",
    "one_two_sub_scores          ",
    "one_two_two_issues_remarks  ",
    "three_one_attendence        ",
    "three_one_one_issues_remarks",
    "three_one_sub_codes         ",
    "three_one_sub_scores        ",
    "three_one_two_issues_remarks",
    "three_two_attendence        ",
    "three_two_one_issues_remarks",
    "three_two_sub_codes         ",
    "three_two_sub_scores        ",
    "three_two_two_issues_remarks",
    "two_one_attendence          ",
    "two_one_one_issues_remarks  ",
    "two_one_sub_codes           ",
    "two_one_sub_scores          ",
    "two_one_two_issues_remarks  ",
    "two_two_attendence          ",
    "two_two_one_issues_remarks  ",
    "two_two_sub_codes           ",
    "two_two_sub_scores          ",
    "two_two_two_issues_remarks  "
];


module.exports = {
    legacy_table: "students".trim(),
    map_table: "map_fac_to_student".trim(),
    tables_to_init: [..._tables.map(table => table.trim())]

}