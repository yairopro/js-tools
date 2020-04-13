const buildColumnIterator = require("./buildColumnIterator");

module.exports = function mapColumns(col1, col2, ...etc){
	const columnMappers = [col1, col2, ...etc];

	return function (table){
		const preparedMappers = columnMappers.map(
			(mapColumn, columnIndex) => {
				const columnIterator = buildColumnIterator(table, columnIndex);
				return (item, index) => mapColumn(item, index, columnIterator);
			}
		);

		return table.map((row, rowIndex) =>
			row.map((item, columnIndex) => {
				const mapColumn = preparedMappers[columnIndex];
				return mapColumn ? mapColumn(item, rowIndex) : item;
			})
		);
	};
};
