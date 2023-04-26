import {
  Card,
  Col,
  DatePicker,
  DatePickerProps,
  Descriptions,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import Countdown from "antd/es/statistic/Countdown";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { CopyButton } from "./components/CopyButton/CopyButton";
import { DateTime } from "./components/DateTime";
import "./styles.css";

const FORMAT = "DD/MM/YYYY HH:mm:ss";

function App() {
  const [state, setState] = useState<Dayjs>(dayjs().add(5, "minutes"));
  const [now, setNow] = useState(dayjs());

  const handleChange: DatePickerProps["onChange"] = (value) => {
    if (value) {
      setState(value);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setNow(dayjs());
    }, 1000);
  }, []);

  return (
    <div id="myshopit-timestamp-converter">
      <Card title="Countdown timer converter">
        <Form layout="vertical">
          <Row gutter={24}>
            <Col sm={12} xs={24}>
              <Form.Item
                label="Select a Date and Time"
                tooltip="Use the date and time picker to select the date and time that you want to count down to."
                extra="Format is DD/MM/YYYY HH:mm:ss"
              >
                <DatePicker
                  showTime
                  allowClear={false}
                  format={FORMAT}
                  value={state}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24}>
              <Form.Item
                label="Countdown Timestamp"
                tooltip="The timestamp value of the countdown date and time."
                extra="Timestamp is include miliseconds"
              >
                <Space.Compact>
                  <Input readOnly value={state.valueOf()} />
                  <CopyButton content={state.valueOf().toString()} />
                </Space.Compact>
              </Form.Item>
            </Col>
          </Row>

          <Descriptions bordered column={1}>
            <Descriptions.Item label="Now">
              {now.format(FORMAT)}
            </Descriptions.Item>
            <Descriptions.Item label="Time end">
              {state.format(FORMAT)}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <Typography.Text type="danger" strong>
                  Demo simulator
                </Typography.Text>
              }
            >
              <Typography.Text>End after:</Typography.Text>{" "}
              <Countdown value={state.valueOf()} />
            </Descriptions.Item>
          </Descriptions>
          <DateTime value={now} />
        </Form>
      </Card>
    </div>
  );
}

export default App;
