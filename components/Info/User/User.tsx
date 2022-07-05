import React from 'react';
import { ChevronRight, ChevronLeft } from 'tabler-icons-react';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core';

export function User() {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        }}
      >
        <Group>
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQHEEHl7BOS7VQ/profile-displayphoto-shrink_800_800/0/1624910537680?e=1662595200&v=beta&t=PCSAVgzUhmQ0v9NzgF1z1sVyxwKwMCCFYcHrtUUssEs"
            radius="xl"
          />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Mikku
            </Text>
            <Text color="dimmed" size="xs">
              michael.lindemans@outlook.com
            </Text>
          </Box>

          {theme.dir === 'ltr' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Group>
      </UnstyledButton>
    </Box>
  );
}
