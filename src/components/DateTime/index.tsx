import { Typography } from 'antd';
import { Dayjs } from 'dayjs';
import styles from './DateTime.module.css';

interface DateTimeProps {
  value: Dayjs;
}

export const DateTime = ({ value }: DateTimeProps) => {
  return (
    <Typography.Title level={4} className={styles.container}>
      {value.format('DD/MM/YYYY HH:mm:ss')}
    </Typography.Title>
  );
};
