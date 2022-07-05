import React from 'react';
import { GitPullRequest, AlertCircle, Messages, Database, LayoutDashboard, ChartInfographic, Activity, AddressBook, Notification } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { useRouter } from 'next/router';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  slug: string;
}

function MainLink({ icon, color, label, slug}: MainLinkProps) {

	const router = useRouter()

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
	  onClick={() => router.push(slug) }
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <LayoutDashboard size={16} />, color: 'blue', label: 'Dashboard', slug: '/' },
  { icon: <Notification size={16} />, color: 'lime', label: 'Notifications', slug: 'notifications' },
  { icon: <ChartInfographic size={16} />, color: 'teal', label: 'Stats', slug: 'stats' },
  { icon: <Activity size={16} />, color: 'violet', label: 'Interaction', slug: 'interaction' },
  { icon: <Database size={16} />, color: 'grape', label: 'Data' , slug: 'data'},
  { icon: <AddressBook size={16} />, color: 'blue', label: 'CRM', slug: 'crm'},
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
