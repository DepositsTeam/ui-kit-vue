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

  const exportCsv = (data,) => {
    console.log("Data is", data);
    csvExporter.generateCsv(data);
  };
  return { exportCsv };
};
