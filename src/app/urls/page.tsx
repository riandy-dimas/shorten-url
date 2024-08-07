"use client";

import {
  DeleteButton,
  List,
  TextField,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Switch, Table } from "antd";
import Link from "next/link";

export default function CategoryList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="short_id" title={"Short ID"} />
        <Table.Column dataIndex="long_url" title={"Real/Long URL"} render={(value) => {
          return <Link href={value} target="_blank">{value}</Link>
        }} />
        <Table.Column
          dataIndex="description"
          title="Description"
          render={(value) => (
            <TextField
              value={value ? value : 'No description'}
              type={value ? undefined : 'secondary'}
              italic={!value}
            />
          )}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <Switch
                checkedChildren="Active"
                unCheckedChildren="Inactive"
                defaultChecked
                disabled
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.id}
                confirmTitle="Are you sure want to delete this URL?"
                disabled
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
