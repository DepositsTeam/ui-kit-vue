import { mkConfig, generateCsv, download } from "export-to-csv";
export const useCsvExport = (generatedCsvName) => {
  const options = mkConfig({
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: false,
    title: "",
    // showTitle: true,
    filename: generatedCsvName,
    // title: generatedCsvName,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  });

  // const csvExporter = new ExportToCsv(options);

  const exportCsv = (data, columnHashmap) => {
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
    const csv = generateCsv(options)(dataClone);
    download(options)(csv);
  };
  return { exportCsv };
};
