import { isValid, parse, parseISO, format } from 'date-fns';

export function isDateString(str: string) {
  // Try to parse the ISO date string
  const date = parseISO(str);
  return isValid(date);
}

export function formatDateString(str: string) {
  // First check if it's a valid date
  if (!isDateString(str)) {
    return null; // Or handle invalid dates as needed
  }
  
  // Parse the ISO date string and format it
  const date = parseISO(str);
  return format(date, 'dd-MM-yyyy');
}