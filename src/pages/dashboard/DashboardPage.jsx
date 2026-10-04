import { getVersion } from '@tauri-apps/api/app';
import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { invoke } from '@tauri-apps/api/core';
import PageShell from '../../layouts/PageShell/PageShell';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function DashboardPage() {
  return (
    <PageShell>
      <PageHeader title="Good Morning" subtitle="Here's your job search at a glance" />
    </PageShell>
  );
}
