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
    const dataClone = [...data];
    for (let i = 0; i < dataClone.length; i++) {
      for (let key in dataClone[i]) {
        if (columnHashmap[key].excludeFromCSV === true) {
          delete dataClone[i][key];
        }
      }
    }
    csvExporter.generateCsv(dataClone);
  };
  return { exportCsv };
};
