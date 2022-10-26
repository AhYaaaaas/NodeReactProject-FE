import { Timeline } from "antd";

export default () => {
  return (
    <div
      style={{
        height: "100%",
        width: "30%",
        position: "absolute",
        right: 0,
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "lighter" }}>Edit Record</h1>
      <hr />
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  );
};
