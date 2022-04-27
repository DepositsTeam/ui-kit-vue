import { ExportToCsv } from "export-to-csv";
export const useCsvExport = (data, generatedCsvName) => {
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

  console.log(data);

  const csvExporter = new ExportToCsv(options);

  const exportCsv = () => csvExporter.generateCsv(data.value);
  return { exportCsv };
};
