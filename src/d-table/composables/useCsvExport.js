import { ExportToCsv } from "export-to-csv";
export const useCsvExport = (generatedCsvName) => {
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: generatedCsvName,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  const csvExporter = new ExportToCsv(options);

  const exportCsv = (data, columnHashmap) => {
    console.log(columnHashmap);
    const dataClone = data.map((datum) => {
      let returnedDataClone = {};
      Object.keys(columnHashmap).forEach((key) => {
        if (
          !columnHashmap[key].excludeFromCSV &&
          Object.prototype.hasOwnProperty.call(datum, key)
        ) {
          returnedDataClone[key] = datum[key];
        }
      });
      return returnedDataClone;
    });
    csvExporter.generateCsv(dataClone);
  };
  return { exportCsv };
};
