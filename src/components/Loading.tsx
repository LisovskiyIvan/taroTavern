import { LoadingOutlined } from "@ant-design/icons"
import { Space, Spin } from "antd"


export const Loading = () => {
    return (
    <Space  >
    
    <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />

  </Space>
    )
}