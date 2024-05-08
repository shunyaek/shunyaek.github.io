"use client";

import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  PinInput,
} from '@mantine/core';
import { IconBrandGoogle, IconBrandApple } from "@tabler/icons-react";

export default function SignIn() {
  const [type, toggle] = useToggle(['phone_number', 'one_time_password']);
  const form = useForm({
    initialValues: {
      phone_number: '',
      one_time_password: '',
    },

    validate: {
      phone_number: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid phone number'),
      one_time_password: (val) => (val.length !== 6 ? 'OTP must have 6 characters only!' : null),
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" weight={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <Button leftIcon={<IconBrandGoogle />} variant={"default"} color="gray" />
        <Button leftIcon={<IconBrandApple />} variant={"default"} color="gray" />
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form action={"/authentication/signin"} method={"POST"}>
        <Stack>
          <TextInput
            required
            label="Phone Number"
            placeholder="+917818888887"
            value={form.values.phone_number}
            onChange={(event) => form.setFieldValue('phone_number', event.currentTarget.value)}
            error={form.errors.phone_number && 'Invalid phone number'}
            radius="md"
          />
          {type === 'one_time_password' && (
            <PinInput
              oneTimeCode
              type={"number"}
              placeholder='•'
              length={6}
              required
              value={form.values.one_time_password}
              onChange={(event) => form.setFieldValue('one_time_password', event)}
              // error={form.errors.one_time_password && 'OTP must have 6 characters only!'}
              radius="md"
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}