import dayjs from 'dayjs';
import 'dayjs/locale/es';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
dayjs.locale('es');

export const dayjsInstance = (date: string) => dayjs(date || new Date());

const useDates = () => {
  const FORMAT = 'YYYY-MM-DD';

  const formatDate = (date: string, format = FORMAT) =>
    dayjs(date).format(format);

  // fecha con formato YYYY-MM-DD en zona horaria de Venezuela
  const formatDateVzla = (date: string, format = FORMAT) =>
    dayjs(date).add(3, 'hour').format(format);

  const currentYear = dayjs().format('YYYY');

  const currentDate = dayjs(new Date()).format(FORMAT);

  return {
    formatDate,
    formatDateVzla,
    currentYear,
    currentDate,
    rangeToday: {
      startDate: currentDate,
      endDate: currentDate,
    },
  };
};

export default useDates;
