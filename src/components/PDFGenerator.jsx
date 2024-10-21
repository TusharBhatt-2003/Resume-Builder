import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument"; // Make sure to import your PDFDocument component

const PDFGenerator = ({ formData }) => (
  <div className="mt-4">
    <PDFDownloadLink
      document={<PDFDocument formData={formData} />}
      fileName="resume.pdf"
      className="flex justify-center items-center"
    >
      {({ loading }) =>
        loading ? (
          <button className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg cursor-not-allowed flex items-center">
            <svg className="animate-spin mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"></path>
            </svg>
             ...
          </button>
        ) : (
          <button className="px-10 py-3 bg-[#084d08bc] text-white rounded-lg hover:bg-[#084d088b] transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F2EEE5" viewBox="0 0 256 256" className="">
              <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-61.66a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,164.69V120a8,8,0,0,1,16,0v44.69l10.34-10.35A8,8,0,0,1,157.66,154.34Z"></path>
            </svg>
          </button>
        )
      }
    </PDFDownloadLink>
  </div>
);

export default PDFGenerator;
