
// Google Sheets API utility functions
interface SheetData {
  [key: string]: string | number | File | null;
}

export async function submitToGoogleSheet(
  formData: SheetData,
  sheetId: string,
  sheetName: string
): Promise<{ success: boolean; message: string }> {
  try {
    // Format the data for Google Sheets
    const formattedData = formatDataForSheets(formData);
    
    // Google Apps Script URL - you'll need to deploy a Google Apps Script as a web app
    // The URL should be replaced with your own deployed script URL
    const scriptURL = `https://script.google.com/macros/s/${sheetId}/exec`;
    
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify({
        data: formattedData,
        sheet: sheetName
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const result = await response.json();
    return { success: true, message: "Data successfully submitted to Google Sheets" };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { 
      success: false, 
      message: "Failed to submit data. Please try again or contact us directly." 
    };
  }
}

// Helper function to format data for Google Sheets
function formatDataForSheets(data: SheetData): Record<string, string> {
  const formatted: Record<string, string> = {};
  
  // Convert all values to strings that Google Sheets can handle
  Object.entries(data).forEach(([key, value]) => {
    // Skip file objects - we can't send them directly to sheets
    if (value instanceof File) {
      formatted[key] = `[File: ${value.name}]`;
    } else if (value === null || value === undefined) {
      formatted[key] = '';
    } else {
      formatted[key] = String(value);
    }
  });
  
  // Add timestamp
  formatted['timestamp'] = new Date().toISOString();
  
  return formatted;
}

// Google Sheets configuration
export const SHEET_CONFIG = {
  CONTACT_FORM: {
    SHEET_ID: "YOUR_CONTACT_FORM_SCRIPT_ID", // Replace with your Google Apps Script ID
    SHEET_NAME: "ContactFormResponses"
  },
  CUSTOM_ORDER_FORM: {
    SHEET_ID: "YOUR_CUSTOM_ORDER_SCRIPT_ID", // Replace with your Google Apps Script ID 
    SHEET_NAME: "CustomOrderResponses"
  }
};
