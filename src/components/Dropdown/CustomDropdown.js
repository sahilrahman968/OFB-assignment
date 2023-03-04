import { DownOutlined } from '@ant-design/icons'
import { Dropdown, message, Space } from 'antd'

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`)
}

const CustomDropdown = ({items}) => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Sort
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)
export default CustomDropdown
