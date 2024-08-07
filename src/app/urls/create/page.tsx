"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { nanoid } from "nanoid";
import isValidUrl from "@utils/isValidUrl"

export default function BlogPostCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          initialValue={nanoid(13)}
          label={"Short ID"}
          name={"short_id"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label={"Real/Long URL"}
          name="long_url"
          rules={[
            {
              required: true,
              validator(_, value) {
                return isValidUrl(value)
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Description"}
          name={"description"}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Create>
  );
}
