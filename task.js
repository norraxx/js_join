/*
 * Your goal is to simulate the database behavior - write the join function,
 * which will connect two tables and give a result as a third table.
 * Choose one of algorithms from wiki and implement it.
 * https://en.wikipedia.org/wiki/Category:Join_algorithms
 */

let table_1_row_0 = ['cat', 'tom'];
let table_1_row_1 = ['mice', 'jerry'];
let table_1 = [
    table_1_row_0,
    table_1_row_1,
];

let table_2_row_0 = ['cat', 'mice'];
let table_2_row_1 = ['mice', 'cheese'];
let table_2 = [
    table_2_row_0,
    table_2_row_1,
];

/**
 * This is an example for simple join callback, which can be used as a filter.
 *
 * @param row_from_table_1
 * @param row_from_table_2
 * @returns {boolean}
 */
function simple_join_callback(row_from_table_1, row_from_table_2) {
    return row_from_table_1[0] === 'cat';
}

/**
 * This is an example for select, which will create a row for a new table
 *
 * @param row_from_table_1
 * @param row_from_table_2
 * @returns Array
 */
function select_callback(row_from_table_1, row_from_table_2) {
    return [row_from_table_1[0]];
}

/**
 * This is an example for select, which will create a row for a new table
 *
 * @param result_table
 * @returns Array
 */
function order_callback(result_table) {
    result_table.sort();
    return result_table;
}


/**
 * Create a function that will join two tables. Result of the function should be third table.
 **/
function join(
    table1,
    table2,
    on = simple_join_callback,
    select_columns = select_callback,
    order_by = order_callback,
    is_left_join = false, // advanced - read the documentation how left join suppose to behave
) {
    // TODO: your pain starts here.
}

console.log(join(table_1, table_2, simple_join_callback, select_callback, order_callback, true))
