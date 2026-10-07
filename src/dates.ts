const format = (date: string, options: Intl.DateTimeFormatOptions) =>
    new Date(date).toLocaleDateString('en-GB', { ...options, timeZone: 'UTC' });

// "2026-01-31" -> "31 January 2026"
export const formatDate = (date: string) => format(date, { day: 'numeric', month: 'long', year: 'numeric' });

// "2026-01" -> "January 2026"
export const formatMonth = (date: string) => format(date, { month: 'long', year: 'numeric' });
