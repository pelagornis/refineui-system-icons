import { useEffect, useState } from 'react';
import {
  Badge,
  Divider,
  SegmentedControl,
  SegmentedControlItem,
  Stack,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Toaster,
} from '@refineui/react';
import {
  PACKAGE_MANAGERS,
  PLATFORMS,
  type PackageManager,
  type SetupStep,
} from '../data/platforms';
import { CodeSnippet } from './CodeSnippet';

const PM_STORAGE_KEY = 'refineui-docs-package-manager';

export default function PlatformSetup() {
  const [platformId, setPlatformId] = useState(PLATFORMS[0].id);
  const [packageManager, setPackageManager] = useState<PackageManager>('npm');

  useEffect(() => {
    const stored = localStorage.getItem(PM_STORAGE_KEY) as PackageManager | null;
    if (stored && PACKAGE_MANAGERS.includes(stored)) setPackageManager(stored);
  }, []);

  const selectPackageManager = (value: PackageManager) => {
    setPackageManager(value);
    localStorage.setItem(PM_STORAGE_KEY, value);
  };

  return (
    <>
      <Tabs value={platformId} onValueChange={(value) => setPlatformId(value as typeof platformId)}>
        <TabsList className="flex-wrap">
          {PLATFORMS.map((platform) => (
            <TabsTrigger key={platform.id} value={platform.id}>
              {platform.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {PLATFORMS.map((platform) => (
          <TabsContent key={platform.id} value={platform.id}>
            <Stack direction="column" gap="sizeLarge" className="pt-refineui-size-medium">
              <Stack direction="row" align="center" gap="sizeXSmall" wrap>
                <Text variant="titleSm" as="h3">
                  {platform.coordinate}
                </Text>
                <Badge variant="neutral">{platform.version}</Badge>
              </Stack>

              <Text variant="bodyMd" as="p" className="text-refineui-alias-foreground-secondary">
                {platform.summary}
              </Text>

              <Divider />

              {platform.steps.map((step) => (
                <SetupStepBlock
                  key={step.title}
                  platformLabel={platform.label}
                  step={step}
                  packageManager={packageManager}
                  onPackageManagerChange={selectPackageManager}
                />
              ))}
            </Stack>
          </TabsContent>
        ))}
      </Tabs>

      <Toaster />
    </>
  );
}

interface SetupStepBlockProps {
  platformLabel: string;
  step: SetupStep;
  packageManager: PackageManager;
  onPackageManagerChange: (value: PackageManager) => void;
}

function SetupStepBlock({
  platformLabel,
  step,
  packageManager,
  onPackageManagerChange,
}: SetupStepBlockProps) {
  const installCode = step.install?.[packageManager];

  return (
    <Stack direction="column" gap="sizeXSmall">
      <Text
        variant="captionSm"
        as="h4"
        className="uppercase tracking-wide text-refineui-alias-foreground-tertiary"
      >
        {step.title}
      </Text>
      {step.note && (
        <Text variant="captionLg" as="p" className="text-refineui-alias-foreground-secondary">
          {step.note}
        </Text>
      )}

      {step.install ? (
        <Stack direction="column" gap="sizeXSmall">
          <SegmentedControl
            value={packageManager}
            onValueChange={(value) => onPackageManagerChange(value as PackageManager)}
            aria-label="Package manager"
          >
            {PACKAGE_MANAGERS.map((manager) => (
              <SegmentedControlItem key={manager} value={manager}>
                {manager}
              </SegmentedControlItem>
            ))}
          </SegmentedControl>
          {installCode && (
            <CodeSnippet
              code={installCode}
              label={`${platformLabel} ${step.title} (${packageManager})`}
            />
          )}
        </Stack>
      ) : (
        step.code && <CodeSnippet code={step.code} label={`${platformLabel} ${step.title}`} />
      )}
    </Stack>
  );
}
